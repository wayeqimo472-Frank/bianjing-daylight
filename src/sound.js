export function setupSound(button, label) {
  let sound, active=true, lastStep=0;
  const unlock = new AbortController();
  const zones={
    field:[390,.078,0,.026], river:[490,.125,.022,.014], dock:[650,.095,.30,.006],
    market:[950,.043,.48,0], shop:[670,.025,.31,0], tavern:[810,.014,.54,0], lane:[510,.046,.075,.012],
  };
  const chatterVoices=[[108,510,1110],[142,430,1510],[184,660,1740],[121,320,1330],
    [163,580,1870],[221,420,2170],[196,740,1480],[132,490,2000],[153,390,1180]];
  function makeChatter(audio) {
    const rate=22050, seconds=13;
    const buffer=audio.createBuffer(1,rate*seconds,rate);
    const samples=buffer.getChannelData(0);
    for(const [pitch,f1,f2] of chatterVoices) {
      let start=Math.random()*rate;
      while(start<samples.length) {
        const phrase=.8+Math.random()*2.3;
        const syllables=3+Math.floor(Math.random()*6);
        for(let j=0;j<syllables;j++) {
          const onset=Math.floor(start+j*phrase*rate/syllables);
          const count=Math.floor(rate*(.083+Math.random()*.14));
          const base=pitch*(.82+Math.random()*.38);
          const strength=.045+Math.random()*.065;
          const first=Math.round(f1/base)*base;
          const second=Math.round(f2/base)*base;
          let phase=0;
          for(let k=0;k<count;k++) {
            const u=k/count;
            phase+=2*Math.PI*base/rate*(1.10-u*.23);
            const shape=Math.sin(Math.PI*u)*Math.min(1,u*12);
            const voice=Math.sin(phase)*.22+Math.sin(phase*first/base)*.49+Math.sin(phase*second/base)*.25;
            samples[(onset+k)%samples.length]+=strength*shape*(voice+(Math.random()-.5)*(.20+u*.18));
          }
        }
        start+=rate*(phrase+.19+Math.random()*.91);
      }
    }
    return buffer;
  }
  function engine() {
    const audio=new AudioContext();
    const noise=audio.createBuffer(1,audio.sampleRate*9,audio.sampleRate);
    const samples=noise.getChannelData(0);
    let previous=0;
    for(let i=0;i<samples.length;i++){
      previous=previous*.83+(Math.random()*2-1)*.15;
      samples[i]=previous;
    }
    const output=audio.createGain();
    output.gain.value=0;
    output.connect(audio.destination);
    function bed(type, frequency,rate,buffer=noise){
      const track=audio.createBufferSource(),filter=audio.createBiquadFilter(),gain=audio.createGain();
      track.buffer=buffer;
      track.loop=true;
      track.playbackRate.value=rate;
      filter.type=type;
      filter.frequency.value=frequency;
      gain.gain.value=0;
      track.connect(filter).connect(gain).connect(output);
      track.start(Math.random()*1.2);
      return {filter,gain};
    }
    const chatter=makeChatter(audio);
    return {audio,noise,output,wind:bed('lowpass',510,1.22),
      crowd:bed('lowpass',1650,1,chatter),distant:bed('lowpass',890,.87,chatter)};
  }
  function render() {
    button.setAttribute('aria-pressed',String(active));
    button.setAttribute('aria-label',active?'关闭环境音':'开启环境音');
    label.textContent=active?(sound?.audio.state==='running'?'环境音已开':'环境音待播放'):'环境音';
  }
  async function resume() {
    if (!active) return;
    try{
      sound??=engine();
      sound.output.gain.setTargetAtTime(.72,sound.audio.currentTime,.12);
      await sound.audio.resume();
      if (sound.audio.state==='running') unlock.abort();
      render();
    }catch{
      render();
    }
  }
  // Browsers can require a user gesture to start a Web Audio context.
  for (const type of ['pointerdown','pointerup','touchend','keydown','click']) {
    window.addEventListener(type,event=>{
      if (!event.isTrusted || button.contains(event.target)) return;
      if (type==='pointerdown' && event.pointerType!=='mouse') return;
      if (type==='pointerup' && event.pointerType==='mouse') return;
      void resume();
    },{capture:true,signal:unlock.signal});
  }
  button.addEventListener('click',()=>{
    active=!active;
    if (active) void resume();
    else if (sound) sound.output.gain.setTargetAtTime(0,sound.audio.currentTime,.12);
    render();
  });
  render();
  void resume();
  function chirp(frequency,level, t) {
    const {audio,output}=sound;
    const note=audio.createOscillator(),gain=audio.createGain();
    note.frequency.setValueAtTime(frequency,t);
    note.frequency.exponentialRampToValueAtTime(frequency*1.43,t+.057);
    gain.gain.setValueAtTime(.0001,t);
    gain.gain.exponentialRampToValueAtTime(level,t+.024);
    gain.gain.exponentialRampToValueAtTime(.0001,t+.083);
    note.connect(gain).connect(output);
    note.start(t);
    note.stop(t+.085);
  }
  let nextChirp=5.1, nextTradeSound=1.1;
  function update(zone, moving, nearBridge, dt) {
    if(!active||sound?.audio.state!=='running'||document.hidden)return;
    const [frequency,breeze,crowd,bird]=zones[zone]??zones.river;
    const {audio,output,noise}=sound;
    const t=audio.currentTime;
    sound.wind.filter.frequency.setTargetAtTime(frequency,t,.35);
    sound.wind.gain.gain.setTargetAtTime(breeze*(.77+.15*Math.sin(t*.8)+.11*Math.cos(t*.31)),t,.4);
    sound.crowd.filter.frequency.setTargetAtTime(frequency*2.3,t,.45);
    sound.crowd.gain.gain.setTargetAtTime(crowd,t,.55);
    sound.distant.gain.gain.setTargetAtTime(crowd*.50,t,.65);
    nextTradeSound-=dt;
    if(nextTradeSound<=0 && ['dock','market','shop','tavern'].includes(zone)){
      const knock=audio.createBufferSource(), tone=audio.createBiquadFilter(), level=audio.createGain();
      knock.buffer=noise;
      tone.type='bandpass';
      tone.frequency.value=zone==='dock'?310:zone==='market'?560:1580;
      tone.Q.value=zone==='dock'?2.0:5.5;
      level.gain.setValueAtTime(zone==='dock'?.29:.21,t);
      level.gain.exponentialRampToValueAtTime(.001,t+.12);
      knock.connect(tone).connect(level).connect(output);
      knock.start(t,Math.random()*7,.13);
      nextTradeSound=1.2+Math.random()*3.3;
    }
    if(moving&&t-lastStep>.40){
      const pulse=audio.createBufferSource(),filter=audio.createBiquadFilter(),gain=audio.createGain();
      pulse.buffer=noise;
      filter.type='lowpass';
      filter.frequency.value=nearBridge?285:390;
      gain.gain.setValueAtTime(.15,t);
      gain.gain.exponentialRampToValueAtTime(.001,t+.16);
      pulse.connect(filter).connect(gain).connect(output);
      pulse.start(t,Math.random()*7,.17);
      lastStep=t;
    }
    nextChirp-=dt;
    if(nextChirp<=0){
      const f=1390+Math.random()*520;
      if(bird>0) for(let i=0;i<3;i++)chirp(f+i*87,bird*(.4+Math.random()*.28),t+i*.14);
      nextChirp=6+Math.random()*9;
    }
  }
  return {update};
}

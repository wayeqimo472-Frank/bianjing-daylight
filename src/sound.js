export function setupSound(button, label) {
  let sound, active=true, lastStep=0;
  const unlock = new AbortController();
  const zones={
    field:[390,.10,.016,.046], river:[490,.17,.025,.026], dock:[590,.14,.062,.018],
    market:[780,.068,.126,.013], shop:[570,.046,.10,.005], lane:[510,.071,.044,.033],
  };
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
    function bed(type, frequency,rate){
      const track=audio.createBufferSource(),filter=audio.createBiquadFilter(),gain=audio.createGain();
      track.buffer=noise;
      track.loop=true;
      track.playbackRate.value=rate;
      filter.type=type;
      filter.frequency.value=frequency;
      gain.gain.value=0;
      track.connect(filter).connect(gain).connect(output);
      track.start(Math.random()*1.2);
      return {filter,gain};
    }
    return {audio,noise,output,wind:bed('lowpass',510,1.22),crowd:bed('bandpass',590,1.47)};
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
  let nextChirp=5.1;
  function update(zone, moving, nearBridge, dt) {
    if(!active||sound?.audio.state!=='running'||document.hidden)return;
    const [frequency,breeze,crowd,bird]=zones[zone]??zones.river;
    const {audio,output,noise}=sound;
    const t=audio.currentTime;
    sound.wind.filter.frequency.setTargetAtTime(frequency,t,.35);
    sound.wind.gain.gain.setTargetAtTime(breeze*(.77+.15*Math.sin(t*.8)+.11*Math.cos(t*.31)),t,.4);
    sound.crowd.gain.gain.setTargetAtTime(crowd*(.73+.10*Math.sin(t*2.1)+.20*Math.cos(t*.59)),t,.48);
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
      for(let i=0;i<3;i++)chirp(f+i*87,bird*(.4+Math.random()*.28),t+i*.14);
      nextChirp=6+Math.random()*9;
    }
  }
  return {update};
}

window.addEventListener('keydown', function(e){
  
    const tune = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const instrument = document.querySelector(`.drum-pad[data-key="${e.keyCode}"]`)
    const displayInstrument = document.getElementById('display')
    tune.currentTime = 0;
    tune.play()
    displayInstrument.innerHTML = instrument.id   
  })
  
  
  window.addEventListener('click', function(e){ 
      const audio = e.srcElement.lastChild
      const disp = document.getElementById('display')
      if(audio!=null)
        {
          audio.currentTime = 0
          audio.play()
          disp.innerHTML=e.srcElement.id
        }    
  })  
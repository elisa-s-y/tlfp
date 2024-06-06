let toggle=true
let id="default"


function clicker(param){  
 const state= param.getAttribute('title')
const infoBox= document.getElementById(state)
const displaySetting = infoBox.style.display;

  if (toggle){
    document.getElementById(id).style.display='none'
  }
  if (displaySetting == 'block') {
    infoBox.style.display = 'none';
  }
  else{
    infoBox.style.display = 'block';
    toggle=true
    id=state
  }

}


// instantiate communcaiton bridge
const ipcRenderer = require('electron').ipcRenderer;

// get handles to UI elements
const theAlertButton      = document.getElementById('thealertbutton');
const theUIButton         = document.getElementById('theuibutton');
const theUIFeedbackDiv    = document.getElementById('uifeedback');
const theBridgeButton     = document.getElementById('thebridgebutton');

theAlertButton.addEventListener('click',() =>{
    alert('here');
})

theUIButton.addEventListener('click',() =>{
    const messages = ['Nobody calls me chicken!','The Doc\'s alive! He\'s in the old west, but he\'s alive!','Shark still looks fake.','1.21 Gigawatts!','Roads? Where we\'re going, we don\'t need roads.'];
    const theId = Math.floor(Math.random() * messages.length);
    theUIFeedbackDiv.innerHTML = messages[theId];
})

theBridgeButton.addEventListener('click',() => {
    let reply = ipcRenderer.sendSync('synMessage','A sync message to main');
    alert(reply);
})

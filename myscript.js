function handleButtonOn() {
  document.getElementById("bulbimage").src = "pic_bulbon.gif";
}

function handleButtonOff() {
  document.getElementById("bulbimage").src = "pic_bulboff.gif";
}

function handleToggle() {
  var currentImageSource = document.getElementById("bulbimage").src;
  if (
    currentImageSource == "file:///D:/NirjalaLearning/website/pic_bulboff.gif"
  ) {
    document.getElementById("bulbimage").src = "pic_bulbon.gif";
  } else {
    document.getElementById("bulbimage").src = "pic_bulboff.gif";
  }
}

function nochange() {
  alert("no change");
}

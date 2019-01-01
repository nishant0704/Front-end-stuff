function insert(num){
  if (document.display.view.value == 'OFF') {
    document.display.view.value = '';
  } else if (document.display.view.value == 'ON') {
    document.display.view.value = '';
  }
  document.display.view.value = document.display.view.value+num;
}

function equal(res){
  let exp = document.display.view.value
  if(exp){
    document.display.view.value = eval(exp);
  }
}

function off(){
  document.display.view.value = 'OFF';
  alert('press ON to continue');
  offBtn = document.querySelector('.calBtn');
  offBtn1 = document.querySelector('.calBtn1');
  // if (document.display.view.value == 'OFF') {
  //   offBtn.disabled = false;
  //   offBtn1.disabled = false;
  // } else (document.display.view.value == 'ON'){
  //   offBtn.disabled = false;
  //   offBtn1.disabled = false;
  // }
}

function on(){
  document.display.view.value = 'ON';
}


function clean(){
document.display.view.value = '';
}

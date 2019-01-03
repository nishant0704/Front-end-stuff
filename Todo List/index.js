import hello from "./modulesample.js";



document.getElementById('add').addEventListener('click', function(){
  let item = document.getElementById('item').value;
  if(item){
    hello();
  }else {
    console.log('false');
  }
})

// import { hello } from './modulesample';


document.getElementById('add').addEventListener('click', function(){
  let item = document.getElementById('item').value;
  if(item){
    // hello
    console.log('item present');
  }else {
    console.log('false');
  }
})

document.getElementById('add').addEventListener('click', function(){
  let item = document.getElementById('item').value;
  if(item){
    console.log('item present')
  }else {
    console.log('false')
  }
})

function ajax_call(url,callback){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
      console.log('responseText:'+xmlhttp.responseText);
      try{
        var data = JSON.parse(xmlhttp.responseText);
      } catch(err){
        console.log(err.message + "in" + xmlhttp.responseText);
        return
      }
      callback(data);
    }
  };
  xmlhttp.open("GET",url,true);
  xmlhttp.send();
}

ajax_call('./comm.json',function(data){
  document.getElementById("title").innerHTML = data["title"];
  var html ="<h2>" + data["title"] + "</h2>";
  html += "<h3>" + data["description"] + "</h3>";
  html += "<select>";
    for(var i=0;i < data['articles'].length;i++){
      html += '<option><a href = "' + data["articles"][i]["url"] + '">' + data["articles"][i]["title"] + "</a></option>";
    }
  html += "</select>";
  document.getElementById("content").innerHTML = html;
});

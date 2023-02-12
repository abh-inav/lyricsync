var uptime;
var data;
var n;
var timestamp; 
var audio = document.querySelector("#player");

function getData() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'lyrics.json', true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    if (xhr.status === 200) {
      data = xhr.response;
      console.log(data);
    }
  };
  xhr.send();
}
getData();

//initialize n
n = 1;
//eventhandler to checkon continously
audio.addEventListener('timeupdate', (event) => {
 console.log(timestamp);
    if(timestamp>data[n-1].time && timestamp<data[n].time){
    document.querySelector("#lyrics").innerText=data[n-1].content;
    n++;
    console.log("update");
}
//to get timestamp of player
setInterval(function() {
timestamp=audio.currentTime;
}, 1000);
});
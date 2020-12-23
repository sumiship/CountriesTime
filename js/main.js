'use strict'

{
  function addZero(num){
    if (num < 10) {
      return "0" + num;
    }else{
      return num;
    }
  }


  let i=0;

  function now(i) {
    let now = (new Date()).getTime();
    let nowGri = now + (new Date()).getTimezoneOffset()*60*1000;
    return new Date(nowGri + i*60*60*1000);
  }

  function put(i) {
    let time = now(i);
    let month = addZero(time.getMonth());
    let date = addZero(time.getDate());
    let day = [ "日", "月", "火", "水", "木", "金", "土" ][time.getDay()];
    let hour = addZero(time.getHours());
    let min = addZero(time.getMinutes());
    let sec = addZero(time.getSeconds());
    let ret1 = month+1 + "/" + date + " (" + day + ")";
    let ret2 = hour + ":" + min + ":" + sec;
    return [ret1, ret2]
  }

  function html(country, jisa) {
    document.getElementById(`${country}1`).textContent = put(jisa)[0];
    document.getElementById(`${country}2`).textContent = put(jisa)[1];
  }

  function clock() {
    html("Japan",9);
    console.log(i);
    i += 1;
  }


  setInterval(clock,1000);


}






























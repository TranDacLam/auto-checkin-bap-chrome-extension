$(function () {
  setInterval(function(){   runscript(); }, (60000 * 30));
});

function runscript(){
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  if((hour == 7 && 25 <= minute <= 59) || (hour == 17 && 25 <= minute <= 59)){
    chrome.tabs.executeScript(null, { file: "jquery.min.js" }, function() {
      chrome.tabs.executeScript(null, { file: "logout.js" });
    });
  }
}
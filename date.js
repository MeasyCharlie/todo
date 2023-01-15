
var today = new Date();
function getDate(){
 var options = {
   weekday: "long",
   year: "numeric",
   month: "long",
   day: "numeric",
 };
return today.toLocaleDateString("en-US", options);
}
function getDay(){
 var today = new Date();
 var options = {
   
   
   day: "numeric",
 };
return today.toLocaleDateString("en-US", options);
}
module.exports.getDate = getDate;
module.exports.getDay = getDay;
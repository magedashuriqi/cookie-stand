'use strict';

function randomCust (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
var hourArray= ['6am: ' ,'7am: ' ,'8am: ' ,'9am: ' ,'10am: ' ,'11am: ','12pm: ' ,'1pm: ' ,'2pm: ' ,'3pm: ' ,'4pm: ' ,'5pm: ' ,'6pm: ','7pm: ', '8pm: '];
var cookiesPurchased=[];
var total=0;

var Seattle ={
 name:'Seattle',
 minCustPerHour:23,
 maxCustPerHour:65,
 AvgCookiesPerCust:6.3,
 cookiesPurchased:[],
cookiesPerHour: function(){
for (var hour = 0; hour < hourArray.length; hour++) {
this.cookiesPurchased =Math.floor( (randomCust (23,65))*6.3 ),
console.log(hourArray[hour]+ this.cookiesPurchased);
cookiesPurchased [hour] = this.cookiesPurchased;
}
cookiesPurchased=[];
console.log(cookiesPurchased);
for (let index = 0; index < cookiesPurchased.length; index++) {
    total += cookiesPurchased[index];  
}
}
};
console.log(Seattle.name);
Seattle.cookiesPerHour();
console.log('Total: '+total+' cookies')


var Tokyo ={
    name:'Tokyo',
    minCustPerHour:3,
    maxCustPerHour:24,
    AvgCookiesPerCust:1.2,
  cookiesPerHour: function(){
for (var hour = 0; hour < hourArray.length; hour++) {
this.cookiesPurchased =Math.floor( (randomCust (3,24))*1.2 ),
console.log(hourArray[hour]+ this.cookiesPurchased);
cookiesPurchased [hour] = this.cookiesPurchased
}
console.log(cookiesPurchased);
for (let index = 0; index < cookiesPurchased.length; index++) {
    total += cookiesPurchased[index];  
}
}
};
console.log(Tokyo.name);
Tokyo.cookiesPerHour();
console.log('Total: '+total+' cookies') 


   
   var Dubai ={
    name:'Dubai',
    minCustPerHour:11,
    maxCustPerHour:38,
    AvgCookiesPerCust:3.7,
    cookiesPerHour: function(){
        for (var hour = 0; hour < hourArray.length; hour++) {
        this.cookiesPurchased =Math.floor( (randomCust (11,38))*3.7 ),
        console.log(hourArray[hour]+ this.cookiesPurchased);
        cookiesPurchased [hour] = this.cookiesPurchased
        }
        console.log(cookiesPurchased);
        for (let index = 0; index < cookiesPurchased.length; index++) {
            total += cookiesPurchased[index];  
        }
        }
        };
        console.log(Dubai.name);
        Dubai.cookiesPerHour();
        console.log('Total: '+total+' cookies')


   var Paris ={
    name:'Paris',
    minCustPerHour:20,
    maxCustPerHour:38,
    AvgCookiesPerCust:2.3,
    cookiesPerHour: function(){
        for (var hour = 0; hour < hourArray.length; hour++) {
        this.cookiesPurchased =Math.floor( (randomCust (20,38))*2.3 ),
        console.log(hourArray[hour]+ this.cookiesPurchased);
        cookiesPurchased [hour] = this.cookiesPurchased
        }
        console.log(cookiesPurchased);
        for (let index = 0; index < cookiesPurchased.length; index++) {
            total += cookiesPurchased[index];  
        }
        }
        };
        console.log(Paris.name);
        Paris.cookiesPerHour();
        console.log('Total: '+total+' cookies')


   
   var Lima ={
    name:'Lima',
    minCustPerHour:2,
    maxCustPerHour:16,
    AvgCookiesPerCust:4.6,
    cookiesPerHour: function(){
        for (var hour = 0; hour < hourArray.length; hour++) {
        this.cookiesPurchased =Math.floor( (randomCust (2,16))*4.6),
        console.log(hourArray[hour]+ this.cookiesPurchased);
        cookiesPurchased [hour] = this.cookiesPurchased
        }
        console.log(cookiesPurchased);
        for (let index = 0; index < cookiesPurchased.length; index++) {
            total += cookiesPurchased[index];  
        }
        }
        };
        console.log(Lima.name);
        Lima.cookiesPerHour();
        console.log('Total: '+total+' cookies')
//-------------------------------------------------------------------------------------

var parentDiv=document.getElementById('cookies sallary');
var SeattleArticle=document.createElement('article');
parentDiv.appendChild(SeattleArticle);

var SeattlName=document.createElement('h3');
SeattlName.textContent=Seattle.name;
SeattleArticle.appendChild(SeattlName);

var SeattleSallaryList=document.createElement('ul');
SeattleArticle.appendChild(SeattleSallaryList);

   
    for (let j = 0; j < cookiesPurchased.length; j++) {
        var cookiesPurchased = document.createElement('li');
        cookiesPurchased.textContent=Seattle.cookiesPurchased[j]+' cookies';
        SeattleSallaryList.appendChild(cookiesPurchased);
        
    }
       

console.log(document);
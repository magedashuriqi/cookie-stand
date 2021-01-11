'use strict';

function randomCust (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
var hourArray= ['6am: ' ,'7am: ' ,'8am: ' ,'9am: ' ,'10am: ' ,'11am: ','12pm: ' ,'1pm: ' ,'2pm: ' ,'3pm: ' ,'4pm: ' ,'5pm: ' ,'6pm: ','7pm: '];
//----------------------------------------------------------
var seattle ={
 name:'Seattle',
 minCustPerHour:23,
 maxCustPerHour:65,
 avgCookiesPerCust:6.3,
 customerPerHour: [],
 cookiesPurchased:[],
 total: 0,
cookiesPerHour: function(){
for (var hour = 0; hour < hourArray.length; hour++) {
 this.customerPerHour.push(Math.floor( (randomCust (this.minCustPerHour,this.maxCustPerHour))));
 //console.log(this.customerPerHour);
this.cookiesPurchased.push(Math.floor(this.customerPerHour[hour]*this.avgCookiesPerCust+1)),
 console.log(hourArray[hour]+ this.cookiesPurchased[hour]);}
for (let index = 0; index < this.cookiesPurchased.length; index++) {
   this.total += this.cookiesPurchased[index];}
},
render: function(){
    var parentDiv=document.getElementById('cookies sallary');

var seattleSection =document.createElement('section');
parentDiv.appendChild(seattleSection);

var seattlName=document.createElement('h3');
seattlName.textContent=seattle.name;
seattleSection.appendChild(seattlName);

var seattleSallaryList=document.createElement('ul');
seattleSection.appendChild(seattleSallaryList);

   
for (let i = 0; i < seattle.cookiesPurchased.length; i++) {
  var cookiesPurchased = document.createElement('li');
  cookiesPurchased.textContent=hourArray[i]+ seattle.cookiesPurchased[i]+' cookies';
  seattleSallaryList.appendChild(cookiesPurchased);
        
    }
var totalCookiesPerDay =document.createElement('li');
totalCookiesPerDay.textContent= 'Total: '+seattle.total + ' cookies';
seattleSallaryList.appendChild(totalCookiesPerDay);
console.log(document);
}
};
seattle.cookiesPerHour();
seattle.render();
//---------------------------------------------------------------------------
var tokyo ={
    name:'Tokyo',
    minCustPerHour:3,
    maxCustPerHour:24,
    avgCookiesPerCust:1.2,
    customerPerHour: [],
    cookiesPurchased:[],
    total: 0,
   cookiesPerHour: function(){
   for (var hour = 0; hour < hourArray.length; hour++) {
    this.customerPerHour.push(Math.floor( (randomCust (this.minCustPerHour,this.maxCustPerHour))));
    //console.log(this.customerPerHour);
   this.cookiesPurchased.push(Math.floor(this.customerPerHour[hour]*this.avgCookiesPerCust+1)),
    console.log(hourArray[hour]+ this.cookiesPurchased[hour]);}
   for (let index = 0; index < this.cookiesPurchased.length; index++) {
      this.total += this.cookiesPurchased[index];}
   },
   render: function(){
       var parentDiv=document.getElementById('cookies sallary');
   
   var tokyoSection =document.createElement('section');
   parentDiv.appendChild(tokyoSection);
   
   var tokyoName=document.createElement('h3');
   tokyoName.textContent=tokyo.name;
   tokyoSection.appendChild(tokyoName);
   
   var tokyoSallaryList=document.createElement('ul');
   tokyoSection.appendChild(tokyoSallaryList);
   
      
   for (let i = 0; i < tokyo.cookiesPurchased.length; i++) {
     var cookiesPurchased = document.createElement('li');
     cookiesPurchased.textContent= hourArray[i]+tokyo.cookiesPurchased[i]+' cookies';
     tokyoSallaryList.appendChild(cookiesPurchased);
           
       }
   var totalCookiesPerDay =document.createElement('li');
   totalCookiesPerDay.textContent='Total: '+tokyo.total + ' cookies';
   tokyoSallaryList.appendChild(totalCookiesPerDay);
   console.log(document);
   }
   };
   tokyo.cookiesPerHour();
   tokyo.render();
   
//------------------------------------------
var dubai  ={
    name:'Dubai',
    minCustPerHour:11,
    maxCustPerHour:38,
    avgCookiesPerCust:3.7,
    customerPerHour: [],
    cookiesPurchased:[],
    total: 0,
   cookiesPerHour: function(){
   for (var hour = 0; hour < hourArray.length; hour++) {
    this.customerPerHour.push(Math.floor( (randomCust (this.minCustPerHour,this.maxCustPerHour))));
    //console.log(this.customerPerHour);
   this.cookiesPurchased.push(Math.floor(this.customerPerHour[hour]*this.avgCookiesPerCust+1)),
    console.log(hourArray[hour]+ this.cookiesPurchased[hour]);}
   for (let index = 0; index < this.cookiesPurchased.length; index++) {
      this.total += this.cookiesPurchased[index];}
   },
   render: function(){
       var parentDiv=document.getElementById('cookies sallary');
   
   var dubaiSection =document.createElement('section');
   parentDiv.appendChild(dubaiSection);
   
   var dubaiName=document.createElement('h3');
   dubaiName.textContent=dubai.name;
   dubaiSection.appendChild(dubaiName);
   
   var dubaiSallaryList=document.createElement('ul');
   dubaiSection.appendChild(dubaiSallaryList);
   
      
   for (let i = 0; i <dubai.cookiesPurchased.length; i++) {
     var cookiesPurchased = document.createElement('li');
     cookiesPurchased.textContent= hourArray[i]+ dubai.cookiesPurchased[i]+' cookies';
     dubaiSallaryList.appendChild(cookiesPurchased);
           
       }
   var totalCookiesPerDay =document.createElement('li');
   totalCookiesPerDay.textContent='Total: '+dubai.total + ' cookies';
   dubaiSallaryList.appendChild(totalCookiesPerDay);
   console.log(document);
   }
   };
   dubai.cookiesPerHour();
   dubai.render();
//------------------------------------------------------------------------
var paris  ={
    name:'Paris',
    minCustPerHour:20,
    maxCustPerHour:38,
    avgCookiesPerCust:2.3,
    customerPerHour: [],
    cookiesPurchased:[],
    total: 0,
   cookiesPerHour: function(){
   for (var hour = 0; hour < hourArray.length; hour++) {
    this.customerPerHour.push(Math.floor( (randomCust (this.minCustPerHour,this.maxCustPerHour))));
    //console.log(this.customerPerHour);
   this.cookiesPurchased.push(Math.floor(this.customerPerHour[hour]*this.avgCookiesPerCust+1)),
    console.log(hourArray[hour]+ this.cookiesPurchased[hour]);}
   for (let index = 0; index < this.cookiesPurchased.length; index++) {
      this.total += this.cookiesPurchased[index];}
   },
   render: function(){
       var parentDiv=document.getElementById('cookies sallary');
   
   var parisSection =document.createElement('section');
   parentDiv.appendChild(parisSection);
   
   var parisName=document.createElement('h3');
   parisName.textContent=paris.name;
   parisSection.appendChild(parisName);
   
   var parisSallaryList=document.createElement('ul');
   parisSection.appendChild(parisSallaryList);
   
      
   for (let i = 0; i <paris.cookiesPurchased.length; i++) {
     var cookiesPurchased = document.createElement('li');
     cookiesPurchased.textContent= hourArray[i]+ paris.cookiesPurchased[i]+' cookies';
     parisSallaryList.appendChild(cookiesPurchased);
           
       }
   var totalCookiesPerDay =document.createElement('li');
   totalCookiesPerDay.textContent='Total: '+paris.total + ' cookies';
   parisSallaryList.appendChild(totalCookiesPerDay);
   console.log(document);
   }
   };
   paris.cookiesPerHour();
   paris.render();
   //------------------------------------
   var lima  ={
    name:'Lima',
    minCustPerHour:2,
    maxCustPerHour:16,
    avgCookiesPerCust:4.6,
    customerPerHour: [],
    cookiesPurchased:[],
    total: 0,
   cookiesPerHour: function(){
   for (var hour = 0; hour < hourArray.length; hour++) {
    this.customerPerHour.push(Math.floor( (randomCust (this.minCustPerHour,this.maxCustPerHour))));
    //console.log(this.customerPerHour);
   this.cookiesPurchased.push(Math.floor(this.customerPerHour[hour]*this.avgCookiesPerCust+1)),
    console.log(hourArray[hour]+ this.cookiesPurchased[hour]);}
   for (let index = 0; index < this.cookiesPurchased.length; index++) {
      this.total += this.cookiesPurchased[index];}
   },
   render: function(){
       var parentDiv=document.getElementById('cookies sallary');
   
   var limaSection =document.createElement('section');
   parentDiv.appendChild(limaSection);
   
   var limaName=document.createElement('h3');
   limaName.textContent=lima.name;
   limaSection.appendChild(limaName);
   
   var limaSallaryList=document.createElement('ul');
   limaSection.appendChild(limaSallaryList);
   
      
   for (let i = 0; i <lima.cookiesPurchased.length; i++) {
     var cookiesPurchased = document.createElement('li');
     cookiesPurchased.textContent= hourArray[i]+ lima.cookiesPurchased[i]+' cookies';
     limaSallaryList.appendChild(cookiesPurchased);
           
       }
   var totalCookiesPerDay =document.createElement('li');
   totalCookiesPerDay.textContent='Total: '+lima.total + ' cookies';
   limaSallaryList.appendChild(totalCookiesPerDay);
   console.log(document);
   }
   };
   lima.cookiesPerHour();
   lima.render();
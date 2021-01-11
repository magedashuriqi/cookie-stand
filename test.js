
'use strict';
function randomCust (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
var hourArray= ['6am: ' ,'7am: ' ,'8am: ' ,'9am: ' ,'10am: ' ,'11am: ','12pm: ' ,'1pm: ' ,'2pm: ' ,'3pm: ' ,'4pm: ' ,'5pm: ' ,'6pm: ','7pm: ', '8pm: '];
var cookiesPurchased=[];
var total=0;

var location ={
names :['Seattle','Tokyo','Dubai','Paris','Lima'],
minCustPerHour :[23,3,11,20,2],
maxCustPerHour:[65,24,38,38,16],
avgCookiesPerCust:[6.3,1.2,3.7,2.3,4.6],

cookiesPerHour: function(){
    for (var hour = 0; hour < hourArray.length; hour++) {
    this.cookiesPurchased =Math.floor( (randomCust (minCustPerHour[hour],maxCustPerHour[hour]))*avgCookiesPerCust[hour] ),
    console.log(hourArray[hour]+ this.cookiesPurchased);
    cookiesPurchased [hour] = this.cookiesPurchased
    }
    console.log(cookiesPurchased);
    for (let index = 0; index < cookiesPurchased.length; index++) {
        total += cookiesPurchased[index];  
    }
    }
    };
    console.log(location.names);
    location.cookiesPerHour();
    console.log('Total: '+total+' cookies')
    



   
   
   /*cookiesPurchased:0,
   cookiesPerHour: function(){
   for (var hour = 0; hour < hourArray.length; hour++) {
   this.cookiesPurchased =Math.floor( (randomCust (23,65))*6.3 )+ ' cookies',
   console.log(hourArray[hour]+ this.cookiesPurchased);   
   }
   }
   };
   console.log(Seattle.name);
Seattle.cookiesPerHour();*/
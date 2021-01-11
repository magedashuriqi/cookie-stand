'use strict';

function randomCust (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
var hourArray= ['6am: ' ,'7am: ' ,'8am: ' ,'9am: ' ,'10am: ' ,'11am: ','12pm: ' ,'1pm: ' ,'2pm: ' ,'3pm: ' ,'4pm: ' ,'5pm: ' ,'6pm: ','7pm: '];


//----------------------------------------------------------
function SalmonCookies (locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust, customerPerHour, cookiesPurchased, totalCookiesPerDay){
this.locationName= locationName; 
this.minCustPerHour=minCustPerHour;
this.maxCustPerHour=maxCustPerHour;
this.avgCookiesPerCust= avgCookiesPerCust;
this.customerPerHour=[];
this.cookiesPurchased=[];
this.totalCookiesPerDay=0;  
}
 SalmonCookies.prototype.cookiesPerHour=function(){
    for (var hour = 0; hour < hourArray.length; hour++) {
     this.customerPerHour.push(Math.floor( (randomCust (this.minCustPerHour,this.maxCustPerHour))));
     //console.log(this.customerPerHour);
    this.cookiesPurchased.push(Math.floor(this.customerPerHour[hour]*this.avgCookiesPerCust+1)),
     console.log(hourArray[hour]+ this.cookiesPurchased[hour]);}
    for (let index = 0; index < this.cookiesPurchased.length; index++) {
       this.totalCookiesPerDay += this.cookiesPurchased[index];}
    };
//----------------------------------
    SalmonCookies.prototype.render=function(){
        var parentDiv=document.getElementById('cookies sallary');
      
var dailySalesTable = document.createElement('table');
parentDiv.appendChild(dailySalesTable);
//-------------------------------------------
var hoursRow = document.createElement('tr');
dailySalesTable.appendChild(hoursRow);

var hoursOfWork=document.createElement('th');
hoursOfWork.textContent='location';
hoursRow.appendChild(hoursOfWork);

for(var i=6; i<20; i++){
    if (i<=12) {
var hoursOfWork=document.createElement('th');
hoursOfWork.textContent=i+':00 am';
hoursRow.appendChild(hoursOfWork);
    }else{
var hoursOfWork=document.createElement('th');
hoursOfWork.textContent=(i-12)+':00 pm';
hoursRow.appendChild(hoursOfWork);
    }
}
var hoursOfWork=document.createElement('th');
hoursOfWork.textContent='Daily Location Total';
hoursRow.appendChild(hoursOfWork);


//---------------------------------------
var seattleRow = document.createElement('tr');
dailySalesTable.appendChild(seattleRow);

var seattleFirstCell=document.createElement('th');
seattleFirstCell.textContent='Seattle';
seattleRow.appendChild(seattleFirstCell);

var seattleCell;
seattle.cookiesPerHour();
for ( var i =0; i < seattle.cookiesPurchased.length; i++) {
seattleCell=document.createElement('td');
seattleCell.textContent=this.cookiesPurchased[i];
seattleRow.appendChild(seattleCell);
}

var seattleCell=document.createElement('td');
seattleCell.textContent=this.totalCookiesPerDay;
seattleRow.appendChild(seattleCell);

//-----------------------------------------
tokyo.cookiesPerHour();
console.log(tokyo);
var tokyoRow = document.createElement('tr');
dailySalesTable.appendChild(tokyoRow);

var tokyoFirstCell=document.createElement('th');
tokyoFirstCell.textContent='Tokyo';
tokyoRow.appendChild(tokyoFirstCell);

var tokyoCell;

for ( var j =0; j < tokyo.cookiesPurchased.length; j++) {
tokyoeCell=document.createElement('td');
tokyoCell.textContent=this.cookiesPurchased[i];
tokyoRow.appendChild(tokyoCell);
}

var tokyoCell=document.createElement('td');
tokyoCell.textContent=this.totalCookiesPerDay;
tokyoRow.appendChild(tokyoCell);

//----------------------------------
var dubaiRow = document.createElement('tr');
dailySalesTable.appendChild(dubaiRow);

var parisRow = document.createElement('tr');
dailySalesTable.appendChild(parisRow);

var limaRow = document.createElement('tr');
dailySalesTable.appendChild(limaRow);

var totalRow = document.createElement('tr');
dailySalesTable.appendChild(totalRow);

console.log(document);
    }
        var seattle = new SalmonCookies('seattle',23,65,6.3);
        //seattle.render();
        seattle.cookiesPerHour();
        console.log(seattle);

        var tokyo = new SalmonCookies('Tokyo',3,24,1.2);
        //tokyo.render();
        tokyo.cookiesPerHour();
        console.log(tokyo);
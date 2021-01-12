'use strict';

function randomCust (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
var hourArray= ['6:00 am ' ,'7:00 am ' ,'8:00 am ' ,'9:00 am ' ,'10:00 am ' ,'11:00 am ','12:00 pm ' ,'1:00 pm ' ,'2:00 pm ' ,'3:00 pm ' ,'4:00 pm ' ,'5:00 pm ' ,'6:00 pm ','7:00 pm '];
var allLocations=[];
var totalCookiesTotalLocation=[];
for (let i = 0; i < hourArray.length; i++) {
    totalCookiesTotalLocation.push(0);   
}
//----------------------------------------------------------
function SalmonCookies (locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust){
this.locationName= locationName; 
this.minCustPerHour=minCustPerHour;
this.maxCustPerHour=maxCustPerHour;
this.avgCookiesPerCust= avgCookiesPerCust;
this.customerPerHour=[];
this.cookiesPurchased=[];
this.totalCookiesPerDay=0; 
allLocations.push(this); 
}
//--------------------------------------
//Salmon cookies prototype functions

 SalmonCookies.prototype.cookiesPerHour=function(){
    for (var hour = 0; hour < hourArray.length; hour++) {
     this.customerPerHour.push(Math.floor( (randomCust (this.minCustPerHour,this.maxCustPerHour))));
     //console.log(this.customerPerHour);
    this.cookiesPurchased.push(Math.floor(this.customerPerHour[hour]*this.avgCookiesPerCust+1));
     /*console.log(hourArray[hour]+ this.cookiesPurchased[hour])*/;}
    for (let index = 0; index < this.cookiesPurchased.length; index++) {
       this.totalCookiesPerDay += this.cookiesPurchased[index];}
    };
//----------------------------------
createTable();
createHoursRow();
    SalmonCookies.prototype.render=function(){
      
        var tableRows;
        var branchName;
        var dataTable;
        var totalDaily;
       
         tableRows = document.createElement('tr') 
         branchName = document.createElement('td')
         branchName.textContent=this.locationName
         tableRows.appendChild(branchName); 
         tableOfSales.appendChild(tableRows); 
    
     for (let j = 0; j < this.cookiesPurchased.length; j++) {
         dataTable=document.createElement('td');
         dataTable.textContent=this.cookiesPurchased[j];
         totalCookiesTotalLocation[j] += this.cookiesPurchased[j];

         tableRows.appendChild(dataTable);
        }
     
        totalDaily =document.createElement('td');
        totalDaily.textContent= this.totalCookiesPerDay
        tableRows.appendChild(totalDaily);
         
     }
      

 
       
         
     
 
             
         
        

        console.log(document);
         



       //---------------------------------------
        var seattle = new SalmonCookies('Seattle',23,65,6.3);
        var tokyo = new SalmonCookies('Tokyo',3,24,1.2);
        var dubai = new SalmonCookies('Dubai',11,38,3.7);
        var paris = new SalmonCookies('Paris',3,24,1.2);
        var lima = new SalmonCookies('Lima',3,24,1.2);
        
        //----------------------------------------------
        //global functions:
        var hoursOfWork;
        var tableOfSales;
        var hoursRow;
        var emptyCell; 
        var totalRow;
        var totalItem;
        var totalElements;

        function createTable(){
        var parentDiv=document.getElementById('cookies sallary');
        tableOfSales=document.createElement('table');
        parentDiv.appendChild(tableOfSales);  
        }
        
        
        function createHoursRow(){
        hoursRow = document.createElement('tr');
        emptyCell=document.createElement('th');
        hoursRow.appendChild(emptyCell);
        for (let i = 0; i < hourArray.length; i++) {
        hoursOfWork=document.createElement('th');
        hoursOfWork.textContent=hourArray[i];
        hoursRow.appendChild (hoursOfWork);
        }  
        var hoursOfWork=document.createElement('th');
        hoursOfWork.textContent='Daily Location Total';
        hoursRow.appendChild(hoursOfWork);
        tableOfSales.appendChild(hoursRow);
    }


    function createFooter(){
        totalRow=document.createElement('tr');
        totalItem=document.createElement('th')
        totalItem.textContent='Totals';
        totalRow.appendChild(totalItem);
        tableOfSales.appendChild(totalRow);
    }

   
    


//---------------------------------------

seattle.cookiesPerHour();
tokyo.cookiesPerHour();
dubai.cookiesPerHour();
paris.cookiesPerHour();
lima.cookiesPerHour();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
createFooter();  
for (let i = 0; i < hourArray.length; i++) {
    totalElements=document.createElement('th');
    totalElements.textContent=totalCookiesTotalLocation[i];
    //console.log(totalElements);
    totalRow.appendChild(totalElements);
    
}
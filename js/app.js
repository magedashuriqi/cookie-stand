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
var grandTotal= 0;

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

       this.totalCookiesPerDay += this.cookiesPurchased[index];  
    }
    grandTotal += this.totalCookiesPerDay;
    console.log(grandTotal);

}

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
        tableOfSales.setAttribute("id","table1") 
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


for (let i = 0; i < allLocations.length; i++) {
    allLocations[i].cookiesPerHour();
    allLocations[i].render(); }


createFooter(); 
for (let i = 0; i < hourArray.length; i++) {

totalElements=document.createElement('th');
totalElements.textContent=totalCookiesTotalLocation[i];
//console.log(totalElements);
totalRow.appendChild(totalElements);
 }





var grandCell;
grandCell=document.createElement('td');
grandCell.textContent =grandTotal;
totalRow.appendChild(grandCell);





 var patCookies = document.getElementById('patCookies');
    patCookies.addEventListener('submit',submitter);

    function submitter(event){
        event.preventDefault();
        console.log(event);   

        var nameOfBranch = event.target.names.value
        console.log('Location name:',nameOfBranch);

        var minimumCustomer=event.target.mincust.value;
        console.log('Min. number of customer =',minimumCustomer);

        var maximumCustomer=event.target.maxcust.value;
        console.log('Max. number of customer =',maximumCustomer);

        var avgCookiesPerCustomer=event.target.avgCookies.value;
        console.log('Avg. cookies per customer =',avgCookiesPerCustomer);

       var newBranch= new SalmonCookies(nameOfBranch,minimumCustomer,maximumCustomer,avgCookiesPerCustomer);
       console.log(newBranch);

      
      
       newBranch.cookiesPerHour();
       newBranch.render();

       document.getElementById('table1').deleteRow(allLocations.length);
       createFooter(); 
      for (let i = 0; i < hourArray.length; i++) {
totalElements=document.createElement('th');
totalElements.textContent=totalCookiesTotalLocation[i];
//console.log(totalElements);
totalRow.appendChild(totalElements);
 }


var grandCell;
grandCell=document.createElement('th');
grandCell.textContent =grandTotal;
totalRow.appendChild(grandCell);


         

    }
  

   



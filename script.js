
function compute()              //Function that executes result if amount is positive
{                               //If not, then send a message to the user
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);
           
    if(principal<=0){           
        alert("Amount must be positive");
        document.getElementById("principal").focus()
    }
    else{
        document.getElementById("result").innerHTML = "If you deposit: " + "\<b\>" + principal + "\</b\>" +
         ",\<br\> at an interest of " + "\<b\>" + rate + "\</b\>" + "%" + "\<br\> you will receive an amount of " +
         "\<b\>" + amount + "\</b\>" + ",\<br\> in the year " + "\<b\>" + year + "\</b\>" + "\<br\>";
    }
}
    
function updateRate()           //Fuction for showing the insterest rate of the range bar
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;   
}
const geneButton=document.getElementById("gbutn"); 
document.getElementById("Pin-display").value="";
geneButton.addEventListener("click",function(){
    const pin = Math.round(Math.random()*10000);
    const pins= pin+"";
    if(pins.length==4){
    document.getElementById("Pin-display").value=pins;
    }
})
const typedPin = document.getElementById("key-pad");
document.getElementById("key-display").value="";
typedPin.addEventListener("click",function(event){
const digit= event.target.innerText;
const keyDisplay=document.getElementById("key-display");
if (isNaN(digit)) {
 if(digit=='C'){
    keyDisplay.value="";
 }
 if(digit=='<'){
    const deleteDigit =keyDisplay.value;
    const str= deleteDigit.substring(0, deleteDigit.length - 1);
keyDisplay.value=str;
 }
}
 else{
    const previousDigit =keyDisplay.value;
    keyDisplay.value= previousDigit+digit;
 }
})
const verify =document.getElementById("sbutn");
var counterAttempt= 3;
verify.addEventListener("click",function(){
    const genPin= document.getElementById("Pin-display").value;
    const typePin=document.getElementById("key-display").value;
    const successNotification=document.getElementById("success-notification");
    const errorNotification = document.getElementById("error-notification");
    if(counterAttempt>0){
    if(genPin==typePin && (genPin!=""||typePin!="")){
        successNotification.style.display="block";
        errorNotification.style.display="none";
    }
    else{
        successNotification.style.display="none";
        errorNotification.style.display="block";
       counterAttempt= counterAttempt-1;
         document.getElementById("counter").innerText=counterAttempt;
    }
}
if(counterAttempt==0){
    document.getElementById("counter").innerText="refresh no ";
}

document.getElementById("key-display").value="";
})

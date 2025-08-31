//types of data in js
// to define variable we use let (when values can change)and = sign to assign values
let num=23.7;//numbers (can be integers or decimals)
let city="Nairobi";//string (text) NB:should be in quotes
let weather="rainy";//boolean (gives either true/false)
let address;//undefined data
let village=null; //null
let form={firstname:"john",middlename:"doe",lastname:"smith"};//key value pairs 
let learners=["maina","brian","ochenge"];//array (ordered list of items)
//for values that do not change we use const
const pi=3.14;//constant value
if (num>=20){
    console.log("The number is greater than or equal to 20");}
else{
    console.log("The number is less than 20");}

//number 2
function scores (mathematics,english,kiswahili,science){
    let total=mathematics+english+kiswahili+science;
    let average=total/4;
    return average;
}
console.log(scores(78,67,89,45));
console.log(scores(90,56,78,67));

//number 3
while (pi<3.15){
    pi+=1;
}
console.log(pi);

//number 4
function changetext(){
    let para=document.getElementById("para");
    para.textContent="The text has been changed!";
    para.style.color="red";
    para.style.fontSize="40px";
    para.style.backgroundColor="yellow";
}
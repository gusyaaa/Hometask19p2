let year = prompt("Enter year.")
if(year % 4 === 0){
    console.log("It is a Leap year")
}else if(year % 100 === 0){
    console.log("It is a Leap year")
}
else if(year % 400 === 0){
    console.log("It is not a Leap year")
}else{
    console.log("It is not a Leap Year")
}
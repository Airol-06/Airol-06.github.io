let income;

if (income >= 0 && income <= 25000){
console.log(0);
}
else if (income >= 25000 && income <= 400000) {
console.log( (income - 25000) * .20 );

}

else if (income >= 400000 && income <= 800000){
console.log ( (income - 400000) * .25 + (30000));
}

else if (income >= 800000 && income <= 2000000){
console.log ( (income - 800000) * .30 + (130000));
}

else if (income >= 2000000 && income <= 8000000){
 console.log ( (income - 2000000) * .32 + (490000)) ;
}
else if (income >= 8000000){
console.log ( (income - 8000000) * .35 + (2410000));

}
else 
console.log("");
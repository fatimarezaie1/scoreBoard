let input1 = document.getElementById("input");
let input2 = document.getElementById("input2");
let addscore;
let addscoretoo ;
function add1score(){
    // all values form input type is string for mathmatice operation we should convert them into number
    addscore = Number(input1.value);
    input1.value = addscore + 1 ;
}
function add2score(){
     // all values form input type is string for mathmatice operation we should convert them into number
    addscore = Number(input1.value);
    input1.value = addscore + 2 ;
}
function add3score(){
     // all values form input type is string for mathmatice operation we should convert them into number
    addscore = Number(input1.value);
    input1.value = addscore + 3 ;
    
}
// if we have just one varable for input type all the operation will happen in one box

function guestadd1(){
    addscoretoo = Number(input2.value);
    input2.value = addscoretoo + 1;
}
function guestadd2(){
    addscoretoo = Number(input2.value);
    input2.value = addscoretoo + 2;
}
function guestadd3(){
    addscoretoo = Number(input2.value);
    input2.value = addscoretoo + 3;
}
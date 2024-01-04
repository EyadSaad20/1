window.onload =function(){
    var spn1= 00;
    var spn2= 00;



    var appendSpn2 = document.getElementById("spn2")
    var appendSpn1 = document.getElementById("spn1")




    var start = document.getElementById("btn1")
    var stop = document.getElementById("btn2")
    var reset = document.getElementById("btn3")

    var Interval ;


    start.onclick = function(){
        clearInterval(Interval)
        Interval = setInterval(startTimer,10)
    }




    stop.onclick = function(){
clearInterval(Interval)
    }



    reset.onclick = function(){
        clearInterval(Interval)
        var spn1= 00;
        var spn2= 00;

    document.getElementById('spn2').innerHTML="00";
    document.getElementById('spn1').innerHTML="00";

            }

function startTimer (){
spn2++;

if(spn2 <=9){
document.getElementById("spn2").innerHTML = "0" + spn2;
}


if(spn2 > 9){
document.getElementById("spn2").innerHTML = spn2;
}




if(spn2>99){
    spn1++;
    
document.getElementById("spn1").innerHTML = "0" + spn1;
 

spn2 =  0;

document.getElementById("spn2").innerHTML = "0" + 0;
}


if(spn1>9){

document.getElementById("spn1").innerHTML = + spn1;
}







}


}









































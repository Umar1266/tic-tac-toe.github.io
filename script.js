var i,x=0,o=0;
i=1;

function umar(move){
    var u=check();
    if(u=="p1"||u=="p2"){
        document.querySelector("#"+move).innerHTML=null;
    }
    else{
        if (document.querySelector("#"+move).innerHTML=="") {
            if (i%2==1) {
                document.querySelector("#"+move).style.color="blue";
                document.querySelector("#"+move).innerHTML="X";
                i++; 
            } else {
                document.querySelector("#"+move).style.color="red";
                document.querySelector("#"+move).innerHTML="O";
                i++;
            }
        }
    }

    score();
}

function check(){
    var a1=document.querySelector("#a1").innerHTML;
    var a2=document.querySelector("#a2").innerHTML;
    var a3=document.querySelector("#a3").innerHTML;
    var a4=document.querySelector("#a4").innerHTML;
    var a5=document.querySelector("#a5").innerHTML;
    var a6=document.querySelector("#a6").innerHTML;
    var a7=document.querySelector("#a7").innerHTML;
    var a8=document.querySelector("#a8").innerHTML;
    var a9=document.querySelector("#a9").innerHTML;
    
    if(i<11){
        if ((a1=="X"&&a2=="X"&&a3=="X")||(a4=="X"&&a5=="X"&&a6=="X")||(a7=="X"&&a8=="X"&&a9=="X")||(a1=="X"&&a4=="X"&&a7=="X")||(a2=="X"&&a5=="X"&&a8=="X")||(a3=="X"&&a6=="X"&&a9=="X")||(a1=="X"&&a5=="X"&&a9=="X")||(a3=="X"&&a5=="X"&&a7=="X")){
            console.log("X wins")
            x++;
            cl();
            i=1;
            return "p1";
        }
        else if ((a1=="O"&&a2=="O"&&a3=="O")||(a4=="O"&&a5=="O"&&a6=="O")||(a7=="O"&&a8=="O"&&a9=="O")||(a1=="O"&&a4=="O"&&a7=="O")||(a2=="O"&&a5=="O"&&a8=="O")||(a3=="O"&&a6=="O"&&a9=="O")||(a1=="O"&&a5=="O"&&a9=="O")||(a3=="O"&&a5=="O"&&a7=="O")){
            console.log("O wins")
            o++;
            cl();
            i=1;
            return "p2";
        }
    }
    else{
        console.log("Draw")
    }
}

function cl(){
    document.querySelector("#a1").innerHTML="";
    document.querySelector("#a2").innerHTML="";
    document.querySelector("#a3").innerHTML="";
    document.querySelector("#a4").innerHTML="";
    document.querySelector("#a5").innerHTML="";
    document.querySelector("#a6").innerHTML="";
    document.querySelector("#a7").innerHTML="";
    document.querySelector("#a8").innerHTML="";
    document.querySelector("#a9").innerHTML="";
}

function score(){
    document.querySelector(".pl1s").innerHTML=x;
    document.querySelector(".pl2s").innerHTML=o;
}

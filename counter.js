let count=document.getElementById("initial").textContent;
function switchInc(){
    let initalcount=parseInt(count);
    count=initalcount+1;
    if(count>0){
        document.getElementById("initial").style.color="green";
    }else if(count==0){
        document.getElementById("initial").stylr.color="black";
    }else{
        document.getElementById("initial").style.color="red";
    }
    document.getElementById("initial").textContent=count;

}
function switchDes(){
    let initalcount=parseInt(count);
    count=initalcount-1;
    if(count>0){
        document.getElementById("initial").style.color="green";
    }else if(count==0){
        document.getElementById("initial").stylr.color="black";
    }else{
        document.getElementById("initial").style.color="red";
    }
    document.getElementById("initial").textContent=count;
}
function switchRes(){
    count=0;
    document.getElementById("initial").textContent=0;
    document.getElementById("initial").style.color="black";

}
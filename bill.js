let Amount=document.getElementById("billamount");
let tip=document.getElementById("tippercentage");
let dicsription=document.getElementById("result");
function Calculatebutton(){
    if(Amount.value===""&& tip.value===""){
        document.getElementById("result").textContent="Please enter both bill amount and tip percentage.";
        return;
    }
    if(Amount.value===""){
        document.getElementById("result").textContent="please enter bill amount";
        return
    }
    if(tip.value===""){
        document.getElementById("result").textContent="please enter tip percentage";
        return
    }
    Amount=parseInt(Amount.value);
    tip=parseInt(tip.value);
    let tipAmount=(tip/100)*Amount;
    let totalAmount=tipAmount+Amount;
    document.getElementById("totalamount").value=totalAmount;
}

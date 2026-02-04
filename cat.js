function switchOff(){
    document.getElementById("bulbImg").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImg").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchDis").textContent="Switched off";
    document.getElementById("buttonOff").style.backgroundColor="#e80c0c"
}
function switchOn(){
    document.getElementById("bulbImg").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImg").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchDis").textContent="Switched on";
    document.getElementById("buttonOn").style.backgroundColor="#22c55e"
}
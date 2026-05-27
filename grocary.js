let bgcontainer=document.createElement("div");
bgcontainer.classList.add("bgcontainer");
document.body.appendChild(bgcontainer);


let MainHeading=document.createElement("h1");
MainHeading.textContent="Grocery List";
bgcontainer.appendChild(MainHeading);


let unorderedList=document.createElement("ul");
unorderedList.classList.add("shadow-lg", "unordered");
bgcontainer.appendChild(unorderedList);

let arr=["Bread", "Eggs", "Butter", "Cheese", "Fruits", "Vegetables"];

for(let items of arr){
    let listItems=document.createElement("li");
    listItems.textContent=items;
    listItems.classList.add("text-align-center", "heading");
    unorderedList.appendChild(listItems);
}

let checkboxconatiner=document.createElement("div");
checkboxconatiner.classList.add("d-flex", "flex-row", "justify-content-center");
bgcontainer.appendChild(checkboxconatiner);

let checkbox=document.createElement("input");
checkbox.id="checkboxId";
checkbox.type="checkbox";
checkbox.classList.add("checkbox");
checkboxconatiner.appendChild(checkbox);

let label=document.createElement("label");
label.classList.add("labelcaption");
label.textContent="Cash And Delivery";
label.setAttribute("for", "checkboxId");
checkboxconatiner.appendChild(label);

let button=document.createElement("button");
button.textContent="Add To Cart";
button.classList.add("buttonadd");
bgcontainer.appendChild(button);



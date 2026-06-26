let inputEl=document.getElementById('searchInput');
let rowContainerEl=document.getElementById('rowcontainer');
let countryCardEl1=document.createElement('div');
let countrySpin=document.getElementById('spinner');
rowContainerEl.appendChild(countryCardEl1);

function createCards(items){
    let countryCardEl=document.createElement('div');
    countryCardEl.classList.add('d-flex','flex-row','justify-content-start','country-card');
    
    
    let {name,flag,population}=items;
    let imagecontainer=document.createElement('div');
    
    let imageEl=document.createElement('img');
    imageEl.src=flag;
    imageEl.classList.add('country-flag', 'p-1');
    imagecontainer.appendChild(imageEl);
    countryCardEl.appendChild(imagecontainer);
    
    let infoContainer=document.createElement('div');
    let heading=document.createElement('h1');
    heading.classList.add('country-name');
    heading.textContent=name;
    infoContainer.appendChild(heading);
    
    let countryNameEl=document.createElement('p');
    countryNameEl.classList.add('country-population');
    countryNameEl.textContent=population;
    infoContainer.appendChild(countryNameEl);
    
    countryCardEl.appendChild(infoContainer);
    countryCardEl1.appendChild(countryCardEl);
    
} 
inputEl.addEventListener('keydown',function(each){
    let option={
        method:'GET'
    }
     countrySpin.classList.add('d-none');
    if(each.key==='Enter'){
        countryCardEl1.textContent="";
        let countrysearched=inputEl.value;
        fetch("https://apis.ccbp.in/countries-data",option)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            countrySpin.classList.add('d-none');
            if(countrysearched.trim()!==''){
                for(let item of data){
                    if(item.name.includes(countrysearched)){
                        createCards(item);
                    }
                }
            }else{
                 for(let item of data){
                    createCards(item);
                }
            }
        })
    }
})

let inputElement = document.getElementById('searchInput');
let searchContainer = document.getElementById('searchResults');
let loading = document.getElementById('spinner');

function createAddContainer(items) {
    let {
        link,
        title,
        description
    } = items;
    let container = document.createElement('div');

    let ancurelement = document.createElement('a');
    ancurelement.href = link;
    ancurelement.textContent = title;
    container.appendChild(ancurelement);

    let breakEl = document.createElement('br');
    container.appendChild(breakEl);

    let linkElement = document.createElement('a');
    linkElement.textContent = link;
    linkElement.classList.add('mt-5');
    container.appendChild(linkElement);
    let breakEl1 = document.createElement('br');
    container.appendChild(breakEl1);

    let paraElement = document.createElement('p');
    paraElement.textContent = description;
    paraElement.classList.add('mt-3');
    container.appendChild(paraElement);

    searchContainer.appendChild(container);
}

inputElement.addEventListener('keydown', function(each) {
    let target = each.key;
    let option = {
        method: "GET"
    }
    if (target === 'Enter') {
        searchContainer.textContent = "";
        loading.classList.toggle('d-none');
        let url = "https://apis.ccbp.in/wiki-search?search=" + inputElement.value;
        fetch(url, option)
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                loading.classList.toggle('d-none');
                let {
                    search_results
                } = data;
                for (let item of search_results) {
                    createAddContainer(item);
                }
            })
    }
})
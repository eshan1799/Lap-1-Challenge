const searchForm = document.querySelector('#searchForm');
searchForm.addEventListener("submit", submitSearch);

const searchText = document.querySelector('#searchbar');

function submitSearch(e) { 
    const userSearch = e.target.searchbar.value;
    console.log(userSearch);
    if(userSearch !== '') {
        searchForm.action = `https://www.google.co.uk/search?q=${userSearch}`
    } else {
        e.preventDefault(); 
    };
};
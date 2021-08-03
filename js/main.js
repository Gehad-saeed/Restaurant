var ay7aga = new XMLHttpRequest();
var searchInp = document.getElementById('searchInp');
var searchBtn = document.getElementById('searchBtn');




var allRecipes = []

function getData(q) {
    ay7aga.open('GET', `https://forkify-api.herokuapp.com/api/search?&q=${q}`)
    ay7aga.send()
}
getData('pizza');

ay7aga.addEventListener('readystatechange', function() {
    if (ay7aga.readyState == 4) {
        allRecipes = JSON.parse(ay7aga.response).recipes
        display()
    }
})




function display() {
    var box = ``
    for (i = 0; i < allRecipes.length; i++) {
        box += `<div class="col-md-4 my-4 ">
                <div class="post card p-3 pb-5">
                    <img height="250" class="w-100" src="${allRecipes[i].image_url}" alt="">
                    <h3 class="mt-3">${allRecipes[i].title}</h3>
                </div>
            </div>`
    }
    document.getElementById('posts').innerHTML = box;
}


searchBtn.addEventListener('click', function() {
    getData(searchInp.value);
});
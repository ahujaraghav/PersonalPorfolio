let ul = document.querySelector(".ul-js");

function createLi(url, caption)
{
    let li = document.createElement('li');

    let img = document.createElement('img');
    img.setAttribute("src",url);
    img.setAttribute("alt",caption);
    li.appendChild(img);

    let a = document.createElement('a');
    a.textContent = caption;
    li.appendChild(a);

    ul.appendChild(li);
}

createLi("img/js_calc.png", "Javascript Calculator");
createLi("img/map.png", "Map Data Across the Globe");
createLi("img/randon_quote.png", "Random Quote");
createLi("img/tic_tac.png", "Tic Tac Toe");
createLi("img/wiki_viewer.png", "Wikipedia Viewer");


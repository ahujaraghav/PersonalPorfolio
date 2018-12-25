let qualification = document.querySelector('.qualification');
let q = [' web developer',
    ' android developer',
    ' java developer',
    ' google certified I.T support professional',
    ' network associate',
    ' web developer'];


typeQualification(q);

function typeQualification(strArray) {

    let speedRm = 100;
    let speedTp = 150;
    let speedBreak = 700;
    let pos = 0;
    let index = 0;
    let str;
    typeAllCharacter();

    function typeAllCharacter() {
        if (index === 0) {
            str = strArray[pos];
            qualification.textContent = str[0];
            console.log(str);
        }
        else {
            qualification.textContent += str[index];
        }
        if (index === str.length-1) {
            console.log("remove");
            if(pos !== strArray.length-1)
            {
                setTimeout(removeAllCharacters, speedBreak);
            }
           
        }
        else {
            index++;
            setTimeout(typeAllCharacter, speedTp);
        }

    }


    // Removes all characters one by one and calls print for next String print.
    function removeAllCharacters() {
        console.log("inside remove");
        let content = qualification.textContent;
        console.log(content);
        content = content.slice(0, content.length-1);
        console.log(content);
        qualification.textContent = content;
        if (content.length !== 0) {
            setTimeout(removeAllCharacters, speedRm);
        }
        if (content.length === 0) {
            if (pos !== strArray.length) {
                pos++;
                index = 0;
                console.log(pos);
                setTimeout(typeAllCharacter, speedTp);
            }
        }
    }
}





let ul = document.querySelector(".ul-js");

function createLi(url, caption) {
    let li = document.createElement('li');

    let img = document.createElement('img');
    img.setAttribute("src", url);
    img.setAttribute("alt", caption);
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


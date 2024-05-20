const btn = document.querySelector(".add_book_btn");
const form = document.querySelector(".form");
const submit = document.querySelector(".btn");
const title_input = document.querySelector(".title");
const genre_input = document.querySelector(".inp[name='genre']");
const main = document.querySelector("main");

function BookAddition(title, genre) {
    this.title = title;
    this.genre = genre;
}

var button_clicked = 0;

btn.addEventListener("click", () => {
    if (button_clicked === 0) {
        form.style.visibility = 'visible';
        button_clicked = 1;
    } else if (button_clicked === 1) {
        form.style.visibility = 'hidden';
        button_clicked = 0;
    }
});




submit.addEventListener("click", (event) => {
    event.preventDefault();
    var title = title_input.value;
    var genre = genre_input.value;
    var b = new BookAddition(title, genre);
    console.log(b)
    var arr = localStorage.getItem('books');
    var arr1 = JSON.parse(arr);
    arr1.push(b);
    title_input.value = "";
    genre_input.value = "";
    form.style.visibility = 'hidden';

    const element = books[(books.length - 1)];
    const newdiv = document.createElement("div");
    const newtitle = document.createElement("h2");
    const newgenre = document.createElement("h2");
    const image = document.createElement("img");
    newtitle.innerText = "Title : " + element.title;
    newgenre.innerText = "Genre : " + element.genre;

    if (newgenre.innerText === "Genre : Story") {
        image.setAttribute("src", "images/images.jpeg");
    }
    else if (newgenre.innerText === "Genre : Adventure") {
        image.setAttribute("src", "images/360_F_520764349_sB9E9bO2XWiVthtVc79Kwp5Ar6wzB0al.jpg");
    }
    else {
        image.setAttribute("src", "images/images.png");
    }
    newdiv.appendChild(image);
    newdiv.appendChild(newtitle);
    newdiv.appendChild(newgenre);
    newdiv.classList.add("book");
    main.appendChild(newdiv);
    
    stringifiedarray = JSON.stringify(arr1);
    localStorage.setItem('books',stringifiedarray);
}
);


window.onload = function array_parse() {
    var arr = localStorage.getItem('books');
    var arr1 = JSON.parse(arr);
    for (let i = 0; i < arr1.length; i++) {
        const book = arr1[i];
        var title = book.title;
        var genre = book.genre;

        const newdiv = document.createElement("div");
        const newtitle = document.createElement("h2");
        const newgenre = document.createElement("h2");
        const image = document.createElement("img");
        newtitle.innerText = "Title : " + title;
        newgenre.innerText = "Genre : " + genre;

        if (newgenre.innerText === "Genre : Story") {
            image.setAttribute("src", "images/images.jpeg");
        }
        else if (newgenre.innerText === "Genre : Adventure") {
            image.setAttribute("src", "images/360_F_520764349_sB9E9bO2XWiVthtVc79Kwp5Ar6wzB0al.jpg");
        }
        else {
            image.setAttribute("src", "images/images.png");
        }
        newdiv.appendChild(image);
        newdiv.appendChild(newtitle);
        newdiv.appendChild(newgenre);
        newdiv.classList.add("book");
        main.appendChild(newdiv);
    }
}




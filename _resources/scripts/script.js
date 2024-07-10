let pages = ["Lectures", "Activities", "Quizzes", "Exams"];
let page_index = 0;

let lectures = document.querySelector(".tasks--lectures");
let activities = document.querySelector(".tasks--activities");
let quizzes = document.querySelector(".tasks--quizzes");
let exams = document.querySelector(".tasks--exams");


let page_name = document.querySelector(".navigation__location");

function page_prev() {
    page_index -= 1;

    if (page_index < 0) {
        page_index = pages.length - 1;
    }

    window.history.pushState(`${pages[pages.page_index]}`, "", `#${pages[page_index].toLocaleLowerCase()}`);

    page_update();
}

function page_next() {
    page_index += 1;

    if (page_index > pages.length - 1) {
        page_index = 0;
    }

    window.history.pushState(`${pages[pages.page_index]}`, "", `#${pages[page_index].toLocaleLowerCase()}`);

    page_update();
}

function page_update() {
    page_name.innerHTML = pages[page_index];

    switch (page_index) {
        case 0: 
            lectures.style.display = "grid";
            activities.style.display = "none";
            quizzes.style.display = "none";
            exams.style.display = "none";
            break;
        case 1: 
            lectures.style.display = "none";
            activities.style.display = "grid";
            quizzes.style.display = "none";
            exams.style.display = "none";
            break;
        case 2: 
            lectures.style.display = "none";
            activities.style.display = "none";
            quizzes.style.display = "grid";
            exams.style.display = "none";
            break;
        case 3: 
            lectures.style.display = "none";
            activities.style.display = "none";
            quizzes.style.display = "none";
            exams.style.display = "grid";
            break;
    }
}

if (window.location.hash == "#lectures") {
    page_index = 0;
} else if (window.location.hash == "#activities") {
    page_index = 1;
} else if (window.location.hash == "#quizzes") {
    page_index = 2;
} else if (window.location.hash == "#exams") {
    page_index = 3;
}

page_update();
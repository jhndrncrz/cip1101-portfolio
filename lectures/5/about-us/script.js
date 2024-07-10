function onpageload() {
  alert("This event was triggered on page load.");
}

function page1() {
  alert("This event was trigerred when the mouse clicked on page 1!");
}

function page2() {
  alert("This event was trigerred when the mouse clicked on page 2!");
}

function page3() {
  alert("This event was trigerred when the mouse clicked on page 3!");
}

function page4() {
  alert("This event was trigerred when the mouse clicked on page 4!");
}

function page5() {
  alert("This event was trigerred when the mouse clicked on page 5!");
}

function flippage1() {
  let page =document.getElementById("page1");
  if (page.classList.contains("flip")) {
      page.classList.remove("flip");
  } else {
    page.classList.add("flip");
  }
}

function flippage2() {
  let page =document.getElementById("page2");
  if (page.classList.contains("flip")) {
      page.classList.remove("flip");
  } else {
    page.classList.add("flip");
  }
}

function flippage3() {
  let page =document.getElementById("page3");
  if (page.classList.contains("flip")) {
      page.classList.remove("flip");
  } else {
    page.classList.add("flip");
  }
}

function flippage4() {
  let page =document.getElementById("page4");
  if (page.classList.contains("flip")) {
      page.classList.remove("flip");
  } else {
    page.classList.add("flip");
  }
}

function flippage5() {
  let page =document.getElementById("page5");
  if (page.classList.contains("flip")) {
      page.classList.remove("flip");
  } else {
    page.classList.add("flip");
  }
}
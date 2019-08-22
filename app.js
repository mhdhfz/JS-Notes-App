const edit = document.querySelector("#content");
let getContent = document.getElementById("content");

getContent.innerHTML = localStorage.getItem("title");
//getContent = localStorage.getItem("text");

setInterval(() => {
  localStorage.setItem("title", edit.innerHTML);
  //localStorage.setItem("text", edit.innerHTML);
}, 1000);

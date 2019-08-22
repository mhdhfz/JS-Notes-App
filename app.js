const title = document.querySelector("#title");
const content = document.querySelector("#content");
const listNotes = document.querySelector(".list-notes");
let getTitle = document.querySelector("#title");
let getContent = document.getElementById("content");

const dtlNote = localStorage.getItem("title");

const generateTemplate = dtlNote => {
  const html = `
    <li class="list-note">
      <span>${dtlNote}</span>
       <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  listNotes.innerHTML += html;
};

getTitle.innerHTML = localStorage.getItem("title");
getContent.innerHTML = localStorage.getItem("content");

setInterval(() => {
  localStorage.setItem("content", content.innerHTML);
}, 1000);

title.addEventListener("keydown", e => {
  if (e.keyCode == 9) {
    localStorage.setItem("title", title.innerHTML);
    generateTemplate(dtlNote);
  }
});

title.addEventListener("keydown", e => {
  if (
    e.keyIdentifier === "U+000A" ||
    e.keyIdentifier === "Enter" ||
    e.keyCode === 13
  ) {
    if (e.target.nodeName == "DIV" && e.target.id == "title") {
      e.preventDefault();
      return false;
    }
  }
});

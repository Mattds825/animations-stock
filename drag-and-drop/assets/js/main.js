let color = document.querySelector("#colorInput");
// let createBtn = document.querySelector("#createBtn");
let createBtn = document.getElementById("createBtn");
let list = document.querySelector("#list");

// let closeBtn = document.querySelector(".close");

// closeBtn.onclick = () => {
//   console.log("closeBtn.onclick");
// //   closeBtn.parentElement.remove();
// };

createBtn.onclick = () => {
    console.log("createBtn.onClick");
    let newNote = document.createElement("div");
    newNote.classList.add("note");
    newNote.innerHTML = `
      <span class="close">x</span>
      <textarea placeholder="Write Content ..." rows="10" cols="30"></textarea>
      `;
    list.appendChild(newNote);
};

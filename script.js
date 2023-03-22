import Book from "./Book.js";

let books = [];
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("new-book");

// Get the <span> element that closes the modal
var span = document.getElementById("close");

const form = document.querySelector("form");
const submitBtn = document.querySelector("#add-book");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  submitBtn.disabled = true;
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

const addBook = document.querySelector("#add-book");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#read");
const titleError = document.querySelector("#title-error");
const authorError = document.querySelector("#author-error");
const pageError = document.querySelector("#page-error");

pages.addEventListener("input", () => {
  if (pages.validity.patternMismatch) {
    pageError.textContent = "Please provide numbers.";
  } else {
    pageError.textContent = "";
  }
});

form.addEventListener("input", () => {
  if (form.checkValidity()) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

addBook.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "none";
  const book = new Book(title.value, author.value, pages.value, isRead.checked);
  const content = `<h3> ${book.title} </h3>
        <h4> by ${book.author} </h4>
        <p> ${book.pages} pages 
        </p>
        <p> ${book.isRead ? "Already Read" : "Not Read"}
     </p>`;

  const container = document.getElementById("book-list");

  const section = document.createElement("section");
  section.classList.add("card");
  section.setAttribute("id", books.length.toString());
  section.innerHTML = content;

  const removeBookButton = document.createElement("button");
  removeBookButton.classList.add("remove-button");
  removeBookButton.textContent = "Remove";
  const len = books.length.toString();
  removeBookButton.addEventListener("click", (event) => {
    const remove = document.getElementById(len);
    container.removeChild(remove);
    books.splice(len, 1);
  });
  section.appendChild(removeBookButton);

  container.appendChild(section);

  clearForm();

  books.push(book);
});

function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  isRead.checked = false;
}

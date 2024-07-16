// Book Library app

// TODO:
// 1. When clicking submit, clear the forms fields, and re-autofocus the title input.
// 2. When you've clicked submit once, you can do it again and the forms are able to be posted empty.
// 3. Put the submission form on the right side of the screen.

// Example book creations
const monaLisa = new Book("Mona Lisa Overdrive", "William Gibson", 251, false);

// Library declaration
const myLib = [monaLisa];

// Form declarations
let newTitle = document.querySelector("#title");
let newAuthor = document.querySelector("#author");
let newPages = document.querySelector("#pages");
let newRead = document.querySelector("#read");
let newISBN = document.querySelector("#isbn");
let sumbit = document.querySelector("#submit");

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.hasRead = false;
}

function addBooktoLibrary() {
	const newBook = new Book(newTitle, newAuthor, newPages, newRead);
	myLib.push(newBook);
	console.log(newBook);
	showBook(newBook);
	newTitle.value = "";
}

submit.addEventListener("click", addBooktoLibrary);

const containerDiv = document.querySelector("div#book-container");

function showBook(book) {
	// Create pieces
	const div = document.createElement("div");
	div.classList.add("aBook");
	const table = document.createElement("table");
	const rowTitle = document.createElement("tr");
	const rowAuthor = document.createElement("tr");
	const rowPages = document.createElement("tr");
	const rowStatus = document.createElement("tr");
	const headTitle = document.createElement("th");
	const headAuthor = document.createElement("th");
	const headPages = document.createElement("th");
	const headStatus = document.createElement("th");
	const cellTitle = document.createElement("td");
	const cellAuthor = document.createElement("td");
	const cellPages = document.createElement("td");
	const cellStatus = document.createElement("td");

	// Input data
	headTitle.textContent = "Title";
	headAuthor.textContent = "Author";
	headPages.textContent = "Pages";
	headStatus.textContent = "Status";
	cellTitle.textContent = book.title.value;
	cellAuthor.textContent = book.author.value;
	cellPages.textContent = book.pages.value;

	if (book.hasRead === false) {
		cellStatus.textContent = "Not yet";
	} else {
		cellStatus.textContent = "Read";
	}

	// Put them together
	containerDiv.appendChild(div);
	div.appendChild(table);

	table.appendChild(rowTitle);
	rowTitle.appendChild(headTitle);
	rowTitle.appendChild(cellTitle);

	table.appendChild(rowAuthor);
	rowAuthor.appendChild(headAuthor);
	rowAuthor.appendChild(cellAuthor);

	table.appendChild(rowPages);
	rowPages.appendChild(headPages);
	rowPages.appendChild(cellPages);

	table.appendChild(rowStatus);
	rowStatus.appendChild(headStatus);
	rowStatus.appendChild(cellStatus);
}

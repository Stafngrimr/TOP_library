// Book Library app

// Form declarations
let newTitle = document.querySelector("#title");
let newAuthor = document.querySelector("#author");
let newPages = document.querySelector("#pages");
let newRead = document.querySelector("#read");

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.hasRead = false;
}

// Example book creation
const monaLisa = new Book("Mona Lisa Overdrive", "William Gibson", 251);
monaLisa.hasRead = false;

// Library declaration
const myLib = [monaLisa];
showLibrary(myLib);

// Book manip functions and calls
function addBooktoArr() {
	const newBook = new Book(newTitle.value, newAuthor.value, newPages.value);
	newBook.hasRead = newRead.checked;
	myLib.push(newBook);
	event.preventDefault();
	showLibrary(myLib);
}

function removeBookFromArr() {
	// When we press the button remove the book from the arr
}

submit.addEventListener("click", addBooktoArr);
// TODO submit.addEventListener("click", removeBookFromArr);

function showLibrary(library) {
	// Clear current library
	const cont = document.querySelector("#book-container");
	cont.innerHTML = "";
	
	// Iterate through array to create books
	for (let i=0;i<library.length;i++) {
		const div = document.createElement("div");
		div.classList.add("aBook");
		div.setAttribute("data-id", i);
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
		cellTitle.textContent = library[i].title;
		cellAuthor.textContent = library[i].author;
		cellPages.textContent = library[i].pages;

		if (library[i].hasRead === false) {
			cellStatus.textContent = "Not yet";
		} else {
			cellStatus.textContent = "Read";
		}

		// Put them together
		cont.appendChild(div);
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

		// TODO Add in delete button, and (not) Read button
		}
	}

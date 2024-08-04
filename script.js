// Book Library app

// Form declarations
let newTitle = document.querySelector("#title");
let newAuthor = document.querySelector("#author");
let newPages = document.querySelector("#pages");
let newRead = document.querySelector("#read");

// Book constructor
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.hasRead = false;
}

const monaLisa = new Book("Mona Lisa Overdrive", "William Gibson", 251);
monaLisa.hasRead = false;

const myLib = [monaLisa];
showLibrary(myLib);

// Book manip functions and calls
function addBooktoArr() {
	const newBook = new Book(newTitle.value, newAuthor.value, newPages.value);
	newBook.hasRead = newRead.checked;
	myLib.push(newBook);
	event.preventDefault();
	showLibrary();
}
submit.addEventListener("click", addBooktoArr);

function removeBookFromArr() {
	// When we press the button remove the book from the arr
	let delButtons = document.querySelectorAll(".buttonDel");
	for (let i=0; i<delButtons.length;i++) {
		delButtons[i].addEventListener("click", function() {
			myLib.splice(i, 1);
			showLibrary();
		})
	}
}

function changeStatus() {
	let readButtons = document.querySelectorAll(".buttonStatus");
	for (let i=0;i<readButtons.length;i++) {
		readButtons[i].addEventListener("click", function() {
			if (myLib[i].hasRead === true) {
				myLib[i].hasRead = false;
			} else if (myLib[i].hasRead === false) {
				myLib[i].hasRead = true;
			}
			showLibrary();
		})
	}
}

// Show/reload the library
function showLibrary() {
	// Clear current library
	const cont = document.querySelector("#book-container");
	cont.innerHTML = "";
	
	// Iterate through array to create books
	for (let i=0;i<myLib.length;i++) {
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
		cellTitle.textContent = myLib[i].title;
		cellAuthor.textContent = myLib[i].author;
		cellPages.textContent = myLib[i].pages;

		if (myLib[i].hasRead === false) {
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

		const rowButtons = document.createElement("tr");
		const cellReadButton = document.createElement("td");
		const cellDelButton = document.createElement("td");
		const buttonRead = document.createElement("button");
		const buttonDel = document.createElement("button");

		buttonRead.classList.add("buttonStatus");
		buttonDel.classList.add("buttonDel");
		
		table.appendChild(rowButtons);
		rowButtons.appendChild(cellReadButton);
		rowButtons.appendChild(cellDelButton);

		cellReadButton.appendChild(buttonRead);
		cellDelButton.appendChild(buttonDel);

		buttonRead.textContent = "Change Status";
		buttonDel.textContent = "Remove Book";
	}

	changeStatus();
	removeBookFromArr();
}
	

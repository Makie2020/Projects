const products = [
        {
            "id": 1,
            "name": "Product 1",
        },
        {
            "id": 2,
            "name": "Product 2",
        },
        {
            "id": 3,
            "name": "Product 3",
        },
        {
            "id": 4,
            "name": "Product 4",
        },
        {
            "id": 5,
            "name": "Product 5",
        },
        {
            "id": 6,
            "name": "Product 6",
        },
        {
            "id": 7,
            "name": "Product 7",
        },
        {
            "id": 8,
            "name": "Product 8",
        },
        {
            "id": 9,
            "name": "Product 9",
        },
        {
            "id": 10,
            "name": "Product 10",
        },];
let currentPage = 1;
let recordsPerPage = document.getElementById("select2").value;
const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");
let listingTable = document.getElementById("listingTable");
let pageSpan = document.getElementById("page");

// let numPage = Math.ceil(products.length / recordsPerPage);
let numPages = Math.ceil(products.length / recordsPerPage); // NEW Renamed variable for better understanding

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        // changePage(currentPage); // OLD
        changePage(); // NEW
    }
}

function nextPage() {
    if (currentPage < numPages) {
        currentPage++;
        changePage(); 
    }
}


function changePage() {
    let trimStart = (currentPage-1)*recordsPerPage;
    let trimEnd = parseInt(trimStart) + parseInt(recordsPerPage);
    var displayProducts = products.slice(trimStart, trimEnd);
    listingTable.innerHTML = "";
        
    displayProducts.forEach(products => 
        listingTable.innerHTML += products.name + "<br>"
    );

    pageSpan.innerHTML = currentPage + "/" + numPages;

    if (currentPage == 1) {
        btnPrev.style.visibility = "hidden";
    } else {
        btnPrev.style.visibility = "visible";
    }

    if (currentPage == numPages) {
        btnNext.style.visibility = "hidden";
    } else {
        btnNext.style.visibility = "visible";
    }
}

function calculateButtons () {
    let buttons = document.getElementById("buttons");
    buttons.innerHTML = ''; 
    let totalButtons = Math.ceil(products.length / recordsPerPage);
    for (let i = 1; i <= totalButtons; i++) {
        let button = document.createElement("button");
        button.innerHTML= i ;
        button.value = i;
        button.className = "clearButton";
        buttons.appendChild(button);
        button.addEventListener("click", function(event) {
            currentPage = button.value; 
            changePage(); 
        });
    }
}

window.onload = function() {
    calculateButtons();
    currentPage = 1; 
    changePage();
};
let select2 = document.getElementById("select2");
select2.onchange = function() {
    recordsPerPage = document.getElementById("select2").value;
    numPages = Math.ceil(products.length / recordsPerPage); 
    calculateButtons(); 
    currentPage = 1; 
    changePage(); 
};


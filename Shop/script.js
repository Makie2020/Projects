const productElementen = document.querySelector(".products");
const cardItemsElementen = document.querySelector(".card-items");
const subtotaalElementen = document.querySelector(".sub-totaal");
const wishlistItemsElementen = document.querySelector(".modal-tekst");

function renderProducts() {
    producten.forEach( (product) => {
        productElementen.innerHTML += `
            <div class="col-lg-3 col-md-6 col-sm-6">
            <figure class="card card-product-grid">
                <a href="#" class="img-wrap" alt="${product.name}"> 
                    <img src="${product.imgSrc}"> 
                </a>
                <figcaption class="info-wrap border-top">
                    <a href="#" class="title text-truncate">${product.name}</a>
                    <div class="price">EUR ${product.prijs}</div> 
                    <a href="#winkelwagen" class="btn btn-primary" onclick="addToCart(${product.id})"> <i class="me-1 fa fa-shopping-basket"></i> Add to cart </a>
                    <a href="#" class="float-end btn btn-light btn-icon" onclick="addtoFavList(${product.id})" id="like";><i class="fa fa-heart"></i></a>
                </figcaption>
            </figure>
            </div>
        `;
    });
}
renderProducts();

let card = [];

function addToCart (id) {
    if(card.some((item) => item.id === id)){
        changeNumberOfUnits("plus", id)
    } else {
        const item = producten.find((product) => product.id === id)
        card.push({
            ...item,
            numberOfUnits: 1,
    });
    }
    updateCard();
}    

function updateCard() {
    renderCartItems();
    renderSubtotaal();
}

function renderSubtotaal () {
    let totaalPrijs = 0, 
        totaalItems = 0;
    card.forEach((item) => {
        totaalPrijs += item.prijs * item.numberOfUnits;
        totaalItems += item.numberOfUnits;
    });
    subtotaalElementen.innerHTML = `Subtotaal (${totaalItems} items): EUR ${totaalPrijs.toFixed(2)}`;
}

function renderCartItems() {
    cardItemsElementen.innerHTML = "";
    card.forEach((item) => {
        cardItemsElementen.innerHTML += `
            <article class="card-body border-bottom">
                <div class="row gy-3">
                    <div class="col-md-7">
                        <figure class="itemside">
                            <a href="#!" class="aside">
                                <img src="${item.imgSrc}" alt="${item.name}" class="img-md img-thumbnail">
                            </a>
                            <figcaption class="info">
                                <a href="#!" class="title">${item.name}</a>
                                <strong class="price d-block mb-2">${item.prijs}</strong>
                                <div>
                                    <div a href="#!" onclick="removeItemFromCard(${item.id})" class="btn-link text-danger"> Remove </div>
                                </div>
                            </figcaption>
                        </figure> 
                    </div> 
                    <div class="col-md-5"> 
                        <div class="input-group input-spinner float-lg-end">
                            <button class="btn btn-light" onclick="changeNumberOfUnits('minus', ${item.id})" type="button"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#999" viewBox="0 0 24 24"> <path d="M19 13H5v-2h14v2z"></path>
                                </svg>
                            </button>
                            <div>
                                <div class="number form-control"> ${item.numberOfUnits}</div>
                            </div>
                            <button class="btn btn-light" onclick="changeNumberOfUnits('plus', ${item.id})" type="button"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#999" viewBox="0 0 24 24"> <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>  </svg>
                            </button>
                        </div> 
                    </div>  
                </div> 
            </article>
        `
    })
}

function removeItemFromCard (id) {
    card = card.filter((item) => item.id !== id)
    updateCard();
}

function changeNumberOfUnits(action, id) {
    card = card.map((item) => {
        let numberOfUnits = item.numberOfUnits;
        if(item.id === id) {
            if(action === "minus" && numberOfUnits > 1) {
                numberOfUnits--;
            } else if (action === "plus" && numberOfUnits > item.instock) {
                alert("Het product is uitverkocht");
            } else if (action === "plus" && numberOfUnits < item.instock) {
                numberOfUnits++;
            }
        }
        return {
            ...item,
            numberOfUnits,
        }; 
    })
    updateCard();
}
// WISHLIST 
let wishlist = [];

function addtoFavList(id) {
    if(wishlist.some((item) => item.id === id)){
        return wishlist,
        console.log(wishlist),
        alert("Het product staat al op de wishlist");
    } else {
        const item = producten.find((product) => product.id === id)
        wishlist.push({
            ...item,
        });
        var like = document.getElementById("like");
        addEventListener("click",function(){
        like.style.color = "black";
});
        console.log(wishlist)
    }
    updateWishlist();
}    
function updateWishlist() {
    wishlistItemsElementen.innerHTML = "";
    wishlist.forEach((item) => {
        wishlistItemsElementen.innerHTML += `
            <article class="card-body border-bottom">
                <div class="row gy-3">
                    <div class="col-md-7">
                        <figure class="itemside">
                            <a href="#" class="aside">
                                <img src="${item.imgSrc}" alt="${item.name}" class="img-md img-thumbnail">
                            </a>
                            <figcaption class="info">
                                <a href="#" class="title">${item.name}</a>
                                <strong class="price d-block mb-2">${item.prijs}</strong>
                                <div>
                                <div a href="#" onclick="removeItemFromWishlist(${item.id})" class="btn-link text-danger"> Remove </div>
                                </div>
                            </figcaption>
                        </figure> 
                    </div>   
                </div> 
            </article>
        `     
    })
}

function removeItemFromWishlist (id) {
    wishlist = wishlist.filter((item) => item.id !== id)
    updateWishlist();
};

if(document.getElementById("btnModal")){
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("btnModal");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];

    btn.onclick = function() {
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
}

const quantityDisplay = document.querySelector('.quantity');
let proQuantity = 0;
let productID = "0001";

const thumbnailsWrapper = document.querySelectorAll('.thumbnail-wrapper');
const mainImage = document.querySelector('.main-image');

const lightboxThumbnailWrappers = document.querySelectorAll('.lightbox-thumbnail-wrapper');
const lightboxMainImage = document.querySelector('.lightbox-image');

const minusBtn = document.querySelector('.control-minus');
minusBtn.addEventListener('click', () => {
    if (proQuantity > 0) proQuantity--;
    quantityDisplay.textContent = proQuantity;
});

const plusBtn = document.querySelector('.control-plus');
plusBtn.addEventListener('click', () => {
    proQuantity++;
    quantityDisplay.textContent = proQuantity;
});

const cart = document.querySelectorAll('.add-to-cart');
let lstProduct = [];
cart.forEach((btn) => {
    btn.addEventListener('click', () => {
        const found = lstProduct.find(obj => obj.id === productID);
        let proName = document.querySelector('.product-info .product-name h1').textContent;

        if (found) {
            found.quantity += proQuantity;
        } else {
            const newObject = {
                id: productID,
                name: proName,
                quantity: proQuantity
            };
            lstProduct.push(newObject);
        }
        console.log(lstProduct);
    });
});

const cartDropdown = document.querySelector('.cart-dropdown');

document.querySelector('.icon img').addEventListener('click', () => {
    if (!lstProduct || lstProduct.length === 0) {
        cartDropdown.innerHTML = `
            <div class="none-cart">
                <h3>Cart</h3>
                <div class="cart-content-empty">
                    <p>Your cart is empty.</p>
                </div>
            </div>
        `;
    } else {
        cartDropdown.innerHTML = `
        <div class="cart-item">
            <h3>Cart</h3>
            <div class="item">
                <img src="images/image-product-1-thumbnail.jpg" class="cart-thumb" />
                <div class="item-info">
                    <p class="product-name">Fall Limited Edition Sneakers</p>
                    <p class="price">$125.00 x ${lstProduct[0].quantity} <span class="total-price">$${lstProduct[0].quantity * 125}.00</span></p>
                </div>
                <img src="images/icon-delete.svg" class="delete-icon" />
            </div>
            <button class="checkout-btn">Checkout</button>
        </div>
    `;
    }

    toggleCart(true);
});

const clearProc = document.querySelector('.delete-icon');
clearProc.addEventListener('click', () => {
    console.log("clear");
});

document.addEventListener('click', (e) => {
    const isClickInside = cartDropdown.contains(e.target);
    const isCartIcon = e.target.closest('.icon') !== null;
  
    if (!isClickInside && !isCartIcon) {
        toggleCart(false);
        cartDropdown.innerHTML = '';
        console.log("outside");
    }
});

function toggleCart(show) {
    const cart = document.querySelector('.cart-dropdown');
    cart.style.display = show ? 'flex' : 'none';
}

setActiveThumbnail("main", 0);
thumbnailsWrapper.forEach((img, index) => {
    img.addEventListener('click', () => {
        setActiveThumbnail("main", index);
    });
});

mainImage.addEventListener('click', () => {
    let mainIndex = getCurrentIndex(thumbnailsWrapper);
    setActiveThumbnail("lightbox", mainIndex);
    toggleLightbox(true);
});

lightboxThumbnailWrappers.forEach((img, index) => {
    img.addEventListener('click', () => {
        setActiveThumbnail("lightbox", index);
    });
});

document.querySelector('.next').addEventListener('click', () => {
    let lightIndex = getCurrentIndex(lightboxThumbnailWrappers);

    if (lightIndex < (lightboxThumbnailWrappers.length - 1)) {
        setActiveThumbnail("lightbox", lightIndex + 1);
    }
});

document.querySelector('.prev').addEventListener('click', () => {
    let lightIndex = getCurrentIndex(lightboxThumbnailWrappers);

    if (lightIndex > 0) {
        setActiveThumbnail("lightbox", lightIndex - 1);
    }
});

document.querySelector('.close-lightbox').addEventListener('click', () => {
    toggleLightbox(false);
});


function toggleLightbox(show) {
    const box = document.querySelector('.lightbox-hidden');
    box.style.display = show ? 'flex' : 'none';
}

function getCurrentIndex(listThump) {
    return [...listThump].findIndex(wrapper => wrapper.classList.contains('active'));
}

function setActiveThumbnail(listThump, number) {
    if (listThump === "main") {
        thumbnailsWrapper.forEach((wrapper, index) => {
            if (index === number) {
                wrapper.classList.add('active');
            } else {
                wrapper.classList.remove('active');
            }
        });
        mainImage.src = `images/image-product-${number + 1}.jpg`;
    } else if (listThump === "lightbox") {
        lightboxThumbnailWrappers.forEach((wrapper, index) => {
            if (index === number) {
                wrapper.classList.add('active');
            } else {
                wrapper.classList.remove('active');
            }
        });
        lightboxMainImage.src = `images/image-product-${number + 1}.jpg`;
    }
    
}
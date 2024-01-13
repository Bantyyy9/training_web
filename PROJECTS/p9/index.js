const menuBtns = document.querySelectorAll(".menu");
const navItemsWrapper = document.querySelector(".nav-items-wrapper");
//mobile menu
menuBtns.forEach((btn) => {
  btn.addEventListener("click", toggleNavItemsOpen);
});
function toggleNavItemsOpen() {
  navItemsWrapper.classList.toggle("active");
}

//display carts
const cartBtn = document.querySelector(".cart .btn");
const cartItemsWrapper = document.querySelector(".cart-items-wrapper");
cartBtn.addEventListener("click", toggleCartItems);
function toggleCartItems() {
  cartItemsWrapper.classList.toggle("open");
}

//add to cart
const cartChp = document.querySelector(".cart-chip");
const quantityBtns = document.querySelectorAll(".quantity button");
const quantityDisplay = document.querySelector(".quantity span");
const addToCartBtn = document.querySelector(".actions button.primary");
const itemsHolder = document.querySelector(".cart-items");

quantityBtns[0].addEventListener("click", () => {
  const v = +quantityDisplay.innerText;
  if (v != 0) {
    quantityDisplay.innerHTML = v - 1;
  }
});
quantityBtns[1].addEventListener("click", () => {
  const v = +quantityDisplay.innerText;
  quantityDisplay.innerHTML = v + 1;
});

addToCartBtn.addEventListener("click", () => {
  const qty = +quantityDisplay.innerText;
  if (qty === 0) {
    alert("Please increase the quantity first");
  } else {
    itemsHolder.innerHTML = "";
    document?.querySelector(".empty")?.remove();
    const title = document.querySelector(".right .header h1").innerText;
    const price = document.querySelector(".right .pricing h3").innerText;

    const cartWrapper = document.createElement("div");
    cartWrapper.classList.add("cart-item");

    const cartImageWrapper = document.createElement("div");
    cartImageWrapper.classList.add("cart-image");

    const cartImg = document.createElement("img");
    cartImg.src = "./images/image-product-1-thumbnail.jpg";

    cartImageWrapper.appendChild(cartImg);

    const cartContentWrapper = document.createElement("div");
    cartContentWrapper.classList.add("cart-content");

    const titleHolder = document.createElement("h6");
    titleHolder.innerHTML = title;

    const span1 = document.createElement("span");
    span1.innerHTML = `${price} x ${qty}`;

    const span2 = document.createElement("span");
    span2.innerHTML = `$${Intl.NumberFormat(undefined, {
      minimumFractionDigits: 2,
    }).format(+price.replace("$", "") * qty)}`;

    cartContentWrapper.append(titleHolder, span1, span2);

    const deleteCartBtn = document.createElement("button");
    deleteCartBtn.classList.add("cart-delete-btn");
    deleteCartBtn.addEventListener("click", deleteAllItems);

    const deleteBtn = document.createElement("img");
    deleteBtn.src = "./images/icon-delete.svg";

    deleteCartBtn.appendChild(deleteBtn);

    cartWrapper.append(cartImageWrapper, cartContentWrapper, deleteCartBtn);

    const checkoutBtn = document.createElement("button");
    checkoutBtn.className = "primary";
    checkoutBtn.innerHTML = "Checkout";

    itemsHolder.append(cartWrapper, checkoutBtn);
    if (!cartItemsWrapper.classList.contains("open")) {
      toggleCartItems();
    }

    cartChp.innerHTML = qty;
    cartChp.classList.add("show");
  }
});

function deleteAllItems() {
  // <p class="empty">Empty Cart</p>
  const emptyCartText = document.createElement("p");
  emptyCartText.className = "empty";
  emptyCartText.innerHTML = "Empty Cart";

  itemsHolder.innerHTML = "";
  itemsHolder.appendChild(emptyCartText);

  cartChp.innerHTML = "";
  cartChp.classList.remove("show");
}

//image display
const displayImage = document.querySelector(".display img");
const modalDisplayImage = document.querySelector(".modal .main > img");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".modal button.close");

function toggleModal() {
  modal.classList.toggle("open");
}
displayImage.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal);

//thumbnails
const thumbnails = document.querySelectorAll(".thumbnails div");

function changeImageByThumbnail(el, index) {
  const pos = index + 1 > 4 ? index + 1 - 4 : index + 1;
  const src = `./images/image-product-${pos}.jpg`;

  // console.log(pos, src);
  // const src = el.firstElementChild.getAttribute("src");
  displayImage.setAttribute("src", src);
  modalDisplayImage.setAttribute("src", src);
  //set as active ele
  thumbnails.forEach((e) => e.classList.remove("active"));
  el.classList.add("active");
  const otherIndex = (index + 1 > 4 ? index + 1 - 4 : index + 1 + 4) - 1;
  thumbnails[otherIndex].classList.add("active");
}
thumbnails.forEach((el, index) => {
  el.addEventListener("click", () => {
    changeImageByThumbnail(el, index);
  });
});

//navigation
const navigationBtns = document.querySelectorAll(".navigation button");

navigationBtns[0].addEventListener("click", prevImage);
navigationBtns[2].addEventListener("click", prevImage);
navigationBtns[1].addEventListener("click", nextImage);
navigationBtns[3].addEventListener("click", nextImage);

function nextImage() {
  const src = displayImage.getAttribute("src");

  if (src.includes("1")) {
    changeImageByThumbnail(thumbnails[1], 1);
  } else if (src.includes("2")) {
    changeImageByThumbnail(thumbnails[2], 2);
  } else if (src.includes("3")) {
    changeImageByThumbnail(thumbnails[3], 3);
  } else {
    changeImageByThumbnail(thumbnails[0], 0);
  }
}
function prevImage() {
  const src = displayImage.getAttribute("src");
  if (src.includes("1")) {
    changeImageByThumbnail(thumbnails[3], 3);
  } else if (src.includes("2")) {
    changeImageByThumbnail(thumbnails[0], 0);
  } else if (src.includes("3")) {
    changeImageByThumbnail(thumbnails[1], 1);
  } else {
    changeImageByThumbnail(thumbnails[2], 2);
  }
}

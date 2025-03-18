document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartTotal = document.querySelector(".cart-total");
    function updateCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button data-index="${index}" class="remove-item">Remove</button>`;
            cartItemsContainer.appendChild(li);
            total += item.price;
        });
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }
    cartItemsContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-item")) {
            const index = event.target.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCart();
        }
    });
    updateCart();
});

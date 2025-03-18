document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const productElement = this.closest(".product");
            const product = {
                id: productElement.getAttribute("data-id"),
                name: productElement.getAttribute("data-name"),
                price: parseFloat(productElement.getAttribute("data-price"))
            };
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product.name} added to cart!`);
        });
    });
});
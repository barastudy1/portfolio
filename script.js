document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: "Baju Akad+Setelan Jas Hitam+Baju Kondangan", price: "Rp. 2.100.000", image: "gbr11.png" },
        { name: "Baju Resepsi Pria", price: "Rp. 1.100.000", image: "gbr7.png" },
        { name: "Baju Akad+Setelan Jas Hitam+Seragam Ortu", price: "Rp. 2.100.000", image: "gbr9.png" },
        { name: "Baju Resepsi+Pendamping", price: "Rp. 1.500.000", image: "gbr8.png" }
    ];

    const productGrid = document.getElementById("product-grid");

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.className = "product-item";

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement("h2");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = product.price;

        const productButton = document.createElement("button");
        productButton.textContent = "Add to Cart";

        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        productItem.appendChild(productButton);

        productGrid.appendChild(productItem);
    });
});

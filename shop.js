const products = [
    { img: "Pics/summer-removebg-preview.png", title: "Summer Wear", category: "Men" },
    { img: "Pics/winter-removebg-preview.png", title: "Winter Wear", category: "Men" },
    { img: "Pics/mens-removebg-preview.png", title: "Men's Collection", category: "Men" },
    { img: "Pics/women-removebg-preview.png", title: "Women's Collection", category: "Women" },
    { img: "Pics/traditional-removebg-preview.png", title: "Men's tradional Wear", category: "Men" },
    { img: "Pics/western-removebg-preview.png", title: "Western Wear", category: "Women" },
    { img: "Pics/kids-removebg-preview.png", title: "Kids Collection", category: "Kids" },
    { img: "Pics/traditional_women-removebg-preview.png", title: "Women's traditional Wear", category: "Women" },
    { img: "Pics/kids_clothes-removebg-preview.png", title: "Kid's party Wear ", category: "Kids" },
    { img: "Pics/bags-removebg-preview.png", title: "Accessories", category: "Kids" },
    ]


const grid = document.getElementById("productGrid");
const categoryButtons = document.querySelectorAll(".category-menu button");
let count = 0;
const cartCount = document.getElementById("cart-count");

// Function to display products
function displayProducts(filter = "All") {
    grid.innerHTML = ""; // Clear current grid

    const filtered = filter === "All" 
        ? products 
        : products.filter(p => p.category === filter);

    filtered.forEach(item => {
        grid.innerHTML += `
            <div class="card"> 
                <img src="${item.img}">
                <h3>${item.title}</h3>
                <button class="add-btn">Add to cart</button>
            </div>`;
    });

    // Re-attach event listeners to new buttons
    attachCartEvents();
}

// Function for Cart Logic
function attachCartEvents() {
    const buttons = document.querySelectorAll(".add-btn");
    buttons.forEach(button => {
        button.onclick = () => {
            count++;
            cartCount.textContent = count;
            alert("Item added to cart!");
        };
    });
}

// Category Button Logic
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove active class from all and add to clicked
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Filter products
        const category = button.textContent;
        displayProducts(category);
    });
});

// Initial Load
displayProducts("All");
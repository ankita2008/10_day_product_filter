

    const products = [
      {
        name:"Wireless Headphones",
        category:"Electronics",
        price:"$120",
        image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
      },

      {
        name:"Smart Watch",
        category:"Electronics",
        price:"$90",
        image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
      },

      {
        name:"Denim Jacket",
        category:"Fashion",
        price:"$70",
        image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
      },

      {
        name:"White Sneakers",
        category:"Shoes",
        price:"$60",
        image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
      },

      {
        name:"Running Shoes",
        category:"Shoes",
        price:"$95",
        image:"https://images.unsplash.com/photo-1549298916-b41d501d3772"
      },

      {
        name:"Black T-Shirt",
        category:"Fashion",
        price:"$35",
        image:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
      }
    ];

    const productContainer = document.getElementById("productContainer");
    const searchInput = document.getElementById("searchInput");
    const buttons = document.querySelectorAll(".filter-btn");
    const noProduct = document.getElementById("noProduct");

    let currentCategory = "All";

    // DISPLAY PRODUCTS

    function displayProducts(items){

      productContainer.innerHTML = "";

      if(items.length === 0){
        noProduct.style.display = "block";
      }
      else{
        noProduct.style.display = "none";
      }

      items.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
        
          <img src="${product.image}" alt="${product.name}">

          <div class="card-content">

            <span class="category">${product.category}</span>

            <h3>${product.name}</h3>

            <p>
              Premium quality product with modern design and amazing comfort.
            </p>

            <div class="bottom">

              <div class="price">${product.price}</div>

              <button class="buy-btn">Buy Now</button>

            </div>

          </div>

        `;

        productContainer.appendChild(card);

      });

    }

    // FILTER FUNCTION

    function filterProducts(){

      const searchValue = searchInput.value.toLowerCase();

      const filteredProducts = products.filter(product => {

        const categoryMatch =
          currentCategory === "All" ||
          product.category === currentCategory;

        const searchMatch =
          product.name.toLowerCase().includes(searchValue);

        return categoryMatch && searchMatch;

      });

      displayProducts(filteredProducts);

    }

    // BUTTON FILTER

    buttons.forEach(button => {

      button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        currentCategory = button.dataset.category;

        filterProducts();

      });

    });

    // SEARCH FILTER

    searchInput.addEventListener("input", filterProducts);

    // INITIAL DISPLAY

    displayProducts(products);

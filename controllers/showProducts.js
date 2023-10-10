import { productServices } from "../app.js";

const starWarsContainer = document.querySelector("[data-div-sw]");
const videoGameContainer = document.querySelector("[data-div-vg]");
const geekContainer = document.querySelector("[data-div-geek]");

productServices
    .allProducts()
    .then((data) => {
        data.forEach((product) => {
            let container = "";
            const card = document.createElement("div");
            card.classList.add("main__products__card");
            if (product.category === "Star-Wars") {
                container = starWarsContainer;
            }
            if (product.category === "Video-Game") {
                container = videoGameContainer;
            }
            if (product.category === "Geek") {
                container = geekContainer;
            }

            const cardContent = `
            <div class=icon_position>
                <i class="fa-solid fa-trash-can icon_product" style="color: #FFFFFF;"></i>
                <i class="fa-solid fa-marker icon_product" style="color: #FFFFFF;"></i>
            </div>
            <img class="main__products__card-img" src="${product.picture}" alt="">
            <div class="main__products__card-info">
                <h3 class="main__products__card-title">${product.title}</h3>
                <p class="main__products__card-price">${product.price}</p>
                <a href="" class="main__products__card-link">See Product</a>
            </div>
        `;
            card.innerHTML = cardContent;
            container.appendChild(card);
        });
    })
    .catch((error) => console.log(error));

import getMenu from "./api.js";
import elements from "./helpers.js";
import renderMenu from "./ui.js";


document.addEventListener("DOMContentLoaded", getMenu);

elements.buttons.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
        const selectedCategory = e.target.dataset.category;

        const menu = await getMenu();

        const filtredMenu = menu.filter((item) => item.category == selectedCategory);
        if (selectedCategory === "all") {
            renderMenu(menu);
        } else {
            renderMenu(filtredMenu);
        }


    });
});

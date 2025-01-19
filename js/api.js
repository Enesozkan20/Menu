import renderMenu from "./ui.js";


const getMenu = async () => {
    const res = await fetch("db.json");
    const data = await res.json();
    const menu = data.menu;
    renderMenu(menu);

    return menu;
};

export default getMenu;
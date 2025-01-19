import elements from "./helpers.js";


const renderMenu = (data) => {
  console.log(data);


  let menuHtml = data.map((item) => `
     <div class="card">
        <img src="${item.img}" alt="">
        <div class="card-info">
          <div class="name">
            <h3>${item.title}</h3>
            <p>$${Math.round(item.price * 10)}</p>
          </div>
          <div class="desc">
          ${item.desc}
          </div>
        </div>
      </div>
    `);
  menuHtml = menuHtml.join("");

  elements.menuArea.innerHTML = menuHtml;
};

export default renderMenu;


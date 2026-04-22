function go(page) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });

  document.getElementById(page).classList.add("active");
}

// PRODUTOS FAKE (teste)
const products = [
  {
    name: "Fone Bluetooth",
    price: "R$ 99",
    img: "https://via.placeholder.com/150"
  },
  {
    name: "Carregador",
    price: "R$ 49",
    img: "https://via.placeholder.com/150"
  },
  {
    name: "Capa Celular",
    price: "R$ 29",
    img: "https://via.placeholder.com/150"
  }
];

const list = document.getElementById("productList");

products.forEach(p => {
  list.innerHTML += `
    <div class="product">
      <img src="${p.img}">
      <h4>${p.name}</h4>
      <span>${p.price}</span>
    </div>
  `;
});

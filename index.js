const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const inputEmpty = (number) => {
  return number == ""
}

const exist = (number) => {
return pizzas.some((pizza) => pizza.id == number)
}

const showError = (container, error) => {
  container.innerHTML = error
}

const renderPizza = (container, numberPizza) => {
  pizzas.forEach((pizza) => {
    if (numberPizza == pizza.id) {
      container.innerHTML = `
      <li class="product">
      <div class="container-img">
          <img src="${pizza.imagen}" class="img-product">
      </div>
      <div class="product-text">
          <h2 class="product-name">${pizza.nombre}</h2>
          <p class="product-name">$${pizza.precio}</p>
      </div>
    </li>
    `
    }
  })

}

const searchPizza = () => {
  const numberPizza = document.querySelector(".input-number").value
  const container = document.querySelector(".product-container")
  if (!inputEmpty(numberPizza)) {
    if (exist(numberPizza)) 
    {
      renderPizza(container, numberPizza)
      container.style.display = "flex"
    }
    else
    {
      container.style.display = "flex"
      showError(container, "El ID seleccionado no esta relacionado con ningun producto")
    }
  }
  else {
    container.style.display = "flex"
    showError(container, "Debe ingresar un numero para realizar la busqueda")
  }

  
}


const productContainer = document.querySelector(".product-container")
const form = document.querySelector(".form-container")
const button = document.querySelector(".button-search")
button.addEventListener("click", searchPizza)


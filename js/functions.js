//Seleccion de elementos
//selector por id
const title = document.getElementById("txt")

//selector por clase html
const img = document.getElementsByClassName("header__logo")

//selector por elemnto html
const tags = document.getElementsByTagName("section")

//seleccion por css
const elem = document.querySelector('.products__item')

//Selector por css todos
const elemAll = document.querySelectorAll('.products__item')


//Crear elemento y agregar atributo
const parent = document.querySelector(".products")
const newElem = document.createElement("section")
newElem.setAttribute("class", "new")
parent.append(newElem)



//Attributes
const logo = document.querySelector('.header__logo')
//logo.setAttribute('src', "img/mexico.jpg")
logo.getAttribute('src')
//console.log("logo.getAttribute('src'): ", logo.getAttribute('src'));
//console.log(logo.hasAttribute('src'));

//logo.removeAttribute('src')

/* if (logo.hasAttribute('src')) {
    alert('tiene src')
} */

//Clases css
const parent2 = document.querySelector('.products')
const parent3 = parent2.firstElementChild
const price = parent3.lastElementChild
price.classList.add('red')
price.classList.replace("red", 'blue')

price.classList.remove('red')


//Modificar Texto

const button = document.getElementsByTagName('button')
//console.log(button[0].innerText);

//button[0].innerText = 'BUY'

//modificar styles

//console.log("button[0].style: ", button[0].style);
//button[0].style.backgroundColor = 'gray'

//eventos
//const elementButton = button[0]
//
//elementButton.addEventListener('click', () => {
//    elementButton.classList.toggle('toggle')
//})

const iconRemove = document.querySelectorAll('.cart__icon')
console.log("iconRemove: ", iconRemove);

iconRemove.forEach(elem => {
    elem.addEventListener("click", () => {
        const elemParem = elem.parentElement
        elemParem.remove()
    })
})

const header = document.querySelector('header')
const cartIcon = header.lastElementChild
const menuIcon = header.firstElementChild
const cart = document.querySelector('.cart')
const menu = document.querySelector('.menu__tg')
let closeBtn = document.querySelector('.menu__tg__x')

cartIcon.addEventListener('click', () => {
    cart.classList.toggle('show')
})

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show')
})

closeBtn.addEventListener('click', () => {
    menu.classList.contains('show')
    menu.classList.toggle('show')
})


const btn_comprar = document.getElementById('btn__comprar')
console.log("btn_comprar: ", btn_comprar);
btn_comprar.disabled = true
btn_comprar.style.backgroundColor = '#d3d1d1'
let contador = 0
const productoCart = document.querySelectorAll('.products__btn')
productoCart.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.products__item')

        const addCart = document.querySelector('.cart')
        const newElem = document.createElement("section")
        newElem.classList.add('cart__item')
        const imgElem = document.createElement('img')
        imgElem.classList.add('cart__img')
        imgElem.setAttribute('src', product.querySelector('.products__img').getAttribute('src'));
        imgElem.setAttribute('alt', product.querySelector('.products__img').getAttribute('alt'));
        const nameElem = document.createElement('p')
        nameElem.classList.add('cart__name')
        nameElem.textContent = product.querySelector('.products__name').textContent;
        const priceElem = document.createElement('p')
        priceElem.textContent = product.querySelector('.products__price').textContent;
        const iconElem = document.createElement('i')
        iconElem.classList.add('cart__icon')
        const imgIconElem = document.createElement('img')
        imgIconElem.classList.add('delete-icon')
        imgIconElem.setAttribute('src', './img/trash.webp')
        imgIconElem.setAttribute('alt', 'Icono quitar')

        iconElem.appendChild(imgIconElem)
        newElem.appendChild(imgElem)
        newElem.appendChild(nameElem)
        newElem.appendChild(priceElem)
        newElem.appendChild(iconElem)

        const children = Array.from(addCart.children);
        const penultimateChild = children[children.length - 1];
        addCart.insertBefore(newElem, penultimateChild);

        contador++

        const badge = document.querySelector('.badge')

        const iconRemove = document.querySelectorAll('.cart__icon')
        const itemsCart = document.querySelectorAll('.cart__item')
        const arrayElementos = Array.from(itemsCart);


        iconRemove.forEach(elem => {
            elem.addEventListener("click", () => {
                const elemParem = elem.parentElement
                elemParem.remove()
                const itemsCart2 = document.querySelectorAll('.cart__item')
                badge.textContent = itemsCart2.length
                if (badge.textContent < 1) {
                    btn_comprar.disabled = true
                    btn_comprar.style.backgroundColor = '#d3d1d1'
                }
            })
        })

        badge.textContent = arrayElementos.length
        console.log("badge.textContent: ", badge.textContent);
        if (badge.textContent > 0) {
            btn_comprar.disabled = false
            btn_comprar.style.backgroundColor = '#333'
        }
    })
})




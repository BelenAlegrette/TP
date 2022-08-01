const Clickbutton=document.querySelectorAll('.button')

let cantidad=0;
let total=0;

Clickbutton.forEach(btn=>{
   btn.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e){
    const button= e.target
    const item= button.closest('.card')
    const itemTitle= item.querySelector('.card-title').textContent;
    const itemPrice= item.querySelector('.precio').textContent;
    const itemImg= item.querySelector('.card-img-top').src;

    cantidad = cantidad +1;
    let precio = parseInt(itemPrice);
    total = total + precio;
    alert(`${itemTitle} ha sido añadido/a al carrito. Valor $${itemPrice}        TOTAL $${total}`);

    document.getElementById('cantidad').innerHTML = cantidad;

 const newItem={
        title:itemTitle,
        precio:itemPrice,
        img:itemImg,
        cantidad:1
    }

 addItemCarrito(newItem)
}

function addItemCarrito(newItem){

    carrito.push(newItem)
    renderCarrito()
}
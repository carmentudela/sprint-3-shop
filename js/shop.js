// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [{
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for (let i = 0; i < products.length; i++) {
        if (id === this.products[i].id) {
            cartList.push(products[i]);

        } //if
    } //for
    console.log(cartList);
}
// Exercise 2
function cleanCart() {
    cartList.splice(0);
    // console.log(cartList);
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array

    //---------FUNCIÓN (NIVEL 1) CALCULA PRECIO TOTAL DE CARLIST---------------------------
    /* let precioTotal = 0;
    // for (let i = 0; i < cartList.length; i++) {
    //     precioTotal = this.cartList[i].price + precioTotal;
    // } //for
    // return precioTotal*/

    //--------------FUNCIÓN REFACTORIZADA (NIVEL 2) CALCULA PRECIO TOTAL ARRAY CART----------------------------

    applyPromotionsCart(); //aplica la función para calcular descuentos estableciendo el value de subtotalWithDiscount 
    cart.forEach((producto) => { //por cada producto en cart 

        if (producto.id === 1 && producto.quantity >= 3) { //si el producto es id1 y la cantidad es 3 o más  tiene promoción de descuento
            producto.subtotal = producto.subtotalWithDiscount; // modifica el subtotal para que sea el subtotal con descuento aplicado

        } else if (producto.id === 3 && producto.quantity >= 10) { //si el producto es id3 también tiene descuento
            producto.subtotal = producto.subtotalWithDiscount; // modifica el subtotal para que sea el subtotal con descuento aplicado

        } //cierra else if
    }) //cierra forEach

    let precioTotal = cart.reduce((prev, next) => prev + next.subtotal, 0); //precio total resultante de la suma de todos los subtotals con descuentos aplicados.
    // console.log(precioTotal);
    return precioTotal;
}



// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart,
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    cartList.forEach((producto) => {
            if (cart.filter(item => item.id === producto.id).length > 0) { //si el array resultante de filter es > que 0,el producto ya está en el cart
                cart.forEach(elemento => { //por cada producto en cart repetido 
                    if (elemento.name === producto.name) { //si coincide el nombre
                        elemento.quantity += 1; //suma 1 a la cantidad que ya tiene
                        elemento.subtotal = producto.price * elemento.quantity; // establece el subtotal
                    }
                })

            } else {
                producto.quantity = 1;
                producto.subtotal = producto.price * producto.quantity;
                cart.push(producto);
            }
        }

    )
    // console.log(cart);
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    cart.forEach((producto) => { //por cada producto en cart
        if (producto.id === 1 && producto.quantity >= 3) { //si el id=1 (aceite) y la cantidad es de tres o más unidades.
            producto.subtotalWithDiscount = (producto.price - 0.5) * producto.quantity; //establece subtotalWithDiscount 
        } else if (producto.id === 3 && producto.quantity >= 10) {
            producto.subtotalWithDiscount = (producto.price * (2 / 3)) * producto.quantity;
        }
    })
    // console.log(cart);
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    products.forEach(producto => { //por cada producto 
        if (producto.id === id) {
            if (cart.filter(item => item.id === producto.id).length > 0) { //si el array resultante de filter es > que 0,el producto ya está en el cart
                cart.forEach(elemento => { //por cada producto en cart repetido 
                    if (elemento.name === producto.name) { //si coincide el nombre
                        elemento.quantity += 1; //suma 1 a la cantidad que ya tiene
                        elemento.subtotal = producto.price * elemento.quantity; // establece el subtotal
                    } //cierra if
                }) //cierra forEach

            } else { // si el producto no está en el array cart, lo añade estableciendo quantity a 1.
                producto.quantity = 1;
                producto.subtotal = producto.price * producto.quantity;
                cart.push(producto);
            } //cierra else
        } //cierra if
    }) //cierra forEach
    console.log(cart);
}
// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    products.forEach(producto => { //por cada producto
        if (producto.id === id) {
            if (cart.filter(item => item.id === producto.id).length > 0) { // si el array de filter es >0, el producto ya está en el cart
                cart.forEach(elemento => { // por cada producto repetido en cart
                    if (elemento.name === producto.name) { //si coincide con el nombre
                        if (elemento.quantity > 1) { //si la cantidad es mayor que una unidad
                            elemento.quantity -= 1; //resta uno a la cantidad
                        } //cierra if
                        else { //si la cantidad es uno
                            var index = cart.indexOf(elemento); //encuentra el índice del producto en el array cart
                            if (index > -1) {
                                cart.splice(index, 1) // elimina el producto del array 
                            }
                        } //cierra else

                    } //cierra if
                }) //cierra forEach
            } //cierra if
        } //cierra if
    }) //cierra forEach
}



// Exercise 9
function printCart(id) {
    // Fill the shopping cart modal manipulating the shopping cart dom
    const lista = document.querySelector('.list'); //acceder a la lista
    lista.innerHTML = '';

    const fragment = document.createDocumentFragment(); //crea fragment

    //----------OCULTA MENSAJE CUANDO HAY PRODUCTOS EN  EL CARRO -------------------------------------------------------------------------------------
    var mensaje = document.querySelector('h3'); //mensaje de 'select something'.
    const ocultarMensaje = () => { //elimina el mensaje 
        if (cart.length > 0) {
            mensaje.style.display = 'none';


        }
    }
    //---------------------------------------------------------------------------------------------------------------------------------------------
    ocultarMensaje();
    applyPromotionsCart();
    calculateTotal();
    muestraCarro();
    muestraTotales();
    //----------------------------------ESTABLECE SUBTOTAL CON DESCUENTOS---------------------------------------------------------------------------
    cart.forEach((producto) => { //por cada producto en cart 

        if (producto.id === 1 && producto.quantity >= 3) { //si el producto es id1 y la cantidad es 3 o más  tiene promoción de descuento
            producto.subtotal = producto.subtotalWithDiscount; // modifica el subtotal para que sea el subtotal con descuento aplicado

        } else if (producto.id === 3 && producto.quantity >= 10) { //si el producto es id3 también tiene descuento
            producto.subtotal = producto.subtotalWithDiscount; // modifica el subtotal para que sea el subtotal con descuento aplicado

        } //cierra else if
    })
    //----------------------------------BOTÓN DE VACIAR CARRO----------------------------------------------------------------------------------------
    const botonVaciar = document.querySelector('.botonVaciar');
    botonVaciar.addEventListener('click', () => {

        cart.splice(0);
        lista.innerHTML = '';
        mensaje.style.display = 'block';


    });
    //---------------------------------FUNCIÓN BOTÓN DE RESTAR UNIDADES DEL CARRO--------------------------------------------------------------------


    //---------------------------------------FUNCIÓN PARA MOSTRAR LOS TOTALES DEL CARRO----------------------------------------------------------------
    function muestraTotales() {

        const li1 = document.createElement("li1"); //crea elemento li por cada producto en el array cart
        const tablaTotales = document.createElement('table1'); //crea elemento tabla
        tablaTotales.classList.add("tableTotals"); //añade clase al elemento
        const filaTotales = document.createElement('tr'); //crea fila
        filaTotales.classList.add('tr');
        const nombreTotales = document.createElement('td');
        nombreTotales.innerHTML = 'Importe total';
        const preciosTotales = document.createElement('td');
        preciosTotales.innerHTML = calculateTotal();
        const vaciar = document.createElement('td');
        vaciar.classList.add('btn-danger');
        vaciar.type = 'button';
        vaciar.classList.add('botonVaciar');
        vaciar.innerHTML = 'vaciar carro';




        fragment.appendChild(nombreTotales);
        fragment.appendChild(preciosTotales);
        fragment.appendChild(vaciar);
        fragment.appendChild(filaTotales);
        fragment.appendChild(tablaTotales);
        fragment.appendChild(li1);


        lista.appendChild(fragment);
    }

    //------------------------------------------------------FUNCIÓN PARA MOSTRAR EL CARRO ----------------------------------------------------------------
    function muestraCarro() {
        cart.forEach((producto) => {
            if (producto.id === id) {
                if (cart.filter(item => item.id === producto.id).length > 0) { //si el array resultante de filter es > que 0,el producto ya está en el cart
                    cart.forEach(elemento => {
                        if (elemento.name === producto.name) { //si coincide el nombre
                            elemento.quantity += 1; //aumenta la cantidad
                        } //cierra if
                    }) //cierra forEach 
                } //cierra if
                else {
                    elemento.quantity = 1;
                }
            }

            const li = document.createElement("li"); //crea elemento li por cada producto en el array cart
            const tabla = document.createElement('table'); //crea elemento tabla
            tabla.classList.add("table"); //añade clase al elemento
            const fila = document.createElement('tr'); //crea fila
            fila.classList.add('tr'); //añade la clase a la fila
            const nombre = document.createElement('td'); //crea celda 
            nombre.textContent = producto.name; //añade nombre producto  a la celda
            const cantidad = document.createElement('td'); //crea celda
            cantidad.textContent = producto.quantity; //añade cantidad de producto 
            const precio = document.createElement('td'); //crea celda
            precio.textContent = producto.price; // añade precio producto
            const subtotal = document.createElement('td'); //crea celda
            subtotal.textContent = producto.subtotal; //añade subtotal
            const botonRestar = document.createElement('td'); //crea celda
            botonRestar.classList.add('btn-danger'); //añade la clase 
            botonRestar.classList.add('restar');
            botonRestar.textContent = '-'; //añade contenido 
            botonRestar.setAttribute.id = producto.id;

            botonRestar.addEventListener('click', () => {

                if (producto.quantity > 1) {

                    producto.quantity--;
                    cantidad.textContent = producto.quantity;
                    subtotal.textContent = producto.price * producto.quantity;
                    producto.subtotal = producto.price * producto.quantity;
                    calculateTotal();

                } else { //si la cantidad es uno
                    var index = cart.indexOf(producto); //encuentra el índice del producto en el array cart
                    if (index > -1) {
                        cart.splice(index, 1) // elimina el producto del array 
                    }
                } //cierra else

            })
            muestraCarro

            fragment.appendChild(nombre);
            fragment.appendChild(cantidad);
            fragment.appendChild(precio);
            fragment.appendChild(subtotal);
            fragment.appendChild(botonRestar);
            fragment.appendChild(fila);
            fragment.appendChild(tabla);
            fragment.appendChild(li); //incorpora al fragment
            lista.appendChild(fragment); //incorpora a la lista
        });
    }






}
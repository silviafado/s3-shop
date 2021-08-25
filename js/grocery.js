// Exercise 11
// Move this variable to a json file and load the data in this js
var products = [
    {
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
var cartList = [];
var cart = [];
var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
function addToCartList(id) {
    // 1. Loop for to the array products to get the item to add to cart
    for (let i=0; i < products.length; i++) {
        if ( products.indexOf(products[i]) + 1 === id) {
            console.log(id);
            addItem(i);         
        }
    }
    // 2. Add found product to the cartList array
    function addItem(i) {
        const item = {
            name: products[i].name,
            price: products[i].price,
            type: products[i].type,
            count: 1,
        }    
        console.log(item);
        for (var x in cartList) {
            if (cartList[x].name === item.name) {
                cartList[x].count ++;
            } 
        }    
        cartList.push(item);
        console.log(cartList);
    }
    // Print on the console the subtotals after adding a product
    calculateSubtotals();
}

// Exercise 2
function cleanCart() {
    cartList.length = 0;
    console.log(cartList);
}

// Exercise 3
function calculateSubtotals() {
    let subtotalGrocery = subtotal.grocery.value;
    let subtotalBeauty = subtotal.beauty.value;
    let subtotalClothes = subtotal.clothes.value;
    // 1. Create a for loop on the "cartList" array 
    for (let i=0; i < cartList.length; i++) {
        let price = cartList[i].price;
        // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
        if (cartList[i].type === 'grocery') {
            subtotalGrocery += price;           
        } else if (cartList[i].type === 'beauty') {
            subtotalBeauty += price;           
        } else {
            subtotalClothes += price;           
        } 
    }    
    console.log(subtotalGrocery);
    console.log(subtotalBeauty);
    console.log(subtotalClothes);
    let totalArray = [subtotalGrocery, subtotalBeauty, subtotalClothes];
    calculateTotal(totalArray);
}

// Exercise 4
function calculateTotal(totalArray) {
    // Calculate total price of the cart either using the "cartList" array
    let sumTotal = total;
    for (let x in totalArray) {
        sumTotal += totalArray[x];
    }
    console.log(sumTotal);
    applyPromotionsSubtotals(sumTotal);
}

// Exercise 5
function applyPromotionsSubtotals(sumTotal) {
    // Loop to check cooking oil quantity and apply the discounted price
    for (let i in cartList) {
        if (cartList[i].name === 'cooking oil' && cartList[i].count > 3) {
            let oilDiscount = cartList[i].count * 0.5;
            sumTotal -= oilDiscount;
            console.log('Total price with cooking oil discount '+sumTotal);
            return;
        } else if (cartList[i].name === 'Instant cupcake mixture' && cartList[i].count > 10) {
            let mixDiscount = (cartList[i].price/3) * cartList[i].count;
            sumTotal -= mixDiscount;
            console.log('Total price with cupcake ixture discount '+sumTotal);
            return;
        }
    }  
}



// Exercise 6
function generateCart(name, price, type, count, subtotal) { 
    for(let i in cartList) {
        let cartItem = function (name, price, type, count, subtotal) {
            this.name = name = cartList[i].name
            this.price = price = cartList[i].price
            this.type = type = cartList[i].type
            this.count = count = cartList[i].count
            this.subtotal = subtotal = cartList[i].price * cartList[i].count
            
        }; 
        let item = new cartItem(name, price, type, count, subtotal);
        for(let j in cart) {
            if(cart[j].name === item.name) {           
                cart[j].quantity = cart[j].count;
                console.log('hola'+ cart[j].quantity);
            }      
        }  
        console.log(item);
        cart.push(item);  
    }
    console.log(cart);  
    const objects = cart;
    const result = objects.filter(object => object.count < 2);
    console.log(result);
}





// Exercise 7
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 8
function addToCart(id) {
    addToCartList(id);
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
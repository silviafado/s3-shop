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
// Function to apply the discounts
function applyPromotionsSubtotals(sumTotal) {
    // Loop to check cooking oil quantity and apply the discounted price
    for (let i in cartList) {
        if (cartList[i].name === 'cooking oil' && cartList[i].count > 3) {
            const oilDiscount = cartList[i].count * 0.5;
            sumTotal -= oilDiscount;
            console.log('Total price with cooking oil discount '+sumTotal);
            return oilDiscount;
        } else if (cartList[i].name === 'Instant cupcake mixture' && cartList[i].count > 10) {
            const mixDiscount = (cartList[i].price/3) * cartList[i].count;
            sumTotal -= mixDiscount;
            console.log('Total price with cupcake mixture discount '+sumTotal);
            return mixDiscount;
        }
    }  
}

// Exercise 6
function generateCart() { 
    // Clean cart to calculate each time we add a new product
    cart.length = 0;
    // Loop cartList array to remove repeated products
    cart.push(cartList[0]);
    let currentName = cartList[0].name;
    let max = cartList[0].count;
    let maxItem = cartList[0];
    for(let i=1; i < cartList.length; i++){
        if (currentName != cartList[i].name){
            max = cartList[i].count;
            currentName = cartList[i].name;
            maxItem = cartList[i];
            cart.push(maxItem);
        } else if (currentName === cartList[i].name) {
            if (cartList[i].count > max) {
                currentName = cartList[i].name;
                maxItem = cartList[i];
                cart.push(maxItem);
            }
        }
    }  
    // Add new properties to the array cart
    for(let i in cart) {
        cart[i].subtotal = cart[i].price * cart[i].count;
        cart[i].subtotalWithDiscount = cart[i].subtotal;   
    }
    console.log(cart);
}

// Exercise 7
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for(let i in cart) { 
        if(cart[i].name === 'cooking oil') {
            oilDiscount2 = applyPromotionsSubtotals();
            cart[i].subtotalWithDiscount -= oilDiscount2;
        } else if(cart[i].name === 'Instant cupcake mixture') {    
            mixDiscount2 = applyPromotionsSubtotals();
            cart[i].subtotalWithDiscount -= mixDiscount2;
        } 
    }       
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
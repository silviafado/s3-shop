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
    for (let i = 0; i < products.length; i++) {
        if (products.indexOf(products[i]) + 1 === id) {
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
                cartList[x].count++;
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
    let subtotalGrocery = 0;
    let subtotalBeauty = 0;
    let subtotalClothes = 0;
    // 1. Create a for loop on the "cartList" array 
    for (let i = 0; i < cartList.length; i++) {
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
    let totalArray = [subtotalGrocery, subtotalBeauty, subtotalClothes];
    subtotal.grocery.value = subtotalGrocery;
    subtotal.beauty.value = subtotalBeauty;
    subtotal.clothes.value = subtotalClothes;
    console.log(subtotal);
    calculateTotal(totalArray);
}

// Exercise 4
function calculateTotal(totalArray) {
    // Calculate total price of the cart either using the "cartList" array
    let sumTotal = 0 - subtotal.grocery.discount;
    for (let x in totalArray) {
        sumTotal += totalArray[x];
    }
    total = sumTotal;
    console.log(total);
}

// Exercise 5
// Function to apply the discounts
function applyPromotionsSubtotals() {
    // Loop to check cooking oil quantity and apply the discounted price
    for (let i in cartList) {
        if (cartList[i].name === 'cooking oil' && cartList[i].count > 3) {
            const oilDiscount = cartList[i].count * 0.5;
            total -= oilDiscount;
            subtotal.grocery.discount = oilDiscount;
            console.log('Total with cooking oil discount ' + total);
            return;
        }
    }
    for (let i in cartList) {
        if (cartList[i].name === 'Instant cupcake mixture' && cartList[i].count > 10) {
            const mixDiscount = (cartList[i].price / 3) * cartList[i].count;
            total -= mixDiscount;
            subtotal.grocery.discount += mixDiscount;
            console.log('Total with cupcake mixture discount ' + total);
            return;
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
    for (let i = 1; i < cartList.length; i++) {
        if (currentName != cartList[i].name) {
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
    for (let i in cart) {
        cart[i].subtotal = cart[i].price * cart[i].count;
        cart[i].subtotalWithDiscount = cart[i].subtotal /* - subtotal.grocery.discount; */  // Now is calculated on next function applyPromotionsCart()
    }
    console.log(cart);
    applyPromotionsCart();
    console.log('Total with discounts applied ' + total);
}

// Exercise 7
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i in cart) {
        if (cart[i].name === 'cooking oil' && cart[i].count > 3) {
            const oilDiscount = cart[i].count * 0.5;
            cart[i].subtotalWithDiscount -= oilDiscount;
            subtotal.grocery.discount = oilDiscount;
            console.log('Cooking oil subtotal discounted ' + cart[i].subtotalWithDiscount);
        } else if (cart[i].name === 'Instant cupcake mixture' && cart[i].count > 10) {
            const mixDiscount = (cart[i].price / 3) * cart[i].count;
            cart[i].subtotalWithDiscount -= mixDiscount;
            subtotal.grocery.discount += mixDiscount;
            console.log('Cupcake mixture subtotal discounted ' + cart[i].subtotalWithDiscount);
        }
    }
    total -= subtotal.grocery.discount;
}

// Exercise 8
function addToCart(id) {
    // Redirecting to addToCartList() function for previous exercises
    /* addToCartList(id); */

    // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < products.length; i++) {
        if (products.indexOf(products[i]) + 1 === id) {
            console.log(id);
            addItem(i);
        }
    }
    // 2. Add found product to the cart array
    function addItem(i) {
        const item = {
            name: products[i].name,
            price: products[i].price,
            type: products[i].type,
            count: 1,
        }
        console.log(item);
        // Push the first item into the cart
        if (cart.length === 0) {
            cart.push(item);
            console.log(cart);
        } else {
            // Once we have 1 item in the cart, loop for the cart to check if the product is already in the array
            for (let i = 0; i < cart.length; i++) {
                if (item.name === cart[i].name) {
                    cart[i].count++;
                    console.log('1 Estic aqui ' + item.name);
                    result = true;
                    return result;
                }
            }
            // After checking all the array, if the product is not in the cart push the item inside
            for (let i = 0; i < cart.length; i++) {
                if (item.name !== cart[i].name) {
                    cart.push(item);
                    console.log('2 Estic aqui ' + item.name);
                    return;
                }
            }
        }
    }
    // 3. Add new properties to the array cart objects
    for (let i in cart) {
        cart[i].subtotal = cart[i].price * cart[i].count;
        cart[i].subtotalWithDiscount = cart[i].subtotal;
    }
    console.log(cart);
    // 4. Print the total when adding a product
    total = 0;
    for (let i in cart) {
        total += cart[i].subtotal;
    }
    console.log(total);
    // 5. Call the promotions function to calculate final price with discounts
    applyPromotionsCart();
    console.log('Total with discounts applied ' + total);
}

// Exercise 10
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to remove from cart
    for (let i = 0; i < products.length; i++) {
        if (products.indexOf(products[i]) + 1 === id) {
            removeItem(i);
        }
    }
    // 2. Remove found product from the cart array
    function removeItem(i) {
        for (var x in cart) {
            if (cart[x].name === products[i].name) {
                if (cart[x].count === 1) {
                    cart.splice(x, 1);
                } else if (cart[x].count > 1) {
                    cart[x].count--;
                }
            }
        }
        console.log(cart);
    }
}


// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
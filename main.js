if (document.readyState == 'loading') {
    document.addEventListener('DOMCOntentLoaded', ready);
} else {
    ready();
}

function ready() {
    const removeItemBtn = document.getElementsByClassName('closeSign');
    for (let i = 0; i < removeItemBtn.length; i++){
    const button = removeItemBtn[i];
    button.addEventListener('click', removeItem);
    }
}

function removeItem(event) {
    const clickedBtn = event.target;
    clickedBtn.parentElement.parentElement.parentElement.remove();
    updateCartTotal();
}
      

function updateCartTotal() {
    const cartItemsContainer = document.getElementsByClassName('cart')[0];
    const cartRows = document.getElementsByClassName('cart-item');
    let subTotal = 0;
    for (let i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i];
        const cartElement = cartRow.getElementsByClassName('cart-price')[0]; // This is the only one in cartRow. So this would be [0]
        const quantityElement = cartRow.getElementsByClassName('quantityItem')[0];
        const price = parseFloat(cartElement.innerText);
        console.log(price)
        const quantity = quantityElement.value;
        subTotal = subTotal + (price * quantity)
        console.log(subTotal)
    }
    // document.getElementById('subTotal').innerText = subTotal;
}



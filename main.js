if (document.readyState == 'loading') {
    document.addEventListener('DOMCOntentLoaded', ready);
} else {
    ready();
}

function ready() {
    // Remove item
    const removeItemBtn = document.getElementsByClassName('closeSign');
    for (let i = 0; i < removeItemBtn.length; i++){
    const button = removeItemBtn[i];
    button.addEventListener('click', removeItem);
    }

    // Increase quantity
    const plusSigns = document.getElementsByClassName('plusSign');
    for (let i = 0; i < plusSigns.length; i++) {
        const plusSign = plusSigns[i];
        plusSign.addEventListener('click', increaseItem);
    }

}

function increaseItem(event) {
    const quantityItems = document.getElementsByClassName('quantityItem');
    for (let i = 0; i < quantityItems.length; i++) {
        const quantityItem = quantityItems[i];
        // console.log(quantityItem.value)
        const quantityCount = parseInt(quantityItem.value);
        const quantityNewCount = quantityCount + 1;
        quantityItem.value = quantityNewCount;
        console.log(parseFloat(quantityNewCount))
        // console.log(event.target.parentElement.parentElement)
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
        // console.log(price)
        const quantity = parseInt(quantityElement.value);
        subTotal = subTotal + (price * quantity);
        // console.log(subTotal)
        document.getElementById('subTotal').innerText = subTotal;
    }
    
}





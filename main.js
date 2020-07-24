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



    //   // First item adding
    //   const plusSignFirst = document.getElementById('plusSignFirst');
    //   plusSignFirst.addEventListener('click', function () {
    //      addItem('qtyFirstItem', 'priceFirstItem', 1219);
    //   })

    //   // First item reducing
    //   const minusSignFirst = document.getElementById('minusSignFirst');
    //   minusSignFirst.addEventListener('click', function () {
    //      minusItem('qtyFirstItem', 'priceFirstItem', 1219);
    //   })

    //   // Second item adding
    //   const plusSignSecond = document.getElementById('plusSignSecond');
    //   plusSignSecond.addEventListener('click', function () {
    //      addItem('qtySecondItem', 'priceSecondItem', 59);
    //   })

    //   // Second item reducing
    //   const minusSignSecond = document.getElementById('minusSignSecond');
    //   minusSignSecond.addEventListener('click', function () {
    //      minusItem('qtySecondItem', 'priceSecondItem', 59);
    //   })

    //   // Remove cart
    //   // document.getElementById('cart').addEventListener('click', function (event) {
    //   //    console.log(event.target.parentNode.removeChild(event.target.parentNode))
    //   // });


    //   // Function for adding items
    //   function addItem(quantityItem, priceItem, unitPrice) {
    //      // Adding qty number
    //      const qtyItem = document.getElementById(quantityItem).value;
    //      const itemValue = parseFloat(qtyItem);
    //      document.getElementById(quantityItem).value = itemValue + 1;

    //      // Quantity number calculated to the price
    //      const priceFirstItem = document.getElementById(priceItem).innerText;
    //      const priceValue = parseFloat(priceFirstItem);
    //      const totalPrice = priceValue + unitPrice;
    //      document.getElementById(priceItem).innerText = totalPrice;

    //      // Adding price to total
    //      const subTotalCurrentValue = document.getElementById('subTotal').innerText;
    //      const subTotalCurrentNum = parseFloat(subTotalCurrentValue);
    //      const subTotalUpdate = document.getElementById('subTotal').innerText = subTotalCurrentNum + unitPrice;
    //      console.log(subTotalCurrentValue)
    //      console.log(subTotalCurrentNum)
    //   }

    //   // Function for reducing items
    //   function minusItem(quantityItem, priceItem, unitPrice) {
    //      // Reducing qty number
    //      const qtyItem = document.getElementById(quantityItem).value;
    //      const itemValue = parseFloat(qtyItem);
    //      if (itemValue < 1) return 1;

    //      document.getElementById(quantityItem).value = itemValue - 1;

    //      // Quantity number calculated to the price
    //      const priceFirstItem = document.getElementById(priceItem).innerText;
    //      const priceValue = parseFloat(priceFirstItem);
    //      const totalPrice = priceValue - unitPrice
    //      document.getElementById(priceItem).innerText = totalPrice;

    //      // Reducing price to total
    //      const subTotalCurrentValue = document.getElementById('subTotal').innerText;
    //      const subTotalCurrentNum = parseFloat(subTotalCurrentValue);
    //      const subTotalUpdate = document.getElementById('subTotal').innerText = subTotalCurrentNum - unitPrice;

    //   }

$('.table tbody tr').click(function (event) {
    if (event.target.type !== 'radio') {
        $(':radio', this).trigger('click');
    }
});

function formatCurrency(n) {
    return n.toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, '$1.');
}


function updateCartTotal() {
    let cartItemsContainer = document.getElementsByClassName('cart-item-container')
    let total = 0
    for (let i = 0; i < cartItemsContainer.length; i++) {
        let cartRow = cartItemsContainer[i]
        let priceElement = cartRow.getElementsByClassName('cart-item-pricing-info__sub')[0]
        let price = parseFloat(priceElement.innerText.split('đ')[0])
        console.log(price)
        total = total + price
    }

    document.getElementsByClassName('total_price_item')[0].innerText = formatCurrency(total) + " đ"

    document.getElementsByClassName('total_price')[0].innerText = formatCurrency(total) + " đ"
}

updateCartTotal()
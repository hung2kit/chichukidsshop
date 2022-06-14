quantityChanged()
updateCartTotal()


function quantityChanged() {
    let increamentButton = document.getElementsByClassName('inc_btn')
    let decreamentButton = document.getElementsByClassName('dec_btn')
    for (let i = 0; i < increamentButton.length; i++) {
        let button = increamentButton[i]
        button.addEventListener('click', function (event) {
            let buttonClicked = event.target
            let input = buttonClicked.parentElement.parentElement.parentElement.children[1]
            if (input) {
                let priceElement = document.getElementsByClassName('cart-item-container')[i].children[3]
                let price = parseFloat(priceElement.innerText.split(' đ')[0])
                let currentInput = parseInt(input.innerText)
                let newValue = currentInput + 1
                input.innerText = newValue
                let newPrice = formatCurrency(newValue * price) + " đ"
                document.getElementsByClassName('cart-item-pricing-info__sub')[i].innerText = newPrice
                updateCartTotal()
            }
        })
    }
    for (let i = 0; i < decreamentButton.length; i++) {
        let button = decreamentButton[i]
        button.addEventListener('click', function (event) {
            let buttonClicked = event.target
            let input = buttonClicked.parentElement.parentElement.parentElement.children[1]
            if (input) {
                let priceElement = document.getElementsByClassName('cart-item-container')[i].children[3]
                let price = parseFloat(priceElement.innerText.split(' đ')[0])

                let currentInput = input.innerText
                let newValue = parseInt(currentInput) - 1

                if (newValue >= 1) {
                    input.innerText = newValue
                    let newPrice = formatCurrency(newValue * price) + " đ"
                    document.getElementsByClassName('cart-item-pricing-info__sub')[i].innerText = newPrice
                } else {
                    input.innerText = 1
                }
                updateCartTotal()
            }

        })
    }

}


function removeCartItemButton() {
    let removeCart = document.getElementsByClassName('cart-item-action-delete')
    for (let i = 0; i < removeCart.length; i++) {
        let button = removeCart[i]
        button.addEventListener('click', function (event) {
            let buttonClicked = event.target
            buttonClicked.parentElement.parentElement.parentElement.remove()
            updateCartTotal()
            quantityChanged()
        })
    }

}

function formatCurrency(n) {
    return n.toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, '$1.');
}

function updateCartTotal() {
    let cartItemsContainer = document.getElementsByClassName('cart-items')[0]
    let cartRows = cartItemsContainer.getElementsByClassName('cart-item-container')
    let total = 0
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-item-pricing')[0]
        let quantityElement = cartRow.getElementsByClassName('quantity_value')[0]

        let price = parseFloat(priceElement.innerText.split('đ')[0])
        let quanity = parseInt(quantityElement.innerText)
        total = total + (price * quanity)

    }
    document.getElementsByClassName('total_price_item')[0].innerText = formatCurrency(total) + " đ"

    document.getElementsByClassName('total_price')[0].innerText = formatCurrency(total) + " đ"
}



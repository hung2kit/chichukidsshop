function selectSizeOptionButton(id) {
    $('.size_option').click(function(e) {
        $('.size_option').removeClass('selected-option');
        $(this).addClass('selected-option');
      });      
}

function selectColorOptionButton(id) {
    $('.color_option').click(function(e) {
        $('.color_option').removeClass('selected-option');
        $(this).addClass('selected-option');
      });      
}

function quantityChanged() {
    let increamentButton = document.getElementsByClassName('inc_btn')
    let decreamentButton = document.getElementsByClassName('dec_btn')
    for (let i = 0; i < increamentButton.length; i++) {
        let button = increamentButton[i]
        button.addEventListener('click', function (event) {
            let buttonClicked = event.target
            let input = buttonClicked.parentElement.parentElement.parentElement.children[1]
            if (input) {
                let currentInput = parseInt(input.innerText)
                let newValue = currentInput + 1
                input.innerText = newValue
            }
        })
    }
    for (let i = 0; i < decreamentButton.length; i++) {
        let button = decreamentButton[i]
        button.addEventListener('click', function (event) {
            let buttonClicked = event.target
            let input = buttonClicked.parentElement.parentElement.parentElement.children[1]
            if (input) {
                let currentInput = input.innerText
                let newValue = parseInt(currentInput) - 1
                if (newValue >= 1) {
                    input.innerText = newValue
                } else {
                    input.innerText = 1
                }
            }
        })
    }

}

selectColorOptionButton()
selectSizeOptionButton()
quantityChanged()
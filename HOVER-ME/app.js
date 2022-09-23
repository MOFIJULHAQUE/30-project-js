function hover() {
    document.querySelector('.btn').style.color = 'black'
    document.querySelector('.first').style.left = '0px'
    document.querySelector('.fourth').style.left = '0px'
    document.querySelector('.second').style.left = '0px'
    document.querySelector('.second').style.top = '0px'
    document.querySelector('.third').style.left = '0px'
    document.querySelector('.third').style.top = '0px'
}

function not() {
    document.querySelector('.btn').style.color = 'yellow'
    document.querySelector('.first').style.left = '160px'
    document.querySelector('.fourth').style.left = '-160px'
    document.querySelector('.second').style.left = '40px'
    document.querySelector('.second').style.top = ' 55px'
    document.querySelector('.third').style.left = '-40px'
    document.querySelector('.third').style.top = '-55px'
}
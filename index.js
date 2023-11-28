const inputValue = document.querySelector('.inputValue')
const btnValue = document.querySelector('.btnValue')
const imgQRCode = document.querySelector('.imgQRCode')
const container = document.querySelector('.container')
const newQRCode = document.querySelector('.newQRCode')
let valueDefault

// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

function generateCode() {

    let qrCodeValue = inputValue.value.trim()
    if(!qrCodeValue || qrCodeValue === valueDefault) {
        return alert('Insira algum valor, ou um valor diferente do anterior')
    }
    valueDefault = qrCodeValue
    btnValue.innerText = 'Gerando QRCode'

    imgQRCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrCodeValue}`

    if(qrCodeValue) {
        newQRCode.innerText = 'Aqui está seu QRCode.'
    }

    imgQRCode.addEventListener('load', () => {
        imgQRCode.classList.add('imgActive')
        btnValue.innerText = 'Gerar QRCode'
    })
}

btnValue.addEventListener('click', generateCode)
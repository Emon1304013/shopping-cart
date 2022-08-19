//btn-phone-minus
//phone-input-field
//btn-phone-plus
//phone-price

document.getElementById('btn-phone-plus').addEventListener('click',function(){

    const newPhoneInput = getInputFieldValueById(true,'phone-input-field');

    calculateTotal(newPhoneInput,'phone-price')
    calculateSubTotal()
    
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhoneInput = getInputFieldValueById(false,'phone-input-field');

    calculateTotal(newPhoneInput,'phone-price')
    calculateSubTotal()
})


//btn-case-minus
//case-input-field
//btn-case-plus
//case-price

// function calculateCaseTotal(newCaseInput){
//     const currentCasePriceElement = document.getElementById('case-price');
//     const currentCasePrice = parseInt(currentCasePriceElement.innerText);
//     currentCasePriceElement.innerText = newCaseInput * 59;
// }

document.getElementById('btn-case-plus').addEventListener('click',function(){

    const newCaseInput = getInputFieldValueById(true,'case-input-field');
    // calculateCaseTotal(newCaseInput)
    calculateTotal(newCaseInput,'case-price')
    calculateSubTotal()
    
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseInput = getInputFieldValueById(false,'case-input-field');
    calculateTotal(newCaseInput,'case-price')
    calculateSubTotal()
})


function getInputFieldValueById(isIncrease,elementId){
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const inputValue = parseInt(inputFieldString);
    let newInput;
    if(isIncrease)
    {
         newInput = inputValue + 1;
    }

    else{
         newInput = inputValue - 1;
    }

    inputField.value = newInput;
    return newInput;

}


function calculateTotal(newInput, elementId){
    const currentPriceElement = document.getElementById(elementId);
    const currentPrice = parseInt(currentPriceElement.innerText);
    
    if(elementId == 'phone-price'){
        currentPriceElement.innerText = newInput * 1219;
    }
    else{
        currentPriceElement.innerText = newInput * 59;

    }
}
function getElementValueById(elementId){

}

function calculateSubTotal(){

const subTotalElement = document.getElementById('sub-total');

const phonePriceElement = document.getElementById('phone-price');

const phonePrice = parseInt(phonePriceElement.innerText);

const casePriceElement = document.getElementById('case-price');

const casePrice = parseInt(casePriceElement.innerText);

const subTotal = phonePrice + casePrice;
subTotalElement.innerText = subTotal;

const taxTotal = parseInt((subTotal * 0.1).toFixed(2));
document.getElementById('total-tax').innerText = taxTotal;

document.getElementById('total-bill').innerText = parseInt(subTotal) + parseInt(taxTotal);


}



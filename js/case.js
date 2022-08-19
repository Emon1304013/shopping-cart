//btn-case-minus
//case-input-field
//btn-case-plus
//case-price

function getInputFieldValueById(isIncrease){
    const caseInputField = document.getElementById('case-input-field')
    const caseInputFieldString = caseInputField.value;
    const caseInputValue = parseInt(caseInputFieldString);
    let newCaseInput;
    if(isIncrease)
    {
         newCaseInput = caseInputValue + 1;
    }

    else{
         newCaseInput = caseInputValue - 1;
    }

    caseInputField.value = newCaseInput;
    return newCaseInput;
}

function calculateCaseTotal(newCaseInput){
    const currentCasePriceElement = document.getElementById('case-price');
    const currentCasePrice = parseInt(currentCasePriceElement.innerText);
    currentCasePriceElement.innerText = newCaseInput * 59;
}

document.getElementById('btn-case-plus').addEventListener('click',function(){

    const newCaseInput = getInputFieldValueById(true);
    calculateCaseTotal(newCaseInput)

    
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseInput = getInputFieldValueById(false);
    calculateCaseTotal(newCaseInput);
})


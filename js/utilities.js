function getInputValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    const elementValue = parseInt(elementValueString);
    return elementValue;
}

function setTextvalueById(elementId,newValue){
    const element = document.getElementById(elementId);
    element.innerText = 
}
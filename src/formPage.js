const confirmBtn = document.querySelector("form button");
const formInfo = {
    contactName: document.querySelector('#contact-name'),
    contactEmail: document.querySelector('#contact-email'),
    contactMsg: document.querySelector('#contact-message')
};
const prevEntriesRow = document.querySelector("#render-previous");

confirmBtn.addEventListener('click', addToLocalStorage);

//Check if entries exist in localStorage, if so -> display
for (let field in formInfo) {
    if (localStorage.getItem(field) !== null) {
        // renderPreviousEntries();
        let tempArray = JSON.parse(localStorage.getItem(field));
        formInfo[field].value = tempArray[tempArray.length - 1];
    }
}

//Add confirmed fields to localStorage and update if changed
function addToLocalStorage(e) {

    e.preventDefault();
    for (let field in formInfo) {
        // console.log(localStorage.getItem(field));
        if (localStorage.getItem(field) === null) {
            let fieldArray = [];
            fieldArray.push(formInfo[field].value);
            localStorage.setItem(field, JSON.stringify(fieldArray));
            console.log(localStorage);
        } else if (localStorage.getItem(field) !== null) {
            let fieldArray = JSON.parse(localStorage.getItem(field));
            console.log(fieldArray);
            //pop last entry if identical to current -- still leaves an array size mismatch between the 3 fields in case not all fields are updated
            if (formInfo[field].value === fieldArray[fieldArray.length - 1]) {
                fieldArray.pop(fieldArray);

            }
            fieldArray.push(formInfo[field].value);
            localStorage.setItem(field, JSON.stringify(fieldArray));
        }
    }
    console.log(localStorage);
}

// function renderPreviousEntries(){

// }
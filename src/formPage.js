const confirmBtn = document.querySelector("form button");
const formInfo = {
    contactName: document.querySelector('#contact-name'),
    contactEmail: document.querySelector('#contact-email'),
    contactMsg: document.querySelector('#contact-message')
};

confirmBtn.addEventListener('click', addToLocalStorage);

for (let field in formInfo) {
    if (localStorage.getItem(field) !== null) {
        let fieldArray = JSON.parse(localStorage.getItem(field));
        formInfo[field].value = fieldArray[fieldArray.length - 1];
    }
}

function addToLocalStorage() {
    for (let field in formInfo) {
        if (localStorage.getItem(field) === null) {
            let fieldArray = [];
            fieldArray.push(formInfo[field].value);
            localStorage.setItem(field, JSON.stringify(fieldArray));
            console.log(localStorage);
        } else if (localStorage.getItem(field) !== null) {
            let fieldArray = JSON.parse(localStorage.getItem(field));

            if (formInfo[field].value !== fieldArray[fieldArray.length - 1]) {
                fieldArray.push(formInfo[field].value);
                localStorage.setItem(field, JSON.stringify(fieldArray));
            }
        }
    }
}


// if (localStorage.getItem("contactName") === null) {
//     console.log("contactNames is null");
//     let contactNames = [];
//     contactNames.push(formInfo.contactName.value);
//     console.log(contactNames);
//     localStorage.setItem("contactName", JSON.stringify(contactNames));
//     console.log(localStorage);
// } else if (localStorage.getItem("contactName") !== null) {
//     // let contactNames = JSON.parse(localStorage.getItem("contactName"));
//     formInfo.contactName.value = JSON.parse(localStorage.getItem("contactName"));
//     console.log(localStorage);
// }



// for(let i = 0; i < contactNames.length; i++){

// }
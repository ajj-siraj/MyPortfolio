const formInfo = {
    contactName: document.querySelector('#contact-name'),
    contactEmail: document.querySelector('#contact-email'),
    contactMsg: document.querySelector('#contact-message')
};

// console.log(localStorage);
// for(let field in formInfo){
//     for (let i = 0; i < formInfo.contactName.length; i++){
//         formInfo[field].value = localStorage.getItem(field[i]);
//         console.log(localStorage);
//     }
    
// }

if(localStorage.getItem("contactName") === null){
    console.log("contactNames is null");
    let contactNames = [];
    contactNames.push(formInfo.contactName.value);
    console.log(contactNames);
    localStorage.setItem("contactName", JSON.stringify(contactNames));
    console.log(localStorage);
}

else if(localStorage.getItem("contactName") !== null){
    // let contactNames = JSON.parse(localStorage.getItem("contactName"));
    formInfo.contactName.value = JSON.parse(localStorage.getItem("contactName"));
    console.log(localStorage);
}



// for(let i = 0; i < contactNames.length; i++){

// }
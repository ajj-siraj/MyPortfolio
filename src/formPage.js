const formInfo = {
    contactName: document.querySelector('#contact-name'),
    contactEmail: document.querySelector('#contact-email'),
    contactMsg: document.querySelector('#contact-message'),
};

for(let field in formInfo){
    formInfo[field].value = localStorage.getItem(field);
}
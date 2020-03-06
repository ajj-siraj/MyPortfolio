const formSendBtn = document.querySelector('footer button');
const formInfo = {
    contactName: document.querySelector('#contact-name'),
    contactEmail: document.querySelector('#contact-email'),
    contactMsg: document.querySelector('#contact-message'),
};


const errorLocation = formSendBtn.parentNode.parentNode;

const emailRegex = /[^@]+@[^@]+\.[a-zA-Z]{2,}/;


formSendBtn.addEventListener('click', formRedirect);



function formRedirect(e) {
    // 
    // for (let field in formInfo){
    //     localStorage.setItem(field,)
    // }

    e.preventDefault();
    verificationResult = formVerify();

    if (verificationResult === "allGood") {
        if (document.querySelector(".errormsg") !== null) {
            formSendBtn.parentNode.parentNode.removeChild(document.querySelector(".errormsg"));
        }

        //redirection and localstorage logic
        for(let field in formInfo){
            // console.log(formInfo[field].value);
            localStorage.setItem(field, formInfo[field].value);
        }
        window.location.href = "./form.html";
        
    } else {
        //show error msg
        if (document.querySelector(".errormsg") !== null) {
            formSendBtn.parentNode.parentNode.removeChild(document.querySelector(".errormsg"));
        }

        if (verificationResult === "nameInvalid" || verificationResult === "msgInvalid") {
            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode("You left some empty fields."));
            errorDiv.classList.add("errormsg", "text-center", "alert", "alert-danger");
            errorDiv.id = "error-div";
            errorLocation.insertBefore(errorDiv, formSendBtn.parentNode);
            window.location.href = "#error-div";
        }
        if (verificationResult === "emailInvalid") {
            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode("Please enter a valid email."));
            errorDiv.classList.add("errormsg", "text-center", "alert", "alert-danger");
            errorDiv.id = "error-div";
            errorLocation.insertBefore(errorDiv, formSendBtn.parentNode);
            window.location.href = "#error-div";
        }


    }
}

//returns strings "nameInvalid", "emailInvaild", "msgInvalid" or "allGood"
function formVerify() {
    if (formInfo.contactMsg.value !== "") {
        if (emailRegex.test(formInfo.contactEmail.value)) {
            if (formInfo.contactName.value !== "") {
                return "allGood";
            }
            return "nameInvalid";
        }
        return "emailInvalid";
    }

    return "msgInvalid";
}

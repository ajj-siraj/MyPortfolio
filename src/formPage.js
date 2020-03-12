const confirmBtn = document.querySelector("#confirmbtn");
const returnBtn = document.querySelector("#returnbtn");
const formInfo = {
    contactName: document.querySelector('#contact-name'),
    contactEmail: document.querySelector('#contact-email'),
    contactMsg: document.querySelector('#contact-message')
};
const prevEntriesRow = document.querySelector("#render-previous");

confirmBtn.addEventListener('click', addToLocalStorage);
returnBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "/"
});

//Check if entries exist in localStorage, if so -> render & display
renderPreviousEntries();

for (let field in formInfo) {
    if (localStorage.getItem(field) !== null) {

        let tempArray = JSON.parse(localStorage.getItem(field));
        formInfo[field].value = tempArray[tempArray.length - 1];
    }
}

//Add confirmed fields to localStorage and update if changed
function addToLocalStorage() {

    // e.preventDefault();
    for (let field in formInfo) {

        if (localStorage.getItem(field) === null) {
            let fieldArray = [];
            fieldArray.push(formInfo[field].value);
            localStorage.setItem(field, JSON.stringify(fieldArray));
        } else if (localStorage.getItem(field) !== null) {
            let fieldArray = JSON.parse(localStorage.getItem(field));

            fieldArray.push(formInfo[field].value);
            localStorage.setItem(field, JSON.stringify(fieldArray));
        }
    }
}

function renderPreviousEntries() {

    const contactNames = JSON.parse(localStorage.getItem("contactName"));
    const contactEmails = JSON.parse(localStorage.getItem("contactEmail"));
    const contactMsgs = JSON.parse(localStorage.getItem("contactMsg"));

    //the render the names column
    const renderArray = contactNames.map((arr) => {
        return (
            `<tr>
            <td>${arr}</td>
        </tr>`
        );
    });
    $('#render-previous').append(renderArray);

    //render the emails column
    for (let i = 1; i <= renderArray.length; i++) {
        $(`#render-previous tr:nth-child(${i})`).append(`<td>${contactEmails[i-1]}</td>`);
    }

    //render the messages column
    for (let i = 1; i <= renderArray.length; i++) {
        $(`#render-previous tr:nth-child(${i})`).append(`<td>${contactMsgs[i-1]}</td>`);
    }

}


//AJAX implementation to formspree

window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above

    var form = document.getElementById("myform");
    var button = confirmBtn;
    // var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
        $('#status-message').append("<p>Thank you for your email. You will be redirected back to the homepage shortly.</p>");
        $('#status-modal').modal({backdrop: 'static', keyboard: false});
        $('#status-modal').modal('show');
        form.reset();
        setTimeout(() => window.location.href = "/", 2000);
    }

    function error() {
        //   status.innerHTML = "Oops! There was a problem.";
        document.querySelector('#status-message').innerHTML = "Error. Please try again.";
        $('#status-modal').modal('show');
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}
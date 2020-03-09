const confirmBtn = document.querySelector("form button");
const formInfo = {
    contactName: document.querySelector('#contact-name'),
    contactEmail: document.querySelector('#contact-email'),
    contactMsg: document.querySelector('#contact-message')
};
const prevEntriesRow = document.querySelector("#render-previous");

confirmBtn.addEventListener('click', addToLocalStorage);

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
    // console.log(localStorage);
    //AJAX implementation
    // localInJSON = JSON.stringify(localStorage);
    // $("form button").on("click", function() {
    //     $.ajax({
    //         url: "https://formspree.io/mwkovzwq", 
    //         method: "POST",
    //         data: localInJSON,
    //         dataType: "json"
    //     });
    // });
}

function renderPreviousEntries() {

    const contactNames = JSON.parse(localStorage.getItem("contactName"));
    const contactEmails = JSON.parse(localStorage.getItem("contactEmail"));
    const contactMsgs = JSON.parse(localStorage.getItem("contactMsg"));
    const renderArray = contactNames.map((arr) => {
        return (
        `<tr>
            <td>${arr}</td>
        </tr>`
        );
    });
    console.log(renderArray);
    $('#render-previous').append(renderArray);
    for(let i = 1; i<=renderArray.length; i++){
        $(`#render-previous tr:nth-child(${i})`).append(`<td>${contactEmails[i-1]}</td>`);
    }

    for(let i = 1; i<=renderArray.length; i++){
        $(`#render-previous tr:nth-child(${i})`).append(`<td>${contactMsgs[i-1]}</td>`);
    }

}
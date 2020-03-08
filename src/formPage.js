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
function addToLocalStorage(e) {

    e.preventDefault();
    for (let field in formInfo) {

        if (localStorage.getItem(field) === null) {
            let fieldArray = [];
            fieldArray.push(formInfo[field].value);
            localStorage.setItem(field, JSON.stringify(fieldArray));
        } 
        
        else if (localStorage.getItem(field) !== null) {
            let fieldArray = JSON.parse(localStorage.getItem(field));
            
            fieldArray.push(formInfo[field].value);
            localStorage.setItem(field, JSON.stringify(fieldArray));
        }
    }
    // console.log(localStorage);
}

function renderPreviousEntries(){
    // const colDiv = document.createElement('div');
    // const colSpan = document.createElement('span');
    // colDiv.appendChild(colSpan);
    // colDiv.classList.add('col-12', 'col-lg-6');
    for(field in formInfo){
        let fieldArray = JSON.parse(localStorage.getItem(field));
        console.log(fieldArray);
        for(item in fieldArray){
            console.log(fieldArray[item]);
            
            const content = "<div class=\"col-12 col-lg-8\"><div>" + fieldArray[item] + "</div></div>";
            prevEntriesRow.insertAdjacentHTML('beforeend', content);
        }
        
    }

}
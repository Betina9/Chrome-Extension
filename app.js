let myLead = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLead = leadsFromLocalStorage;
  renderLead();
}

deleteBtn.addEventListener("dblclick", function () {
  console.log("The delete button was clicked!");
  localStorage.clear();
  myLead = [];
  renderLead();
});

inputBtn.addEventListener("click", function () {
  myLead.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLead", JSON.stringify(myLead));
  renderLead();
});

function renderLead() {
  let listItems = "";

  for (let i = 0; i < myLead.length; i++) {
    listItems += `
      <li>
        <a target='_blank' href='${myLead[i]}'>
          ${myLead[i]}
        </a>
      </li>`;
  }
  ulEl.innerHTML = listItems;
}

let myLead = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLead.push(inputEl.value);
  inputEl.value = "";
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

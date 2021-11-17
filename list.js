const listForm = document.querySelector("#list-form");
const listInput = document.querySelector(".writing-lst");
const listPad = document.querySelector(".lstPadJS");

function handleListInput(event){
    event.preventDefault();
    const listItem = listInput.value
    listInput.value = "";
    listInput.focus();
    const itemBag = document.createElement("div");
    itemBag.setAttribute("class", "item-bag");
    listPad.appendChild(itemBag);
    const aList = document.createElement("li");
    aList.innerHTML = `${listItem}`;
    itemBag.appendChild(aList);
    itemBag.scrollIntoView({block:"center"})
    const deleteBnt = document.createElement("button");
    deleteBnt.setAttribute("class", "delete-btn")
    deleteBnt.innerHTML = `👌`;
    deleteBnt.addEventListener("click", handleDeleteBtn)
    deleteBnt.setAttribute("class", "x-button");
    itemBag.appendChild(deleteBnt);
}

function handleDeleteBtn(event){
    const listBag = event.target.parentNode
    listBag.remove();
}

listForm.addEventListener("submit", handleListInput);

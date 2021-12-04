const listForm = document.querySelector("#list-form");
const listInput = document.querySelector(".writing-lst");
const listPad = document.querySelector(".lstPadJS");
const reset = document.querySelector(".reset-btn")


function handleListInput(event){
    event.preventDefault();
    const listItem = listInput.value
    listInput.value = "";
    listInput.focus();


    const itemBag = document.createElement("div");
    itemBag.setAttribute("class", "item-bag");
    listPad.appendChild(itemBag);


    const confirmBag = document.createElement("div");
    confirmBag.setAttribute("class", "confirm-bag");
    itemBag.appendChild(confirmBag);

    
    const checkBnt = document.createElement("button");
    checkBnt.setAttribute("class", "check-btn");
    checkBnt.innerHTML="❓"
    checkBnt.addEventListener("click", () => {
        if (checkBnt.innerHTML === `❓`) {
            checkBnt.innerHTML = `✔`;
            itemBag.style.backgroundColor = "#F48FB1";
        } else {
            checkBnt.innerHTML = `❓`;
            itemBag.style.backgroundColor = "transparent";
        }
    });
    confirmBag.appendChild(checkBnt)


    const aList = document.createElement("li");
    aList.innerHTML = `${listItem}`;
    confirmBag.appendChild(aList);
    itemBag.scrollIntoView({block:"center"})


    const deleteBnt = document.createElement("button");
    deleteBnt.setAttribute("class", "delete-btn")
    deleteBnt.innerHTML = `❌`;
    deleteBnt.addEventListener("click", () => {
        itemBag.remove();
    });
    deleteBnt.setAttribute("class", "x-button");
    itemBag.appendChild(deleteBnt);
}


listForm.addEventListener("submit", handleListInput);

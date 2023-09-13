const inputbox = document.getElementById("input-box");
const listcontent = document.getElementById("list-content");

function addTask() {
    if (inputbox.value === '') {
        alert("You must write something!!!");

    }

    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontent.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputbox.value = '';
    saveData();
}

listcontent.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") 
    {
        e.target.parentElement.remove();
        saveData();
    }

}, false);


function saveData() {
    localStorage.setItem("data", listcontent.innerHTML);
}

function showTask() {
    listcontent.innerHTML = localStorage.getItem("data");
}
showTask();
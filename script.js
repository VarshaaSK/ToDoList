const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");



function addTask(){
    if(inputBox.value === ''){
        alert("Write Something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //cross icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        //display this span
        li.appendChild(span);
    }
    inputBox.value = '';

    //call savedata() to save new data in browser
    saveData();
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


//whatever data is present inside innerHTML will be stored in local storage , so that it dont get erased even on refereshing the page
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();

let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');

inputBx.addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        addItem(this.value)
        this.value = ""
    }
})

let addItem = (inputBx) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputBx}<i></i>`;
        saveData();

    listItem.addEventListener("click", function(){
        this.classList.toggle('done');
        saveData();
    })

    listItem.querySelector("i").addEventListener("click",function(){
        listItem.remove(); 
        saveData();
        
 })

    list.appendChild(listItem);

}

function saveData(){ 
    localStorage.setItem("data", list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}




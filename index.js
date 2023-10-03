// Instantiate Variables

let toDoArr = JSON.parse(localStorage.getItem('toDoArr')) || [];
let listElement = document.getElementById('toDoList');


// Functions
const addTask = (task) => {
    toDoArr.push(task);
    localStorage.setItem('toDoArr',JSON.stringify(toDoArr));
    console.log('Arr: ' + toDoArr);
}


// Actions on Refresh
if (toDoArr) {
    window.onload = () => {
        toDoArr.forEach((element) => {
            let newItem = element;
            const newNode = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            const textNode = document.createTextNode(newItem);
            
            newNode.appendChild(checkbox);
            newNode.appendChild(textNode);
            listElement.insertBefore(newNode, listElement.children[0])

            checkbox.addEventListener('change', () => {
            if (checkbox.checked){
                newNode.style.textDecoration = 'line-through';
            } else {
                newNode.style.textDecoration = 'none';
            }
        });

        })
}
}


// Event Listeners
document.querySelector("#clear").addEventListener("click", () => {
    let testVar = document.querySelectorAll("input[type='checkbox']:checked");
    testVar.forEach((element, index) => {
        toDoArr.splice(index, 1);
        element.parentElement.remove();
        localStorage.setItem('toDoArr',JSON.stringify(toDoArr));
    })
    console.log(testVar);

})



document.querySelector("#submitBtn").addEventListener("click", () => {
    const newItem = document.getElementById("toDoInput").value;
    if(newItem != "") {
        addTask(newItem);
        const newNode = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        checkbox.addEventListener('change', () => {
            if (checkbox.checked){
                newNode.style.textDecoration = 'line-through';
            } else {
                newNode.style.textDecoration = 'none';
            }
        });

        const textNode = document.createTextNode(newItem);
        newNode.appendChild(checkbox);
        newNode.appendChild(textNode);
        listElement.insertBefore(newNode, listElement.children[0])
        document.getElementById("toDoInput").value = ''; 

    }

}
)

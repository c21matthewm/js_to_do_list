console.log('My code is running');

let toDoArr = [];
let listElement = document.getElementById('toDoList');

const addTask = (task) => {
    toDoArr.push(task);
    console.log('Arr: ' + toDoArr);
}

document.querySelector("#submitBtn").addEventListener("click", () => {
    const newItem = document.getElementById("toDoInput").value;
    if(newItem) {
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
        document.getElementById("toDoInput").value = ''; // re-added so it clears input box
    }
}
)

console.log('My code is running');

let toDoArr = JSON.parse(localStorage.getItem('toDoArr')) || [];
let listElement = document.getElementById('toDoList');

const addTask = (task) => {
    toDoArr.push(task);
    console.log('Arr: ' + toDoArr);
    // localStorage.setItem('toDoArr',JSON.stringify(toDoArr));
}

// toDoArr.forEach((item) => {
//     addTaskToDOM(item);
// });
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
        document.getElementById("toDoInput").value = ''; 

    }

}
)

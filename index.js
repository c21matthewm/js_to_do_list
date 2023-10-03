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
    let uncheckedArr = [];
    
    let checked = document.querySelectorAll("input[type='checkbox']:checked");
    checked.forEach((element, index) => {
        // toDoArr.splice(index, 1);
    element.parentElement.remove();
    })
    
    let unchecked = document.querySelectorAll("input[type=checkbox]:not(:checked)");
    unchecked.forEach((element) => {
        let testText = element.nextSibling.nodeValue;
        uncheckedArr.unshift(testText);
    })
    
    // toDoArr.filter((element) => )
    console.log(toDoArr);
    // let uncheckedList = document.querySelectorAll("input[type=checkbox]:not(:checked)");
    // console.log('unchecked: ' + uncheckedList);
    // let unchecked = document.querySelectorAll("input[type=checkbox]:not(:checked)");
    // let toDoArr = Array.from(unchecked);
    localStorage.setItem('toDoArr',JSON.stringify(uncheckedArr))
    // // Array.from(unchecked).forEach((element) => {
    // //     localStorage.setItem('toDoArr',JSON.stringify(toDoArr));
    // })
    

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

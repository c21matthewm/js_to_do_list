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
        const textNode = document.createTextNode(newItem);
        newNode.appendChild(checkbox);
        newNode.appendChild(textNode);
        listElement.insertBefore(newNode, listElement.children[0])
    }
}
)
        // listElement.innerHTML = '';
        // toDoArr.map((task) => { 
        //     const newNode = document.createElement('li');
        //     const textNode = document.createTextNode(newItem);
        //     newNode.appendChild(textNode);
        //     listElement.insertBefore(newNode, listElement.children[0]);
        // })}
    
    // document.getElementById("toDoInput").value = '';
    
    // addTask(newItem);
    // console.log('array' + toDoArr);
   //  console.log('NEWITEM' + newItem);
    // console.log('middle' + toDoArr);
    // if (newItem) {
    //     addTask(newItem);
    //     // console.log('if' + newItem);
        // toDoArr.forEach((task) => { 
        //     listElement.innerHTML = `<li>${task}</li>`;
        // })
        // document.getElementById("toDoInput").value = '';
    // }
    // write to HTML


console.log('My code is running');

let toDoArr = [];
let listElement = document.getElementById('toDoList');

const addTask = (task) => {
    toDoArr.push(task);
    // console.log('Arr: ' + toDoArr);
}

document.querySelector("#submitBtn").addEventListener("click", () => {
    const newItem = document.getElementById("toDoInput").value;
    if(newItem) {
        addTask(newItem);
        console.log('Arr: ' + toDoArr);
    }
    
    
    // addTask(newItem);
    // console.log('array' + toDoArr);
   //  console.log('NEWITEM' + newItem);
    // console.log('middle' + toDoArr);
    // if (newItem) {
    //     addTask(newItem);
    //     // console.log('if' + newItem);
    //     // toDoArr.forEach((task) => { 
    //     //     listElement.innerHTML = `<li>${task}</li>`;
    //     // })
    //     // document.getElementById("toDoInput").value = '';
    // }
})
    // write to HTML


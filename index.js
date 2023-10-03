console.log('My code is running');
let toDoArr = [];
const addTask = (task) => {
    toDoArr.push(task);
    // console.log('first' + toDoArr);
}


let listElement = document.getElementById('toDoList');
document.querySelector("#submitBtn").addEventListener("click", () => {
    let newItem = document.getElementById("toDoInput").value;
    addTask(newItem);
    console.log('array' + toDoArr);
   // console.log('NEWITEM' + newItem);
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


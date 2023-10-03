console.log('My code is running');
let toDoArr = [];
// const addTask (task) => {
    // toDoArr.push(task);
let newItem = "";
document.querySelector("#submitBtn").addEventListener("click", () => {
    newItem = document.getElementById("toDoInput").value;
    if (newItem) {
        toDoArr.push(newItem);
        document.getElementById("toDoInput").value = '';
        console.log(toDoArr);
    }
})
    // write to HTML
//}


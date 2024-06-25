let todoCount = 0;

function addTodo() {
    let data = document.getElementById("ttext").value;

    if (data === "") {
        showNotification();
    } else {
        let ul = document.getElementById("tul");
        const liId = `todo-${todoCount}`;
        const li = `
        <li id="${liId}">
            ${data}
            <div class="tbuttons">
                <button class="tbutton" onclick="doneTodo('${liId}')">
                    <img src="images/done.png" class="timg" alt="Done">
                </button>
                <button class="tbutton" onclick="deleteTodo('${liId}')">
                    <img src="images/trash.png" class="timg" alt="Delete">
                </button>
            </div>
        </li>
        `;


        ul.insertAdjacentHTML("beforeend", li);

        document.getElementById("ttext").value = "";  

        todoCount++;
    }
}

function showNotification() {
    alert("Please input at least a word");
}

function deleteTodo(liId) {
    const li = document.getElementById(liId);

    if (li) {
        li.remove();
    }
}

function doneTodo(liId) {
    const li = document.getElementById(liId);

    
    if (li) {
        li.style.textDecoration = "line-through";
    }
}

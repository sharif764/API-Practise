const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data));
}
const loadUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data))
}
const loadPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
}
const displayUser = (data) => {
    const ul = document.getElementById('users');

    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `name:${user.name} email${user.email}`;
        ul.appendChild(li);
    }
}
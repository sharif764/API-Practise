const loadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
        /*     (data) => {
                for (const user of data) {
                    console.log(user);
                }
            } */ foruser(data);
        })
}
const foruser = (data) => {
    const ul = document.getElementById('ul');


    for (const user of data) {
        let li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
        console.log(li);
    }
}
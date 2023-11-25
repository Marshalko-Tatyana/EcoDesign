let name = document.querySelector('#name');
let phone = document.querySelector('#phone');
let submit = document.querySelector('#submit');



let users = {};

function User(name, phone) {
    this.name = name;
    this.phone = phone;

}
function createId(users) {
    return Object.keys(users).length;
}
submit.addEventListener('click', ()=>{
    const nameUser = name.value;
    const phoneUser = phone.value;
    

    const user = new User(nameUser, phoneUser);

    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users);

    alert(`${nameUser}, Ваш запрос на замер отправлен`)

})
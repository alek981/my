const not_send = document.querySelector('#not_send')
const token ='7682069798:AAFizix6yiASx3Na9oUK5n3byDu2PNVWiLs';
const chat_id = 688804750;
const API_URL = `https://api.telegram.org/bot${token}/sendMessage?chat_id=<chat_id>&text=<message>`;
function messenger(){
    const user = {
        name:document.querySelector('#user_name').velue,
        number:document.querySelector('#user_number').velue,
        msg:document.querySelector('#user_msg').velue
    }

    let messege = `Name: ${user.name} Number: ${user.namber} message ${user.msg}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log('Произошла ошибка: ', err));
}
not_send.addEventListener('click',messenger);
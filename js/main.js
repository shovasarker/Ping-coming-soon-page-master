
const inputHolder = document.querySelector('#input-holder');
const email = document.querySelector('#email');

const notifyBtn = document.querySelector('#notify-btn');


notifyBtn.addEventListener('click', () => {
    let emailAddress = email.value.toString();
    if (emailAddress.includes('@') && !emailAddress.includes('/') && !emailAddress.includes('#') && !emailAddress.includes('$') && !emailAddress.includes('%') && !emailAddress.includes('&')){
        console.log(`${emailAddress} is valid`);
        if (inputHolder.classList.contains("error")) {
            inputHolder.classList.remove("error");
        }
    } else {
        console.log(`${emailAddress} is not valid`);
        if (!inputHolder.classList.contains("error")) {
            inputHolder.classList.add("error");
        }
    }
});
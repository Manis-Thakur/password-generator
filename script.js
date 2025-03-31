const displayPassword = document.getElementById('display');
const rangeInput = document.getElementById('range');
const rangelength = document.getElementById('numberlength');
const generate = document.getElementById('generatepassword');
const copyicon = document.querySelector(".fa-clone");

function passwordgenerator() {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = lowerCase.toUpperCase();
    const numbers = "0123456789";
    const symbols = "!@$#%&";

    const allchars = lowerCase + upperCase + numbers + symbols;
    let password = "";

    for (let i = 1; i <= rangeInput.value; i++) {
        const randomindex = Math.floor(Math.random() * allchars.length);
        password += allchars[randomindex];
    }
    displayPassword.value = password;
}

copyicon.addEventListener('click', ()=>{
    navigator.clipboard.writeText(displayPassword.value);
})


generate.addEventListener('click', passwordgenerator); 


rangeInput.addEventListener('input', () => {
    rangelength.innerText = rangeInput.value;
})








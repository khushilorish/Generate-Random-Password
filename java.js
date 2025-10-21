const passBox = document.querySelector("#input");
const btn = document.getElementById("gen");
const copyBtn = document.querySelector("#copyimg");
const length =12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const num= "1234567890";
const specialCharacters ="~!@#$%^&*()_+|}{?><\][/";
const allChars = upperCase + lowerCase + num + specialCharacters

btn.addEventListener("click", genPass);

function genPass(){
    let password= "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passBox.value= password;
}

copyBtn.addEventListener("click", copyPass);


function copyPass(){
    passBox.select();
    document.execCommand("copy")
}
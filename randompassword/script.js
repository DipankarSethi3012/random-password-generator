const passwordBox=document.getElementById('password');
const length=12;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbols="!@#$%^&*()_[]<>?/|}{-=~";
const all=upperCase+lowercase+number+symbols;

function createPassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];

    while(length>password.length){
        password+=all[Math.floor(Math.random()*all.length)];

    }
    passwordBox.value=password;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
const allowUper=document.getElementById("allowUperCase");
const allowLower=document.getElementById("allowLowerCase");
const allowNumber=document.getElementById("allowNumbers");
const allowSymbol=document.getElementById("allowSymbols");
const result=document.getElementById("res");
function genrate(){
    let allowedchar="";
    let password="";
    // password.length=0;
    event.preventDefault();
    let length=document.getElementById("length").value;
    length=Number(length);
    let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase="abcdefghijklmnopqrstuvwxyz";
    let numbers="1234567890";
    let symbols="~!@#$%^&*()_+=-',.<>?/[]{}|";
    if (allowUper.checked) {
        allowedchar+=uppercase;
    }
    if (allowLower.checked) {
        allowedchar+=lowercase;
    }
    if (allowNumber.checked) {
        allowedchar+=numbers;
    }
    if (allowSymbol.checked) {
        allowedchar+=symbols;
    }
    if(allowedchar==="")
    {
        result.textContent=`Please select atleast one option`
    }
    for (let index = 0; index <length; index++) {
        password+=allowedchar.charAt(Math.floor(Math.random()*allowedchar.length));
    }
    if (password!="") {
        result.textContent=`Your Pass : ${password}`;
    }
}

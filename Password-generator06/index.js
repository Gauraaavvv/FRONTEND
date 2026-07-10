const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generate = document.querySelector(".generate-btn")
let passwordEl = document.getElementsByClassName("newpasswords")
generate.addEventListener("click",() => {
    passwordEl[0].textContent = passwordGenerator()
    passwordEl[1].textContent = passwordGenerator()
    })
    
    function passwordGenerator () {
    let password = ""
    for(let i = 0; i < 5; i++) { 
    let random = Math.floor(Math.random() * characters.length)
    let character = characters[random]
    password = password + character
    }
    return password
    }
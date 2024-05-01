const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let len = characters.length
let chSize = 15
let generateBtn = document.getElementById("generate-pwd")
let pwd1Btn = document.getElementById("pwd-1")
let pwd2Btn = document.getElementById("pwd-2")

function generatePwd() {
    let pwd1 = ""
    let pwd2 = ""
    for(let i = 0; i < chSize; i++) {
        let r = Math.floor(Math.random() * len)
        pwd1 += characters[r]
    }
    for(let i = 0; i < chSize; i++) {
        let r = Math.floor(Math.random() * len)
        pwd2 += characters[r]
    }
    pwd1Btn.textContent = pwd1
    pwd2Btn.textContent = pwd2
}

function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Text copied to clipboard!");
        })
        .catch((error) => {
            console.error("Failed to copy text: ", error);
            alert("Failed to copy text. Please try again.");
        });
}

function copyTextOnClick(elementId) {
    const textElement = document.getElementById(elementId);

    textElement.addEventListener("click", function() {
        const text = textElement.textContent.trim();
        copyTextToClipboard(text);
    });
}

copyTextOnClick("pwd-1")
copyTextOnClick("pwd-2")
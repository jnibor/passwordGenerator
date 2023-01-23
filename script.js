
document.querySelector(".button").addEventListener("click", function() {
    const number1 = Number(document.querySelector(".input1").value)
    let letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "W", "V", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "w", "u", "v", "w", "z"];
    let randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let symbols = ["!", "?", ".", "@", "#", "/", "-", "*"]
    let passwordChar = []
    let newPassword = ""
    let i = 0
    while (i < number1) {
        passwordChar.push(letter[Math.ceil(Math.random() * 47)])
        i++
    }
    passwordChar[Math.ceil(Math.random() * number1)] = randomNumbers[Math.ceil(Math.random() * 9)]
    passwordChar[Math.ceil(Math.random() * number1)] = symbols[Math.ceil(Math.random() * 7)]
    for (let e=0; e < passwordChar.length; e++) {
        newPassword += passwordChar[e]
    }
    
    document.querySelector(".generatedPassword").textContent = newPassword
})


document.querySelector(".buttonReset").addEventListener("click", function() {
    document.querySelector(".input1").value = ""
    document.querySelector(".generatedPassword").textContent = "X X X X X"
})

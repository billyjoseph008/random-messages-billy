const messages = [
    "Ana",
    "Beto",
    "Carlos",
    "Diana",
    "Esteban",
    "Fiorella"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = {randomMsg}

// Inicializar la puntuación y el color
let score = 0
let color = 0
let colorName = "Sin color" // inicializando con un valor por defecto

// Lista de preguntas
let questions = ["2 + 2", "2 - 2", "3 * 3", "9 / 9"]
// Lista de respuestas correctas
let answers = [4, 0, 9, 1]
// Lista de colores (naranja, amarillo, verde claro, verde oscuro)
let colors = [4, 5, 7, 6]
// Lista de nombres de colores
let colorNames = ["Naranja", "Amarillo", "Verde Claro", "Verde Oscuro"]

// Crear el personaje y definir la posición inicial
let player = sprites.create(img`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
`, SpriteKind.Player)
player.setPosition(10, 60)

// Bucle para recorrer las preguntas
for (let i = 0; i < questions.length; i++) {
    // Mostrar la pregunta actual y recibir la respuesta del usuario
    let userAnswer = game.askForNumber(questions[i])

    // Comparar la respuesta del usuario con la respuesta correcta
    if (userAnswer == answers[i]) {
        // Sumar puntos y cambiar el color del fondo si la respuesta es correcta
        score += 2
        color = colors[i]
        colorName = colorNames[i] // obtener el nombre del color
        scene.setBackgroundColor(color)

        // Mover el personaje hacia la meta
        player.x += 40 // ajusta el valor para mover al personaje la distancia deseada
    }
}

// Mostrar la puntuación final y el color resultante al finalizar el juego
game.splash("Puntuación final: " + score)
game.splash("Color resultante: " + colorName) // mostrar el nombre del color

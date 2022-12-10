const titleDisplay = document.getElementById('titleDisplay')
const bodyDisplay = document.getElementById('bodyDisplay')
const link_1 = document.getElementById('link_1')
const link_2 = document.getElementById('link_2')
const link_3 = document.getElementById('link_3')
const link_4 = document.getElementById('link_4')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
)

function displayText() {
    const text_display = generateText(14)
    const text_link_1 = generateText(7)
    const text_link_2 = generateText(14)
    const text_link_3 = generateText(4)
    const text_link_4 = generateText(6)

    titleDisplay.innerText = text_display
    bodyDisplay.innerText = text_display

    link_1.innerText = text_link_1
    link_2.innerText = text_link_2
    link_3.innerText = text_link_3
    link_4.innerText = text_link_4
}

// window.onload = displayPW()

setInterval(displayText, 200)

function generateText(characterAmount) {
    let charCodes = LOWERCASE_CHAR_CODES.concat(
        UPPERCASE_CHAR_CODES).concat(
            UPPERCASE_CHAR_CODES).concat(
                SYMBOL_CHAR_CODES).concat(
                    NUMBER_CHAR_CODES)

    const textCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        textCharacters.push(String.fromCharCode(characterCode))
    }
    return textCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}
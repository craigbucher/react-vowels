// DisplayWord.jsx

function DisplayWord(props) {

    // Initiate a counter
    let count = 0

    // Function that will highlight and count vowels
    const highlightVowels = () => {
        let elements = []
        let li = [] //holds all elements; acts as word history
        let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

        // Loops through each word in the props.word list
        for (let word of props.word) {
            // Loops through each letter in that word
            for (let i = 0; i < word.length; i++) {
                if (vowels.includes(word[i])) {
                    // If that letter is a vowel, push a span with className="vowel" to the elements array
                    // in index.css, create a style for .vowel so that those letters are red

                }

            }

        }

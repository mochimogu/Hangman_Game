import { useState, useEffect } from "react"
import axios from 'axios';




export default function Game() {

    const [guess, setGuess] = useState([]);
    const [numGuess, setNumGuess] = useState(0);

    async function getRandomWord() {

        axios.get(`https://api.api-ninjas.com/v1/randomword`, {
            headers : {
                'X-Api-Key' : process.env.REACT_APP_APININJA
            }
        })
        .then((response) => {
            
            console.log(response.data.word)
            let guessWord = response.data.word[0];
            // console.log(guessWord[0]);

            let array = [];
            let visiArray = [];

            for(let i = 0; i < guessWord.length; i++) {
                array.push(guessWord[i].toUpperCase());
                visiArray.push(false);
            }
            
            setGuess(array);

        })
        .catch((error) => {
            console.log(error);
        })
    }

    const [guessedLetters, setGuessedLetters] = useState([]); // Correct guesses
    const [wrongGuesses, setWrongGuesses] = useState([]); // Incorrect guesses

    const checkLetter = (letter) => {        
        for(let i = 0; i < guess.length; i++) {
            
            if(guess.includes(letter)) {
                console.log("match");
                setGuessedLetters([...guessedLetters, letter]);
            } else {
                console.log("not match");
                setWrongGuesses([...wrongGuesses, letter]);
                setNumGuess(numGuess+1);

            }
        }

    }

    const renderWord = () => {

        return guess.map((letter, index) => 
          guessedLetters.includes(letter) ? letter : "_"
        ).join(" ");
      };

      const renderWrongWord = () => {

        return wrongGuesses.map((letter, index) => 
          guess.includes(letter) ? "" : letter
        ).join(" ");
      };

    // console.log(guess);

    return (
        <div>
            <h1>Game</h1>
            <div>
                <div>
                    {/* the hangman and the dashes */}
                    <div>
                        {/* the wrong letters */}
                    </div>
                </div>
                <div>
                    {/* the inputs */}
                    {/* <input type="button" value="Reroll"/> */}
                    <div>
                        <input type="button" value="Play" onClick={getRandomWord} />
                    </div>
                    <div>
                        <span>{numGuess}</span>
                    </div>
                    <div>
                        <h1>{renderWord()}</h1>
                    </div>
                    <div>
                        <h3>{renderWrongWord()}</h3>
                    </div>
                    <div>
                        <input type="button" value="Q" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="W" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="E" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="R" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="T" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="Y" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="U" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="I" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="O" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="P" onClick={(e) => checkLetter(e.target.value)}/>
                    </div>
                    <div>
                        <input type="button" value="A" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="S" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="D" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="F" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="G" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="H" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="J" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="K" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="L" onClick={(e) => checkLetter(e.target.value)}/>
                    </div>
                    <div>
                        <input type="button" value="Z" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="X" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="C" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="V" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="B" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="N" onClick={(e) => checkLetter(e.target.value)}/>
                        <input type="button" value="M" onClick={(e) => checkLetter(e.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    )


}



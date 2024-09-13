import { useState } from "react"





export default function Game() {

    const [guess, setGuess] = useState('')

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
                    <input type="text" maxLength={1}/>
                    <input type="button" value="Guess"/>
                </div>
            </div>
        </div>
    )


}



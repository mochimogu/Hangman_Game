import { useState } from 'react'
import styles from '../style/nav.module.css'


export default function Nav() {



    return (
        <div>
            <nav>
                <a href='/'>HangMan</a>
                <div>
                    <button>Dropdown</button>
                    <div>
                        <a href="/game/play">Play</a>
                        <a href="/">LeaderBoard</a>
                        <a href="/">Login</a>
                    </div>
                </div>
            </nav>
        </div>
    )


}






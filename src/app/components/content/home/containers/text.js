'use client'
import Typewriter from 'typewriter-effect'

export default function TextContainer(){
    return (
        <div>
            <h1>
                <Typewriter
                    options={{
                        strings: ['Hi, I\'m Richmond', 'Welcome to my page.'],
                        autoStart: true,
                        loop: true,
                        delay: 50
                    }}
                />
            </h1>
        </div>
    )
}

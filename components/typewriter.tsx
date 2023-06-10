'use client';

import Typewriter from "typewriter-effect";

export default function TypewriterComponent() {
    return (
        <div className="font-sans text-4xl text-white">
            <Typewriter
                options={{
                    strings: ['I am a backend developer.', 'I am a programmer.', 'I work mostly with Python.', 'I do gaming.'],
                    autoStart: true,
                    loop: true,
                    delay: 150,
                }}
            />
        </div>
    )
}

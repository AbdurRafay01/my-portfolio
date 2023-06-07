'use client';

import Typewriter from "typewriter-effect";

export default function TypewriterComponent() {
    return (
        <div className="font-sans underline decoration-red-700 text-4xl">
            <Typewriter
                options={{
                    strings: ['I am a backend developer', 'I am a programmer', 'I work mostly in Python', 'I do gaming'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    )
}

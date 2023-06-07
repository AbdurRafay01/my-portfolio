'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
    ReactDOM.preconnect(href: "https://fonts.googleapis.com")
    ReactDOM.preconnect(href: "https://fonts.gstatic.com", {crossOrigin: 'anonymous'})
    
    return null;
}


// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Birthstone+Bounce:wght@500&display=swap" rel="stylesheet">

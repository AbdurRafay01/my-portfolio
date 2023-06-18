import { NextResponse } from "next/server";


export async function GET(request: Request) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }
    const resp = await fetch('https://api.ipify.org?format=json', requestOptions);
    const data = await resp.json();

    return NextResponse.json({ data });
}

/* 
mlops
*/

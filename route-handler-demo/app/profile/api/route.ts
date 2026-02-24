import { NextResponse } from "next/server"
import { headers } from "next/headers"


export async function GET (request:Request) {
    // const requestHeaders = new Headers(request.headers)
    // console.log(requestHeaders.get("Authorization"))

    const headerList = await headers()
    console.log(headerList.get("Authorization"))    
    return new Response ("profile api data")
}
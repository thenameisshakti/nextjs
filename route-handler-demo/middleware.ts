import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    const response = NextResponse.next()
    const themePreference = request.cookies.get("theme")
    if(!themePreference){
        response.cookies.set("theme", "light")
    }
    return response
     
   

}

// we also have rewrie things

export const config = {
    matcher: '/profile'
}
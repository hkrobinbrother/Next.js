import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {

    const currentCookies = request.cookies.get("nextjs-token");
    console.log(currentCookies.value)


    const dummyUser = {
        role: "user",
        email: "test@example.com"
    }
    let isServicePage = request.nextUrl.pathname.startsWith("/services");
    let isAdmin = dummyUser.role === "admin";
   if(isServicePage && !isAdmin) {
    return NextResponse.redirect(new URL("/login", request.url))
   }
  return NextResponse.next()
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 

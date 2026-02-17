"use client"
import { usePathname } from "next/navigation"
export default function NotFound() {
    const pathName = usePathname()
    const split =  pathName.split('/')
    console.log(split)
    const productId = pathName.split('/')[2]
    const reviewId = pathName.split('/')[4]
    
    return (
        <div>
            <h2> 400</h2>
            <h1> review {reviewId} not found for {productId}</h1>
        </div>
    )
}
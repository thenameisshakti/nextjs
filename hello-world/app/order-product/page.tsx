"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function OrderProduct() {

  const router = useRouter()

  const handleClick = () => {
    console.log("order placed")
    router.replace('/') 
  }
  return (
    <>
    <h1> order Product</h1>
    <button onClick={handleClick}>Place Order button</button>
    </>
  )
}
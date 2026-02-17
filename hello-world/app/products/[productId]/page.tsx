import Link from "next/link"
export default async function ProductDetails({params}: {params: Promise <{productId: string}>}) {
    const id = (await params).productId
    return (
    <>
    <h1> {`detail about the prodect id ${id}`}</h1>
        <Link  href="/" > Back to Home</Link>
    </>
)}
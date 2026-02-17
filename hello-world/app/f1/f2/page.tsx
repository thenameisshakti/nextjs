import Link from "next/link"
export default function f2() {
    return <>
    <h1>inner F2 page</h1>
    <Link href={'/f5'}>go to F5</Link>
    </>
}
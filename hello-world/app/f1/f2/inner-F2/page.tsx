import Link from "next/link";

export default function innerF2() {
    return (
        <>
        <h1>Inner page F2</h1>
        <div>
            <Link href="/f5">go to f2</Link>
        </div>
        </>
    )
}
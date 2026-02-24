'use client'
import { useState } from "react"

export default function Dashboard() {

    const [name, setName] = useState("shakti")
    console.log("rendering ")
    return (
        <div>
            <h1> this is dashboard page </h1>
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}
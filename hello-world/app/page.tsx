
import Link from "next/link";

export default function Home() {
  return (
  <>
  <h1>Welcome to our home page</h1>
  <Link href="/blog"> Blog </Link>
  <h1> welcome bakc to home page</h1>
  <Link href="/products"> Product</Link>
  <Link href = "/articles/breaking-news-123?lang=en">Read in English</Link>
  <Link href = "/articles/breaking-news-123?lang=fr">Read in french</Link>
  </>
  )
  }
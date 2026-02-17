import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog page",
  },
};
export default async function Blog() {
    await new Promise ((resolve) => {
        setTimeout(() => {
            resolve("intentional delay")
        }, 2000)
    })
  return (
    <>
      <h1> this is Blog  page </h1>
    </>
  );
}

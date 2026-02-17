
import { notFound,redirect } from "next/navigation";
function getRondomInt(count: number) {
  return Math.ceil(Math.random() * count)
}
export default async function reviewViews({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) {

  const random = getRondomInt(2)
  if(random === 1){
    throw new Error("Error loading review")
  }
  const rid = (await params).reviewId;
  const pid = (await params).productId;
  if( parseInt(rid)> 1000){
  //  return  notFounxd()
  redirect("/order-product")

  }
  return <h1> {`this is the review ${rid} of your products ${pid}`}</h1>;
}

function getRondomInt(count: number) {
    return Math.ceil(Math.random() * count)
   }


export default function ProductDetailsLayout (
    {
        children
    }: {
        children: React.ReactNode;
    }
) {

    const random = getRondomInt(2)
    if(random === 1){
        throw new Error("Error loading product")
    }
    return (
        <>
         <div> 
            {children}
            <h2 style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}> 
               feature Product
            </h2>
         </div>
        </>
    )
}
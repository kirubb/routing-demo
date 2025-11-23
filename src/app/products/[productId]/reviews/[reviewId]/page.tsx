import {notFound, redirect} from "next/navigation"


function getRandomInt(count:number){
    return Math.floor(Math.random()*count)
}



interface ReviewPageProps{
    params: Promise<{
        productId: string;
        reviewId: string;
    }>;
}


export default async function ProductReviews({params}: ReviewPageProps) {
    
    // const random = getRandomInt(2);
    // if (random===1){
    //     throw new Error("Error Loading Review");
    // }
    
    const {productId, reviewId} = await params




    if (parseInt(reviewId) > 1000){
        //notFound();
        redirect("/products")
    }
    return ( 
    <div>
        <h1>Review {reviewId} for product {productId}</h1>
    
    </div>
  );
}

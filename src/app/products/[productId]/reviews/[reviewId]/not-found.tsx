
"use client"

import {usePathname} from "next/navigation"



export default function NotFound() {
    const pathname=usePathname();
    const productId= pathname.split("/")[2]
    const reviewId=pathname.split("/")[4]

  return ( 
    <div>Review {reviewId} Not Found for Product {productId} </div>
  );
}

// cannot use params here because this is a static not-found page
// the params are only available in the page that calls notFound()
//hence we use usePathname or other hooks in such cases and we must declare it 
// as a client component.

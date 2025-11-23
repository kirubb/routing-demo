import Link from 'next/link'

export default function Reviews() {
  return ( 
    <div>Reviews
        {" "}
        <Link href="/products/123/reviews/456">
        Link to product review
        
      </Link>

    </div>
  );
}

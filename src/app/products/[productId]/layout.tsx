function getRandomInt(count:number){
    return Math.floor(Math.random()*count)
}


export default function ProductDetailsLayout({children}: {children:React.ReactNode;}) {
  
  const random = getRandomInt(2);
    if (random===1){
        throw new Error("Error Loading Product");
    }
  
  return ( 
  <div>
    {children}
    <h1>Product Details Layout / Featured Products</h1>
  </div> 
  );
}

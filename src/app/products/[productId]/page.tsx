import { Metadata} from 'next';


export const generateMetadata = async ({params} : ProductPageProps) : Promise<Metadata> =>{
  const id = (await params).productId;


  const title = await new Promise((resolve) => {
    
    //This is just trying to simulate an API call
    setTimeout(()=>{
      resolve(`Product ${id} Page`)
    },100)
  })
  return {
    title: `Product ${id} Page`,
    description: `This is the product ${id} page description`,
  }
}


interface ProductPageProps {
  params: Promise<{ 
    productId: string;
  }>; 
  // Params is a promise object which resolves to a object and first object is productId of string type
}

export default async function ProductDetails({ params }: ProductPageProps) {
  const { productId } = await params;


  return (
    <div>
      <h1>Product details {productId}</h1>
    </div>
  );
}


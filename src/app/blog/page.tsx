import {Metadata} from "next";

export const metadata: Metadata = {
  title: {
    absolute:"Blog"
  }
}


export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(()=>{
      resolve("Intentional Delay")
    },2000);
  });
  return ( 
    <div>My Blog</div>
  );
}

// import { readFileSync } from 'fs';
import fs from 'fs/promises';
import Link from 'next/link';
import path from 'path';
// import product from '../data/dummy-backend.json'

function HomePage(props){

  const { products} = props;
  return(
   
    <div>
      {/* <h1>The Home Page</h1> */}
      <ul>
        {products.map((product) =>(
          <li key={product.id}> <Link href={`/products/${product.id}`}></Link>
            {product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  await fs.readFile(filePath);
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());



  if(!data){
    return{
      redirect:{
        destination: '/no-data'
      }
    }
  }

  if(data.products.length === 0){
    return{ notFound : true};
  }


  return{
    props:{
      // products:[{id: 'p1', title: 'Product 1' }],
      products: data.products
    },
    revalidate:10,
  };
}

export default HomePage;
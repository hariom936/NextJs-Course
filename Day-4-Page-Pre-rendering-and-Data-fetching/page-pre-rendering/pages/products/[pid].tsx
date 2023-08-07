import { Fragment } from "react";
import fs from 'fs/promises';
import path from 'path';


function ProductDetailsPage(props) {
    // useEffect();

    const { loadedProduct } = props;

    if(!loadedProduct){
        return <p>Loading ...</p>
    }

    return (
        <Fragment>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </Fragment>
    );
}

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    await fs.readFile(filePath);
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());

    return data;
}

export async function getStaticProps(context) {
    const { params } = context;

    const productId = params.pid;
    
    // console.log("data", data);
    const data = await getData();

    const product = data.products.find(product => product.id === productId);

    if(!product){
        return {notFound: true};
    }


    return {
        props: {
            loadedProduct: product,
        },
    };
}

export async function getStaticPaths() {
    const data = await getData();

    const ids = data.products.map(product => product.id);

    const pathWithParams = ids.map((id) =>({
        params: {pid: id}
    }));

    return {
        paths: pathWithParams,
        // [
        //     { params: { pid: 'p1' } },
        //     // { params: { pid: 'p2' } },
        //     // { params: { pid: 'p3' } },
        // ],
        fallback: true,
    };
}

export default ProductDetailsPage;
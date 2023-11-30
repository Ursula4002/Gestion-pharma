import ProductPreview from "../components/product-preview/product-preview.jsx";
import productService from "../models/services/productService.js";

function ProductsList(){
    const data = productService.getProducts();
    return(
        <>
        <ul>
            {data.map((product, index) => (
                <li key={index}>
                    <ProductPreview product={product} seeMore={false}></ProductPreview>
                </li>
           ))}
        </ul>
        </>
    );
}

export default ProductsList;
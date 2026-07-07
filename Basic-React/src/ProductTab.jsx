import Product from "./Product.jsx";
function ProductTab(){
    let features=["hi-tech","durable","fast"];
    return (
        <>
       <Product title="Phone" price={30000} features={features} />
         <Product title="Laptop" price={65000} features={features} />
        </>
    );
}
export default ProductTab;
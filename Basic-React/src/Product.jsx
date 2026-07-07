import "./Product.css";

function Product({ title, price, features }) {
    let style={backgroundColor: price>30000 ? "red" : "green", color:"white", padding:"10px", margin:"10px"};
    return (
        <div className="Product" style={style}>
            <h3 style={style}>
                Product: {title}, Price:{price>30000 ? "Expensive" : "Affordable" }
            </h3>

            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
}

export default Product;
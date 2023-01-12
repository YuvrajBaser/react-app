import { Link, useParams } from "react-router-dom";

var OrdersSingleProduct = ({ data }) => {
    let allProducts = data.orders.nodes;
    const { orderNumber } = useParams();
    const { title } = useParams();
    console.log(orderNumber, title);

    const order = allProducts.filter((allProducts) => (+allProducts.orderNumber === +orderNumber));
    // console.log(order.length);
    let products;
    if (order.length > 0) {
        products = order[0].lineItems.nodes;
        // console.log(orderNumber, products);
    }
    let singleProduct = products.filter((products) => (products.title === title))
    console.log(singleProduct.length);

    return (
        <div className="container height">
            <div className="card">
                <img src="https://cdn-icons-png.flaticon.com/256/679/679922.png"></img>

                <h1 className="header">Product Details</h1>
                <div className="center">
                    <button className="btn"><Link className="Link" to={`/Orders/${orderNumber}`}><h3>Go Back</h3></Link></button>
                    <button className="btn"><Link className="Link" to={`/`}><h3>Show Profile</h3></Link></button>
                </div>
                <div>
                    {
                        singleProduct.map((key) => {
                            return (
                                <div>
                                    <h4>Product Title: {key.title}</h4>
                                    <h4>Product Quantity: {key.quantity}</h4>
                                    <h4>Total Price: {key?.originalTotalPrice.currencyCode + " " + key?.originalTotalPrice.amount}</h4>
                                    <h4>Discounted Total Price: {key?.discountedTotalPrice.currencyCode + " " + key?.discountedTotalPrice.amount}</h4>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );

}
export default OrdersSingleProduct;
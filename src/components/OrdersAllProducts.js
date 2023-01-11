import { Link, useParams } from "react-router-dom";

var OrdersAllProducts = ({ data }) => {
    let allProducts = data.orders.nodes;
    const { orderNumber } = useParams();
    const order = allProducts.filter((allProducts) => (+allProducts.orderNumber === +orderNumber));
    // console.log(order.length);
    let products;
    if (order.length > 0) {
        products = order[0].lineItems.nodes;
        // console.log(orderNumber, products);
    }
    return (
        <div className="container">
            <h1 className="header" >All Products</h1>
            <div className="center">
                <button className="btn"><Link className="Link" to={"/Orders"}><h3>Go Back</h3></Link></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Product Title</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Discounted Total Price</th>
                        <th>More Details</th>
                    </tr>
                </thead>
                {products.map((key, index) => {
                    return (
                        <tbody>
                            <tr>
                                <td>{key?.title}</td>
                                <td>{key?.quantity}</td>
                                <td>{key?.originalTotalPrice.currencyCode + " " + key?.originalTotalPrice.amount}</td>
                                <td>{key?.discountedTotalPrice.currencyCode + " " + key?.discountedTotalPrice.amount}</td>
                                <td><button className="btn"><Link className="Link" to={`/Orders/${orderNumber}/${key?.title}`}><h3>Show Product Details</h3></Link></button></td>
                                {/* <td><Link to={`/Orders/${orderNumber}/${index}`}>Click</Link></td> */} {/*can be done with the index of map also*/}
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
}
export default OrdersAllProducts;
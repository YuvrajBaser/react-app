import { useParams } from "react-router-dom";

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
        <div>
            <h1>Single Product component</h1>
            <table>
                <thead>
                    <tr>
                        <th>Product Title</th>
                        <th>Quantity</th>
                        <th>Variant</th>
                        <th>Total Price</th>
                        <th>Discounted Total Price</th>
                    </tr>
                </thead>
                {singleProduct.map((key, value) => {
                    return (
                        <tbody>
                            <tr>
                                <td>{key?.title}</td>
                                <td>{key?.quantity}</td>
                                <td>{key?.variant}</td>
                                <td>{key?.originalTotalPrice.currencyCode + " " + key?.originalTotalPrice.amount}</td>
                                <td>{key?.discountedTotalPrice.currencyCode + " " + key?.discountedTotalPrice.amount}</td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );

}
export default OrdersSingleProduct;
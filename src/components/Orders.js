import { Link } from "react-router-dom";

var Orders = ({ data }) => {
    let orders = data.orders.nodes;
    return (
        <div className="container">
            <h1 className="header">Orders</h1>
            <Link className="Link btn-back" to={"/"}><img src="arrow-left.png"></img></Link>
            <table>
                <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Shipping Address</th>
                        <th>Email</th>
                        <th>Financial Status</th>
                        <th>Processed At</th>
                        <th>Product Details</th>
                    </tr>
                </thead>
                {orders.map((key, value) => {
                    return (
                        <tbody>
                            <tr>
                                <td>{key?.orderNumber}</td>
                                <td>{key?.shippingAddress.address1}</td>
                                <td>{key?.email}</td>
                                <td>{key?.financialStatus}</td>
                                <td>{key?.processedAt}</td>
                                <td><button className="btn"><Link className="Link" to={`/Orders/${key?.orderNumber}`}><h3>Show Products</h3></Link></button></td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
}
export default Orders;
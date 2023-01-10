import { Link } from "react-router-dom";

var Orders = ({ data }) => {
    let orders = data.orders.nodes;
    return (
        <div className="App-header">
            <h1>Orders</h1>
            <Link to={"/"}>go back</Link>
            <table>
                <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Shipping Address</th>
                        <th>Email</th>
                        <th>Financial Status</th>
                        <th>Processed At</th>
                        <th>Order Items</th>
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
                                <td><Link to={`/Orders/${key?.orderNumber}`}>Click</Link></td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
}
export default Orders;
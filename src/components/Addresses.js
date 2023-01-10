import { Link } from "react-router-dom";

var Addresses = ({ data }) => {
    let defaultAddresses = data.defaultAddress;
    let addresses = data.addresses.nodes;
    return (
        <div className="App-header">
            <img src="phone-book.png" />
            <Link to={"/"}>go back</Link>
            <h1>Addresses</h1>
            <h4>Default Address</h4>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>Company</th>
                            <th>Country</th>
                            <th>Country Code</th>
                            <th>Province</th>
                            <th>Province Code</th>
                            <th>Zip Code</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{defaultAddresses.name}</td>
                            <td>{defaultAddresses.address1 + ", " + defaultAddresses.address2}</td>
                            <td>{defaultAddresses.phone}</td>
                            <td>{defaultAddresses.city}</td>
                            <td>{defaultAddresses.company}</td>
                            <td>{defaultAddresses.country}</td>
                            <td>{defaultAddresses.countryCode}</td>
                            <td>{defaultAddresses.province}</td>
                            <td>{defaultAddresses.provinceCode}</td>
                            <td>{defaultAddresses.zip}</td>
                        </tr>
                    </tbody>

                </table>
            </div>
            <h4>Addresses</h4>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Company</th>
                        <th>Country</th>
                        <th>Country Code</th>
                        <th>Province</th>
                        <th>Province Code</th>
                        <th>Zip Code</th>
                    </tr>
                </thead>
                {addresses.map((key, value) => {
                    return (
                        <tbody>
                            <tr>
                                <td>{key?.name}</td>
                                <td>{key?.address1 + ", " + key?.address2}</td>
                                <td>{key?.phone}</td>
                                <td>{key?.city}</td>
                                <td>{key?.company}</td>
                                <td>{key?.country}</td>
                                <td>{key?.countryCode}</td>
                                <td>{key?.province}</td>
                                <td>{key?.provinceCode}</td>
                                <td>{key?.zip}</td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
}
export default Addresses;
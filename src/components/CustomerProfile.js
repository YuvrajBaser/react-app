import { Link } from "react-router-dom"

var CustomerProfile = ({ data }) => {
    return (
        <div className="App-header">
            <img src="profile-user.png"></img>
            <h1>Customer Profile</h1>
            <h4>First Name: {data.firstName}</h4>
            <h4>Last Name: {data.lastName}</h4>
            <h4>Phone: {data.phone == null ? 'not provided' : data.phone}</h4>
            <Link className="Link" to={"/Addresses"}><h3>Show Addresses <img src="exit-top-right.png" /></h3></Link>
            <Link className="Link" to={"/Orders"}><h3>Show Orders <img src="exit-top-right.png" /></h3></Link>
        </div>
    );
}
export default CustomerProfile;
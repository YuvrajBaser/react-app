import { Link } from "react-router-dom"

var CustomerProfile = ({ data }) => {
    return (
        <div className="container height">
            <div className="card">
                <img className="icon" src="profile-user.png"></img>
                <h1 className="header">Customer Profile</h1>
                <h4>First Name: {data.firstName}</h4>
                <h4>Last Name: {data.lastName}</h4>
                <h4>Phone: {data.phone == null ? 'not provided' : data.phone}</h4>
                <button className="btn"><Link className="Link" to={"/Addresses"}><h3>Show Addresses <img src="exit-top-right.png" /></h3></Link></button>
                <button className="btn"><Link className="Link" to={"/Orders"}><h3>Show Orders <img src="exit-top-right.png" /></h3></Link></button>
            </div>
        </div>
    );
}
export default CustomerProfile;

import './App.scss';
import { useState, useEffect } from 'react';

import CustomerProfile from './components/CustomerProfile';
import Addresses from './components/Addresses';
import Orders from './components/Orders';
import OrdersAllProducts from './components/OrdersAllProducts';
import OrdersSingleProduct from './components/OrdersSingleProduct';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
let api_url = 'https://cdn.shopify.com/s/files/1/0017/3103/5196/files/ExampleQuery_1.json?v=1673248503#';

function App() {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  const fetchData = async (api_url) => {
    try {
      const response = await fetch(api_url);
      data = await response.json();
      setData(data);
      setLoading(true);
    } catch (error) {
      setError(error);
      setLoading(true);
    }
  }

  useEffect(() => {
    fetchData(api_url);
  }, []);

  if (error) {
    return <div>{error.message}</div>
  } else if (!loading) {
    return <div>Loading...</div>
  } else {

    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CustomerProfile data={data.data.customer} />} />
            <Route path="/Addresses" element={<Addresses data={data.data.customer} />} />
            <Route path="/Orders" element={<Orders data={data.data.customer} />} />

            <Route path="/Orders/:orderNumber" element={<OrdersAllProducts data={data.data.customer} />} />
            <Route path="/Orders/:orderNumber/:title" element={<OrdersSingleProduct data={data.data.customer} />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;

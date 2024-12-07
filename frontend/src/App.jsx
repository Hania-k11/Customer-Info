import { useState, useEffect } from "react";
import axios from "axios";

import CustomerForm from "./components/CustomerForm";
import CustomerList from "./components/CustomerList";

const App = () => {
  const [customers, setCustomers] = useState([]);

  // Fetch customers on component mount
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/customers");
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };
    fetchCustomers();
  }, []);

  const addCustomer = async (customer) => {
    try {
      await axios.post("http://localhost:5000/api/customers", customer);
      const { data } = await axios.get("http://localhost:5000/api/customers");
      setCustomers(data);
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen space-y-8">
      <h1 className="text-2xl font-bold">Customer Information</h1>
      <CustomerForm addCustomer={addCustomer} />
      <CustomerList customers={customers} />
    </div>
  );
};

export default App;

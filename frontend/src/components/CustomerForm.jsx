import { useState } from "react";

const CustomerForm = ({ addCustomer }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCustomer(formData);
    setFormData({ name: "", email: "", contact: "" });
  };

  return (
    <form className="space-y-4 p-4 bg-white shadow-md rounded" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="block w-full px-3 py-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="block w-full px-3 py-2 border rounded"
        required
      />
      <input
        type="text"
        name="contact"
        placeholder="Contact"
        value={formData.contact}
        onChange={handleChange}
        className="block w-full px-3 py-2 border rounded"
        required
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Add Customer
      </button>
    </form>
  );
};

export default CustomerForm;

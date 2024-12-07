const CustomerList = ({ customers }) => (
    <table className="min-w-full table-auto bg-white shadow-md rounded">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Contact</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, index) => (
          <tr key={index} className="border-t">
            <td className="px-4 py-2">{customer.Name}</td>
            <td className="px-4 py-2">{customer.Email}</td>
            <td className="px-4 py-2">{customer.Contact}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  
  export default CustomerList;
  
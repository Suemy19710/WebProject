import React from "react";

const CustomerItem = ({ customer }) => {
  return (
    <li className="customer-item">
      <h3>{customer.nameCustomer}</h3>
      <p>Email: {customer.emailCustomer}</p>
      <p>Phone: {customer.phoneCustomer}</p>
      <p>Content: {customer.contentCustomer}</p>
      <button>View Details</button>
    </li>
  );
};

export default CustomerItem;

import React from "react";
import CustomerItem from "./CustomerItem";
import '../../styles/admin/CustomerList.scss';
const CustomerList = ({ customers }) => {
  return (
    <div className="customer-list">
      {customers.length === 0 ? (
        <p>No customers registered yet.</p>
      ) : (
        <ul>
          {customers.map((customer) => (
            <CustomerItem key={customer._id} customer={customer} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomerList;

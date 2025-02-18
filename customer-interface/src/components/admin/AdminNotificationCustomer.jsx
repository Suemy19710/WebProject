import React, { useEffect, useState } from "react";
import { getAllCustomers } from "../../services/api";
import '../../styles/admin/AdminDashboard.scss';
import '../../styles/admin/CustomerList.scss';

const AdminNotificationCustomer = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch customers when the component mounts
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await getAllCustomers();
        setCustomers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching customers", error);
        setLoading(false);
      }
    };
    fetchCustomers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <h2>Customer Registrations</h2>
      <CustomerList customers={customers} />
    </div>
  );
};

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

export default AdminNotificationCustomer;


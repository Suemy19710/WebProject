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
        const response = await fetch('https://luatkimngoc.onrender.com/api/customers',  
        { method: 'GET', 
          headers: {
            'Content-Type': 'application/json'
          }

        });
if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // add read status to each customer 
        const updatedCustomers = data.map(customer => ({
          ...customer, 
          isRead: customer.isRead || false
        }));

        updatedCustomers.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
        setCustomers(updatedCustomers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching customers", error);
        setLoading(false);
      }
    };
    fetchCustomers();
  }, []);

  const handleReadStatus = async (customerId) => {
    try {
      const customer = customers.find(c => c._id === customerId);
      const newStatus = !customer.isRead;

      // Optimistic update
      setCustomers(prevCustomers =>
        prevCustomers.map(c =>
          c._id === customerId ? { ...c, isRead: newStatus } : c
        )
      );

      // Update in database
      const response = await fetch(`https://luatkimngoc.onrender.com/api/customers/${customerId}/read-status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isRead: newStatus })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedCustomer = await response.json();
      // Update state with server response
      setCustomers(prevCustomers =>
        prevCustomers.map(c =>
          c._id === customerId ? updatedCustomer.customer : c
        )
      );
    } catch (error) {
      // Revert on error
      setCustomers(prevCustomers =>
        prevCustomers.map(c =>
          c._id === customerId ? { ...c, isRead: !c.isRead } : c
        )
      );
      setError("Failed to update customer status");
      console.error("Error updating read status", error);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="adminNotificationCustomer-container">
      <h2>Đăng ký tư vấn</h2>
      <div className="customer-columns">
        <CustomerList 
          title ="Thông báo đăng ký mới"
          className="customer-columns-item"
          customers={customers.filter(c => !c.isRead)}
          onReadStatus= {handleReadStatus}
          />
        <CustomerList
          title="Thông báo đăng ký đã xem"
          className="customer-columns-item"
          customers={customers.filter(c => c.isRead)}
          onReadStatus={handleReadStatus}
          />
      </div>
    </div>
  );
};

const CustomerItem = ({ customer, onReadStatus }) => {
  return (
    <li className="customer-item">
      <div className="customer-details">
        <h3>{customer.nameCustomer}</h3>
        <p>Email: {customer.emailCustomer}</p>
        <p>Phone: {customer.phoneCustomer}</p>
        <p>Content: {customer.contentCustomer}</p>
        <p>Registered: {new Date(customer.createdAt).toLocaleString()}</p>
      </div>
      <div className="checkbox-container">
        <input type="checkbox"
              checked={customer.isRead}
              onChange={() => onReadStatus(customer._id)}
               />
        <label>Đã xem</label>
      </div>
    </li>
  );
};

const CustomerList = ({ title, customers, onReadStatus }) => {
  return (
    <div className="customer-column">
      <h3>{title}</h3>
      <div className="customer-list">
        {customers.length === 0 ? (
          <p>Không có thông báo mới.</p>
        ) : (
          <ul>
            {customers.map((customer) => (
              <CustomerItem 
                key={customer._id} 
                customer={customer}
                onReadStatus={onReadStatus}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminNotificationCustomer;


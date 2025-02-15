import React, { useEffect, useState } from "react";
import { getAllCustomers } from "../../services/api";
import CustomerList from "./CustomerList";
import '../../styles/admin/AdminDashboard.scss';

const AdminDashboard = () => {
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

export default AdminDashboard;

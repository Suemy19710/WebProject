const process.env.API_URL = "https://luatkimngoc.onrender.com/api/customers"; 
// Fetch all customers
export const getAllCustomers = async () => {
  try {
    const response = await fetch(process.env.API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch customers");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

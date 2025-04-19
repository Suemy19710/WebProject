const ServiceService = require('../services/DichVuService');

const uploadService = async (req, res) => {
  const { name, content, category } = req.body;
  if (!name || !category) {
    return res.status(400).send('Missing required fields.');
  }
  try {
    const savedService = await ServiceService.saveService({ name, content, category });
    res.status(200).send({ message: 'Service saved', serviceId: savedService._id });
  } catch (error) {
    console.error('Error saving service:', error);
    res.status(500).send('Error saving service');
  }
};

const getAllServices = async (req, res) => {
  try {
    const services = await ServiceService.getAllServices();
    res.status(200).send(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).send('Error fetching services');
  }
};

const getService = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await ServiceService.getServiceById(id);
    res.status(200).send(service);
  } catch (error) {
    console.error('Error fetching service:', error);
    res.status(404).send('Service not found');
  }
};

const updateService = async (req, res) => {
  const { id } = req.params;
  const { name, content, category } = req.body;
  try {
    const updatedService = await ServiceService.updateService(id, { name, content, category });
    res.status(200).send({ message: 'Service updated', service: updatedService });
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).send('Error updating service');
  }
};

const deleteService = async (req, res) => {
  const { id } = req.params;
  try {
    await ServiceService.deleteService(id);
    res.status(200).send({ message: 'Service deleted' });
  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).send('Error deleting service');
  }
};

const uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  try {
    const imageUrl = `/uploads/${req.file.filename}`;
    res.status(200).send({ url: imageUrl });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).send('Error uploading image');
  }
};

module.exports = {
  uploadService,
  getAllServices,
  getService,
  updateService,
  deleteService,
  uploadImage,
};
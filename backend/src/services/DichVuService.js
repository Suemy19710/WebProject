const ServiceModel = require('../models/DichVuModel');

const saveService = async (serviceData) => {
  try {
    const newService = new ServiceModel(serviceData);
    const savedService = await newService.save();
    return savedService;
  } catch (error) {
    throw new Error('Error saving service');
  }
};

const getAllServices = async () => {
  try {
    const services = await ServiceModel.find();
    const groupedServices = [];
    const categories = [...new Set(services.map((s) => s.category))];
    categories.forEach((category) => {
      groupedServices.push({
        id: category.toLowerCase().replace(/\s+/g, '-'),
        title: category,
        items: services.filter((s) => s.category === category),
      });
    });
    return groupedServices;
  } catch (error) {
    throw new Error('Error fetching services');
  }
};

const getServiceById = async (id) => {
  try {
    const service = await ServiceModel.findById(id);
    if (!service) {
      throw new Error('Service not found');
    }
    return service;
  } catch (error) {
    throw new Error('Error fetching service');
  }
};

const updateService = async (id, serviceData) => {
  try {
    const updatedService = await ServiceModel.findByIdAndUpdate(id, serviceData, { new: true });
    if (!updatedService) {
      throw new Error('Service not found');
    }
    return updatedService;
  } catch (error) {
    throw new Error('Error updating service');
  }
};

const deleteService = async (id) => {
  try {
    const deletedService = await ServiceModel.findByIdAndDelete(id);
    if (!deletedService) {
      throw new Error('Service not found');
    }
    return deletedService;
  } catch (error) {
    throw new Error('Error deleting service');
  }
};

module.exports = {
  saveService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};
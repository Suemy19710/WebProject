const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;
const LuatSuService = require('../services/LuatSuService');

// Create a new lawyer
const createLuatSu = async (req, res) => {
  try {
    // Log incoming data for debugging
    console.log('Request body:', req.body);
    console.log('Request files:', req.files);

    // Enhanced validation
    if (!req.body.name) {
      return res.status(400).json({ error: 'Name is required.' });
    }
    if (!req.body.title) {
      return res.status(400).json({ error: 'Title is required.' });
    }
    if (!req.body.phone) {
      return res.status(400).json({ error: 'Phone is required.' });
    }
    if (!req.body.email) {
      return res.status(400).json({ error: 'Email is required.' });
    }
    if (!req.body.expertise) {
      return res.status(400).json({ error: 'Expertise is required.' });
    }
    if (!req.body.experience) {
      return res.status(400).json({ error: 'Experience is required.' });
    }
    if (!req.files || !req.files.image) {
      return res.status(400).json({ error: 'Image is required.' });
    }

    const imageFile = req.files.image;

    // Upload to Cloudinary
    let imageResult;
    try {
      imageResult = await cloudinary.uploader.upload(imageFile.tempFilePath, {
        folder: 'luat-su',
        use_filename: true,
        unique_filename: true,
      });
      console.log('Cloudinary upload successful:', imageResult.secure_url);
    } catch (cloudinaryError) {
      console.error('Cloudinary upload error:', cloudinaryError);
      return res.status(500).json({ error: 'Error uploading image to Cloudinary: ' + cloudinaryError.message });
    }

    const lawyerData = {
      name: req.body.name,
      title: req.body.title,
      phone: req.body.phone,
      email: req.body.email,
      expertise: req.body.expertise,
      experience: req.body.experience,
      image: imageResult.secure_url, // Store Cloudinary URL
      slug: req.body.slug, // Will be overridden by pre-save hook if not provided
    };

    const newLawyer = await LuatSuService.createLuatSu(lawyerData);
    res.status(201).json({ message: 'Lawyer created successfully!', lawyer: newLawyer });
  } catch (error) {
    console.error('Error creating lawyer:', error);
    res.status(500).json({ error: error.message });
  }
};

// Get all lawyers
const getAllLuatSu = async (req, res) => {
  try {
    const lawyers = await LuatSuService.getAllLuatSu();
    if (!lawyers.length) {
      return res.status(404).json({ message: 'No lawyers found.' });
    }
    res.status(200).json(lawyers);
  } catch (error) {
    console.error('Error fetching lawyers:', error);
    res.status(500).json({ error: error.message });
  }
};

// Get a lawyer by ID
const getLuatSuById = async (req, res) => {
  try {
    const lawyer = await LuatSuService.getLuatSuById(req.params.id);
    res.status(200).json(lawyer);
  } catch (error) {
    console.error('Error fetching lawyer by ID:', error);
    res.status(error.message.includes('not found') ? 404 : 500).json({ error: error.message });
  }
};

// Get a lawyer by slug
const getLuatSuBySlug = async (req, res) => {
  try {
    const lawyer = await LuatSuService.getLuatSuBySlug(req.params.slug);
    res.status(200).json(lawyer);
  } catch (error) {
    console.error('Error fetching lawyer by slug:', error);
    res.status(error.message.includes('not found') ? 404 : 500).json({ error: error.message });
  }
};

// Update a lawyer
const updateLuatSu = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, title, phone, email, expertise, experience } = req.body;

    const updateData = { name, title, phone, email, expertise, experience };

    if (req.files && req.files.image) {
      const imageFile = req.files.image;
      let imageResult;
      try {
        imageResult = await cloudinary.uploader.upload(imageFile.tempFilePath, {
          folder: 'luat-su',
          use_filename: true,
          unique_filename: true,
        });
        console.log('Cloudinary upload successful:', imageResult.secure_url);
        updateData.image = imageResult.secure_url;

        // Optionally delete old image from Cloudinary
        const lawyer = await LuatSuService.getLuatSuById(id);
        if (lawyer.image) {
          const publicIdMatch = lawyer.image.match(/\/v\d+\/(.+?)\.\w+/);
          if (publicIdMatch && publicIdMatch[1]) {
            await cloudinary.uploader.destroy(publicIdMatch[1]);
            console.log('Old image deleted from Cloudinary:', publicIdMatch[1]);
          }
        }
      } catch (cloudinaryError) {
        console.error('Cloudinary upload error:', cloudinaryError);
        return res.status(500).json({ error: 'Error uploading image to Cloudinary: ' + cloudinaryError.message });
      }
    }

    const updatedLawyer = await LuatSuService.updateLuatSu(id, updateData);
    res.status(200).json({ message: 'Lawyer updated successfully!', lawyer: updatedLawyer });
  } catch (error) {
    console.error('Error updating lawyer:', error);
    res.status(error.message.includes('not found') ? 404 : 500).json({ error: error.message });
  }
};

// Delete a lawyer
const deleteLuatSu = async (req, res) => {
  try {
    const lawyer = await LuatSuService.getLuatSuById(req.params.id);

    // Delete image from Cloudinary if it exists
    if (lawyer.image) {
      const publicIdMatch = lawyer.image.match(/\/v\d+\/(.+?)\.\w+/);
      if (publicIdMatch && publicIdMatch[1]) {
        try {
          await cloudinary.uploader.destroy(publicIdMatch[1]);
          console.log('Image deleted from Cloudinary:', publicIdMatch[1]);
        } catch (cloudinaryError) {
          console.error('Error deleting image from Cloudinary:', cloudinaryError);
          // Continue with deletion even if image deletion fails
        }
      }
    }

    await LuatSuService.deleteLuatSu(req.params.id);
    res.status(200).json({ message: 'Lawyer deleted successfully.' });
  } catch (error) {
    console.error('Error deleting lawyer:', error);
    res.status(error.message.includes('not found') ? 404 : 500).json({ error: error.message });
  }
};

module.exports = {
  createLuatSu,
  getAllLuatSu,
  getLuatSuById,
  getLuatSuBySlug,
  updateLuatSu,
  deleteLuatSu,
};
import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  publicId: {
    type: String,
    required: true,
  },
  format: {
    type: String,
  },
  category: {
    type: String,
    enum: ['Venues', 'Caterer', 'Gallery'],
    required: true,
  }
}, { timestamps: true });

export default mongoose.models.File || mongoose.model('File', FileSchema);

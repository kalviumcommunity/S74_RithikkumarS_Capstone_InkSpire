import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    default: 'General'
  },
  image: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    default: 0
  },
  platforms: [{
    name: String,
    url: String
  }],
  isFree: {
    type: Boolean,
    default: false
  },
  pages: {
    type: Number
  },
  language: {
    type: String,
    default: 'English'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model('Book', bookSchema);
export default Book;

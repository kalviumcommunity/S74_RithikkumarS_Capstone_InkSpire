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
    default: ''
  },
  genre: {
    type: [String],
    default: []
  },
  coverImage: {
    type: String, 
    default: ''
  },
  rating: {
    type: Number,
    default: 0
  },
  price: {
    amount: {
      type: Number,
      default: 0
    },
    currency: {
      type: String,
      default: 'INR'
    },
    source: {
      type: String,
      default: ''
    },
    buyLink: {
      type: String,
      default: ''
    }
  },
  isFree: {
    type: Boolean,
    default: false
  },
  content: {
    type: [String], 
    default: []
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;

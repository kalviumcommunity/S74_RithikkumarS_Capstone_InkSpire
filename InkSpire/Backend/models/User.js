import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  favoriteBooks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }],
  readingList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }],
  journalEntries: [{
    title: String,
    content: String,
    date: {
      type: Date,
      default: Date.now
    }
  }],
  streak: {
    type: Number,
    default: 0
  },
  lastLogin: {
    type: Date
  }
}, { timestamps: true });

const User=mongoose.model('User',userSchema);
export default User;
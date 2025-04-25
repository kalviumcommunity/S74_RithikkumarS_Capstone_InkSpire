import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Book from './models/Book.js'; 
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  serverApi: { version: '1' }
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch((err) => console.error("❌ Error connecting to MongoDB Atlas:", err));

app.post('/api/books', async (req, res) => {
  const { title, author, description, image, rating, price, platforms, isFree, pages, language } = req.body;

  try {
    const newBook = new Book({
      title,
      author,
      description,
      image,
      rating,
      price,
      platforms,
      isFree,
      pages,
      language,
    });

    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.put('/api/books/:id', async (req, res) => {
  const { title, author, description, image, rating, price, platforms, isFree, pages, language } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, {
      title,
      author,
      description,
      image,
      rating,
      price,
      platforms,
      isFree,
      pages,
      language,
    }, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json(updatedBook);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.delete('/api/books/:id', async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
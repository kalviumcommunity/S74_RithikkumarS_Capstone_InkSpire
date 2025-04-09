import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Book from './models/Book.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/books', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

app.post('/api/books', async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.status(201).json(newBook);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

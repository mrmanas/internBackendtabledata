import Home from "../models/Home";
import { Request, Response } from 'express';

export const createHome = async (req: Request, res: Response) => {
  const { name, email, phone, message } = req.body;

  try {
    // Create a new entry in the Home model
    const home = await Home.create({ name, email, phone, message });
    
    // Send a success response with the created entry
    res.status(201).json({ message: 'Contact form submitted successfully!', home });
  } catch (error) {
    console.error('Error creating contact:', error);
    
    // Send an error response
    res.status(500).json({ error: 'An error occurred while submitting the form.' });
  }
};

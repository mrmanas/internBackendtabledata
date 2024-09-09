import { Request, Response } from 'express';
import Contact from '../models/Contacts';

// Function to create a new contact
export const createContact = async (req: Request, res: Response) => {
  const { name, email, phone, topic, message } = req.body;

  try {
    // Use the Contact model to create a new entry in the database
    const contact = await Contact.create({ name, email, phone, topic, message });
    
    res.status(201).json({ message: 'Contact form submitted successfully!', contact });
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ error: 'An error occurred while submitting the form.' });
  }
};

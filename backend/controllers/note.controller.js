import mongoose from 'mongoose';
import Note from '../models/note.model.js';

// -- get all notes --
export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({});
        res.status(200).json({ success: true, data: notes });
    } catch (error) {
        console.error("Error in Fetching Notes: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// -- get a single note by ID --
export const getNoteById = async (req, res) => {
    const { id } = req.params;
    
    if(mongoose.Types.ObjectId.isValid(id) === false){
        return res.status(404).json({ success: false, message: "Note id is not valid" });
    }
    
    try {
        const note = await Note.findById(id);
        
        if (!note) {
            return res.status(404).json({ success: false, message: "Note not found" });
        }
        
        res.status(200).json({ success: true, data: note });
    } catch (error) {
        console.error("Error in Fetching Note: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// -- create a note --
export const createNote = async (req, res) => {
    //const note = req.body;
    const newNote = new Note(req.body);

    try {
        await newNote.save();
        res.status(201).json({ success: true, data: newNote });
    } catch (error) {
        console.error("Error in Create Note: ", error.message);
        res.status(500).json({ success: false, message: "Server Error! Failed to create note" });
    }
};

// -- update: a specific field in a note --
export const updateNote = async (req, res) => {
    const { id } = req.params;
    
    if(mongoose.Types.ObjectId.isValid(id) === false){
        return res.status(404).json({ success: false, message: "Note id is not valid" });
    }

    const note = req.body;

    try {
        const updatedNote = await Note.findByIdAndUpdate(id, note, { new: true });
        res.status(201).json({ success: true, data: updatedNote });
    } catch (error) {
        console.error("Error in Update Note: ", error.message);
        res.status(500).json({ success: false, message: "Server Error! Failed to update" });
    }
};

// -- delete a note --
export const deleteNote = async (req, res) => {
    const { id } = req.params;
    
    if(mongoose.Types.ObjectId.isValid(id) === false){
        return res.status(404).json({ success: false, message: "Note id is not valid" });
    }

    try {
        await Note.findByIdAndDelete(id);
        res.status(201).json({ success: true, message: "Note deleted" });
    } catch (error) {
        console.error("Error in Delete Note: ", error.message);
        res.status(500).json({ success: false, message: "Server Error! Failed to delete" });
    }
};

// test
export const testNote = (req, res) => {
    res.send("TEST");
};
import express from 'express';
import { getNotes, getNoteById, createNote, updateNote, deleteNote } from '../controllers/note.controller.js';

const router = express.Router();

router.get("/", getNotes); // -- get all notes --
router.get("/:id", getNoteById); // -- get single note by ID --
router.post("/", createNote); // -- create a note --
router.patch("/:id", updateNote); // -- update a note --
router.delete("/:id", deleteNote); // -- delete a note --

export default router;


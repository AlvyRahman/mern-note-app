import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            default: "Untitled"
        },

        content: {
            type: String,
            default: ""
        },

        color: {
            type: String,
            default: "#ffffff"
        }
    },
    {
        timestamps: true
    }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
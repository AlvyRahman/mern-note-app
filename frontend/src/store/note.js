import { create } from 'zustand';

export const useNoteStore = create( (set) => ({
    notes: [],
    
    setNotes: (notes) => set({ notes }),

    createNote: async (newNote) => {
        if(!newNote.title || !newNote.content) 
            return{success: false, message: "Title and content are required."};

        const res = await fetch('/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newNote)
        });

        const data = await res.json();

        set((state) => ({ notes: [...state.notes, data.data] }));

        return { success: true, message: "Note created successfully." };
    },

    fetchNotes: async () => {
        const res = await fetch('/api/notes');
        const data = await res.json();

        set({ notes: data.data });
    },

    fetchNoteById: async (id) => {
        const res = await fetch(`/api/notes/${id}`);
        const data = await res.json();

        return data.data;
    },

    deleteNote: async (id) => {
        const res = await fetch(`/api/notes/${id}`, {
            method: 'DELETE'
        });

        if (res.ok) {
            set((state) => ({ notes: state.notes.filter(note => note._id !== id) }));
            return { success: true, message: "Note deleted successfully." };
        } else {
            return { success: false, message: "Failed to delete note." };
        }
    },

    updateNote: async (id, updatedNote) => {
        const res = await fetch(`/api/notes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedNote),
        });

        const data = await res.json();
        
        if (!data.success) 
            return { success: false, message: data.message };

        // Update the UI state immediately without a page refresh
        set((state) => ({
            notes: state.notes.map((note) => (note._id === id ? data.data : note)),
        }));

        return { success: true, message: "Note updated successfully" };
    }
}));
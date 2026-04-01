import { useNoteStore } from '../store/note';
import { useColorModeValue } from '../components/ui/color-mode';
import { Box, Container, Heading, VStack, HStack, Input, Button, Textarea} from '@chakra-ui/react';
import { Toaster, toaster } from "../components/ui/toaster";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const CreatePage = () => {
  const { id } = useParams(); // Get id from URL
  const isEditMode = (id !== undefined); // Determine if we're in edit mode based on presence of id
  const navigate = useNavigate();

  const colorOptions = [
    '#b45309', // Yellow
    '#dc2626', // Pink
    '#059669', // Green
    '#0369a1', // Blue
    '#6d28d9', // Purple
  ];

  const [newNote, setNewNote] = useState(
    {
      title: "",
      content: "",
      color: "#ffffff"
    }
  );

  const {createNote, fetchNoteById, updateNote} = useNoteStore();

  useEffect(() => {
    if (isEditMode) {
      // Fetch existing note data and populate form
      const fetchNote = async () => {
        const noteData = await fetchNoteById(id);

        if(noteData) {
          setNewNote({
            title: noteData.title,
            content: noteData.content,
            color: noteData.color || "#ffffff"
          });

        }
      };

      fetchNote();
    }
  }, [id, isEditMode]);

  const handleSubmit = async() => {
    if(isEditMode) {
      const { success, message } = await updateNote(id, newNote);
      
      toaster.create({
        title: success ? "Success" : "Error",
        description: message,
        type: success ? "success" : "error",
        closable: true,
      });
    }
    else {
      const {success, message} = await createNote(newNote);
      
      console.log(success, message);

      if (!success) {
        toaster.create({
          title: "Error",
          description: message,
          type: "error", // In v3, use 'type' instead of 'status'
          closable: true,
        });
      } 
      else {
        navigate("/"); // Redirect to home page after successful creation
        
        toaster.create({
          title: "Success",
          description: message,
          type: "success",
          closable: true,
        });
        
        setNewNote({ title: "", content: "", color: "#ffffff" });
      }
    }
  }

  return <Container maxW="900px" py={8}>
    {/* renders the Toaster notifications */}
    <Toaster />

    <VStack spacing={8} align="stretch">
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
        {isEditMode ? `Edit Note ✏️` : `Create new note ✏️`}
      </Heading>

      <Box
        w={"full"} bg={useColorModeValue("gray.100", "gray.800")} 
        p={10} rounded={"lg"} shadow="md"
      >
      <VStack spacing={5} align="center">
        {/* Title Input Field */}
        <Box w={"full"}>
          <Box mb={2} fontSize="sm" fontWeight="medium"></Box>
          <Input
            placeholder="Enter note title..."
            value={newNote.title}
            onChange={(e) => setNewNote({...newNote, title: e.target.value})} // Update title state
            size="lg"
          />
        </Box>

        {/* Content Textarea Field */}
        <Box  w={"full"}>
          <Box mb={2} fontSize="sm" fontWeight="medium"></Box>
          <Textarea
            placeholder="Start typing your note here..."
            value={newNote.content}
            onChange={(e) => setNewNote({...newNote, content: e.target.value})} // Update content state
            rows={10}
            resize="vertical" // Allow user to resize height only
          />
        </Box>

        {/* Color Picker */}
        <Box w={"full"}>
          <Box mb={2} fontSize="sm" fontWeight="medium">Note Color:</Box>

          <HStack spacing={3} align="start">
            {colorOptions.map((color) => (
              <Box 
                key={color}
                w="30px" h="30px" rounded="full" cursor="pointer"
                bg={color}
                border={newNote.color === color ? "3px solid black" : "2px solid transparent"}
                onClick={() => setNewNote({...newNote, color})} // Update color state
              />
            ))}
          </HStack>
        </Box>

        <Button
          colorScheme={useColorModeValue("yellow.300", "yellow.300")}
          p={2}
          onClick={handleSubmit}
        >
          {isEditMode ? `Update Note` : `Create Note`}
        </Button>
      </VStack>
      </Box>
    </VStack>
  </Container>
};

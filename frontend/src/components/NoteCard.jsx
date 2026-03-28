import React from 'react';
import { Box, Heading, HStack, IconButton, Text } from '@chakra-ui/react';
import { MdDelete } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { useNoteStore } from '../store/note';
import { Toaster, toaster } from "../components/ui/toaster";
import { useNavigate } from 'react-router-dom';

const NoteCard = ({ note }) => {
    const { theme } = useTheme();
    const {deleteNote} = useNoteStore();
    const navigate = useNavigate();

    const handleCardClick = () => {
      navigate(`/edit/${note._id}`);
    };

    const handleDelete = async (id) => {
    const res = await deleteNote(id);

    if(res.success) {
      toaster.create({
        title: "Successfully deleted",
        description: res.message,
        type: "success",
        closable: true,
      });
    } 
    else {
      toaster.create({
        title: "Error",
        description: res.message,
        type: "error",
        closable: true,
      });
    }
  };

  return (

  <Box 
    bg={theme === 'light' ? "white" : "gray.700"}
    rounded="lg"
    shadow="lg"
    overflow="hidden"
    transition="all 0.2s"
    _hover={{ 
      shadow: "xl", 
      transform: "translateY(-4px)",
      '& .delete-btn': { opacity: 1 } // show delete button on hover
    }}
    cursor="pointer"
    spacing={10}
    onClick={handleCardClick}
  >
    <Toaster />

    {/* Colored Top Bar */}
    <Box bg={note.color} h="12px" />
    
    {/* Content Section */}
    <Box p={5}>
      <Heading 
        size="md" 
        mb={3}
        color={theme === 'light' ? "gray.800" : "gray.100"}
        noOfLines={1}
      >
        {note.title || "Untitled"}
      </Heading>
      
      <Text 
        color={theme === 'light' ? "gray.600" : "gray.300"}
        noOfLines={3}
        fontSize="sm"
      >
        {note.content || "No content"}
      </Text>

      <HStack mt={4} justifyContent="flex-end">
        <Box
          className="delete-btn"
          as="button"
          p={2}
          bg="red.500"
          color="white"
          rounded="md"
          _hover={{ bg: "red.600" }}
          cursor="pointer"
          opacity={0}  // hidden by default, shown on hover
          transition="opacity 0.2s"
          onClick={() => handleDelete(note._id)}
        >
          <MdDelete size={18} />
        </Box>
      </HStack>
    </Box>
  </Box>
  );
};

export default NoteCard;
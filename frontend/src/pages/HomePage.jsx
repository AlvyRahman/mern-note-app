import React, { useState, useEffect } from 'react';
import { Container, Heading, SimpleGrid, Text, Box, VStack, Spinner } from '@chakra-ui/react';
import { useNoteStore } from '../store/note';
import NoteCard from '../components/NoteCard';

export const HomePage = () => {
  const {notes, fetchNotes} = useNoteStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNotes = async () => {
      await fetchNotes();
      setLoading(false);
    };
    
    loadNotes();
  }, []);
  
  console.log(notes);

  return (
    <Container maxW="1000px" px={4} py={8}>
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
        All Notes 📝
      </Heading>

      {loading && notes.length === 0 && (
        <VStack spacing={4} align="center" w="100%">
          <Spinner size="xl" color="yellow.400" />
          <Box 
            p={5}
            bg="yellow.100" 
            color="yellow.800" 
            rounded="md" 
            textAlign="center"
            maxW="700px"
          >
            <Text fontWeight="bold" fontSize={{ base: "20px", sm: "25px" }}>
              App's backend is hosted on Render server which spins down after inactivity.
              Please wait—your notes will appear shortly.
            </Text>
          </Box>
        </VStack>
      )}

      {!loading && notes.length === 0 && (
         <VStack spacing={4} py={10}>
            <Text fontSize="xl" color="gray.500" textAlign="center">
              You have not created any notes
            </Text>
          </VStack>
      )}

      {!loading && (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={2}>
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))}
      </SimpleGrid>
      )}
    </Container>
  )
}

import React, { useEffect } from 'react';
import { Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { useNoteStore } from '../store/note';
import NoteCard from '../components/NoteCard';


export const HomePage = () => {
  const {notes, fetchNotes, deleteNote} = useNoteStore();

  useEffect(() => {
    fetchNotes();
  }, []);
  
  console.log(notes);

  return (
    <Container maxW="1000px" px={4} py={8}>
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
        All Notes 📝
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={2}>
        {notes.map((note) => (
          <NoteCard key={note._id} note={note} />
        ))}
      </SimpleGrid>
    </Container>
  )
}

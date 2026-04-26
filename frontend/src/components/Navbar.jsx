import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CiSquarePlus } from "react-icons/ci"
import { HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from 'next-themes'
import { useColorModeValue } from './ui/color-mode';

export const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return <Container px={4} bg={useColorModeValue("yellow.300", "yellow.300")} boxShadow={useColorModeValue("md", "md-dark")}>
    <Flex 
      h={16} 
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base: "column",
        sm: "row"
      }}
    >
      {/* Left spacer — mirrors the HStack width to keep Note truly centered */}
      <HStack flex={1} />
      
      {/* Center */}
      <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
        <Text
          fontSize={{ base: "15px", sm: "20px" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          color={"gray.800"}          // always dark — yellow bg is always light
          letterSpacing={"wide"}
        >
          <Link to={"/"}>Note</Link>
        </Text>
      </Flex>

      {/* Right — buttons */}
      <HStack flex={1} spacing={2} alignItems={"center"} justifyContent={"flex-end"}>
        <Link to={"/create"}>
          <Button>
            <CiSquarePlus fontSize={20}/>
          </Button>        
        </Link>
        
        <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? <HiMoon fontSize={20}/> : <HiSun fontSize={20}/> }
        </Button>
      </HStack>
    </Flex>
  </Container>
}

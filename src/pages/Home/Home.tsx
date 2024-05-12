import { Box, Center, Image } from "@chakra-ui/react";

function Home() {
  return (
    <Box padding={4}>
      <Center display="flex" flexDir="column">
        Sonhar Acordado Campinas
        <Image
          src={"/sonhar.jpg"}
          alt="Logo sonhar acordado"
          objectFit="cover"
          boxSize={400}
        />
      </Center>
    </Box>
  );
}

export default Home;

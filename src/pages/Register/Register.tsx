import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const nav = useNavigate();

  const goToRegisterPage = () => {
    nav("/login");
  };

  return (
    <Box
      p={4}
      maxWidth="400px"
      mx="auto"
      mt="100px"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading mb={4}>Cadastro</Heading>
      <form>
        <Stack spacing={3}>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Senha</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="blue" type="submit">
            Acessar
          </Button>
          <Link color="gray.700" onClick={goToRegisterPage}>
            Já tem cadastro? Faça o login aqui
          </Link>
        </Stack>
      </form>
    </Box>
  );
};

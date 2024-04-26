import { useAuthUser } from "@/shared/provider";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const nav = useNavigate();
  const { loggedUser } = useAuthUser();

  const goToRegisterPage = () => {
    nav("/register");
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
      <Heading mb={4}>Login</Heading>
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
            Não tem cadastro? Cadastre-se aqui
          </Link>
        </Stack>
      </form>
    </Box>
  );
}

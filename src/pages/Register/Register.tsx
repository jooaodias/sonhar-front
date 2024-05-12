import { PasswordButton } from "@/shared/components/PasswordButton";
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
          <PasswordButton />
          <Button
            bgColor="#f8e738"
            type="submit"
            _hover={{ bgColor: "#dfd025" }}
            _active={{ bgColor: "#b9ac25" }}
          >
            Inscrever
          </Button>
          <Link color="gray.700" onClick={goToRegisterPage}>
            Já tem cadastro? Faça o login aqui
          </Link>
        </Stack>
      </form>
    </Box>
  );
};

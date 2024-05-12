import { PasswordButton } from "@/shared/components/PasswordButton";
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
  Text,
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

          <PasswordButton />
          <Text fontSize="small" color="gray.500">
            Esqueci a senha
          </Text>

          <Button
            bgColor="#f8e738"
            type="submit"
            _hover={{ bgColor: "#dfd025" }}
            _active={{ bgColor: "#b9ac25" }}
          >
            Acessar
          </Button>
          <Link color="gray.700" onClick={goToRegisterPage}>
            Ainda não é um voluntário do Sonhar Acordado Campinas? Inscreva-se e
            venha fazer parte conosco
          </Link>
        </Stack>
      </form>
    </Box>
  );
}

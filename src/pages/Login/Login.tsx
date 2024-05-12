import { PasswordButton } from "@/shared/components/PasswordButton";
import { ILoginUser } from "@/shared/models/login";
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
  FormErrorMessage,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function Login() {
  const nav = useNavigate();
  const { loggedUser } = useAuthUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>();

  const goToRegisterPage = () => {
    nav("/register");
  };

  const onSubmit: SubmitHandler<ILoginUser> = (data) => {
    console.log(data);
    // Lógica de autenticação...
  };
  console.log(errors.email);
  return (
    <Box
      p={4}
      maxWidth="400px"
      mx="auto"
      my="auto"
      mt="48px"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading mb={4}>Login</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <FormControl id="email" isInvalid={!!errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              {...register("email", {
                required: "E-mail obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Digite um e-mail inválido",
                },
              })}
              type="text"
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <PasswordButton error={errors} register={register} />
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

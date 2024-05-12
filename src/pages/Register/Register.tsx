import { PasswordButton } from "@/shared/components/PasswordButton";
import { IRegisterUser } from "@/shared/models/login";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>();

  const goToRegisterPage = () => {
    nav("/login");
  };

  const onSubmit: SubmitHandler<IRegisterUser> = (data) => {
    console.log(data);
    // Lógica de autenticação...
  };

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
      <Heading mb={4}>Cadastro</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <FormControl id="name" isInvalid={!!errors.name}>
            <FormLabel>Nome</FormLabel>
            <Input
              {...register("name", {
                required: "Nome obrigatório",
                minLength: { value: 4, message: "No mínimo 4 caracteres" },
              })}
              type="text"
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
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
          <PasswordButton register={register} error={errors} />
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

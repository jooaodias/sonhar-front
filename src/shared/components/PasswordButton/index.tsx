import { ILoginUser } from "@/shared/models/login";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface IPasswordButton {
  register: UseFormRegister<any>;
  error: FieldErrors<ILoginUser>;
}

export const PasswordButton = ({ register, error }: IPasswordButton) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => setShowPassword(!showPassword);

  return (
    <FormControl id="password" isInvalid={!!error.password}>
      <FormLabel>Senha</FormLabel>
      <InputGroup>
        <Input
          pr="4.5rem"
          {...register("password", {
            required: "Senha obrigatória",
            minLength: { value: 6, message: "No mínimo 6 dígitos" },
          })}
          type={showPassword ? "text" : "password"}
          placeholder="Digite sua senha"
        />

        <InputRightElement width="4.5rem">
          <IconButton
            h="1.75rem"
            size="sm"
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            onClick={handleClick}
            icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
          />
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>
        {error.password && error.password.message}
      </FormErrorMessage>
    </FormControl>
  );
};

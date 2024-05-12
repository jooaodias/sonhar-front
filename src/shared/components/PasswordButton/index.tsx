import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";

export const PasswordButton = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => setShowPassword(!showPassword);

  return (
    <FormControl id="password">
      <FormLabel>Senha</FormLabel>
      <InputGroup>
        <Input
          pr="4.5rem" 
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
    </FormControl>
  );
};

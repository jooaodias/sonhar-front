// Header.js
import { useState } from "react";
import {
  Box,
  Flex,
  Link,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

const headerItens = [
  { title: "Início", link: "/" },
  { title: "Área do Voluntário", link: "/login" },
  { title: "Sobre o Sonhar", link: "/sobre" },
  { title: "Nossos Programas", link: "/programas" },
  { title: "Nossos Eventos", link: "/eventos" },
  { title: "Lojinha Sonhadora", link: "/loja" },
  { title: "Doações", link: "/doacoes" },
  { title: "Seja um Patrocinador", link: "/patrocinador" },
];

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 980);

  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth <= 980);
  });

  return (
    <Box bg="#f8e738" color="black">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        p={4}
        maxW="container.xl"
        mx="auto"
      >
        <Link as={RouterLink} to="/">
          <Image src={"/sonhar.jpg"} boxSize={12} />
          {/* TODO: LOGO */}
        </Link>
        {isMobile ? (
          <>
            <IconButton
              icon={<HamburgerIcon />}
              aria-label="Abrir menu"
              onClick={onOpen}
            />
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay>
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Menu</DrawerHeader>
                  <DrawerBody>
                    <Box display="flex" flexDirection="column">
                      {headerItens.map((item) => (
                        <Link
                          key={item.title}
                          mb={2}
                          as={RouterLink}
                          to={item.link}
                          onClick={onClose}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </Box>
                  </DrawerBody>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </>
        ) : (
          <Box display="flex">
            <Flex gap={4}>
              {headerItens.map((item) => (
                <Link key={item.title} as={RouterLink} to={item.link}>
                  {item.title}
                </Link>
              ))}
            </Flex>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Header;

import { cloneElement, Children, useState } from "react";
import axios from "axios";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
} from "@chakra-ui/react";

import NavWithSubnavigation from "../components/nav-bar/nav-bar";
import Footer from "../components/footer/footer";
import { toast } from "react-toastify";

export default function LoggedOutLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  function Popover() {
    const [email, setEmail] = useState("");

    const handleSubmit = async () => {
      const response = await axios.post("/api/sendEmail", {
        from: "mateusgianetti1996@gmail.com",
        to: "MarceloGianetti1@gmail.com",
        subject: "From popover form",
        html: `
        <div>
          <h3>email: ${email}</h3>
        </div>
        `,
      });

      if (response.status === 200) {
        toast("Você foi cadastrado em nossa newsletter", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
        setEmail("");
      } else {
        toast("Erro! Por favor, tente novamente.", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
      }
    };

    return (
      <>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="2xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontFamily="Poppins" w="94%">
              Insira seu e-mail para testar gratuitamente nossa ferramenta:
            </ModalHeader>
            <ModalCloseButton w="6%" />
            <ModalBody>
              <Input
                fontFamily="Poppins"
                placeholder={"Email"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                autoComplete="email"
              />
            </ModalBody>

            <ModalFooter>
              <Button
                as={"a"}
                rounded={"full"}
                fontWeight="extrabold"
                fontFamily={"Poppins"}
                px={6}
                mr={{ base: 0, sm: 6 }}
                colorScheme={"red"}
                backgroundImage="linear-gradient(to right, primary.600, secondary.600);"
                _hover={{
                  backgroundImage:
                    "linear-gradient(to right, primary.500, secondary.500);",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSubmit();
                  setIsOpen(false);
                }}
              >
                Testar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  const modifiedChildren = Children.map(children, (child) => {
    if (child && typeof child === "object") {
      return cloneElement(child, { openPopOver: () => setIsOpen(true) });
    }
    return child;
  });

  return (
    <>
      <NavWithSubnavigation />
      {modifiedChildren}
      <Popover />
      <Footer />
    </>
  );
}

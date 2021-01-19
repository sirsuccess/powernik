import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Button,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" size="sm" mt={2} ml={5}>
        Add Time
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Time</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} mt={3}>
            <FormControl>
              <FormLabel>Monday</FormLabel>
              <Input ref={initialRef} placeholder="monday" type="time" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Tuesday</FormLabel>
              <Input placeholder="tuesday" type="time" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Wednesday</FormLabel>
              <Input placeholder="Wednesday" type="time" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Thurday</FormLabel>
              <Input placeholder="thurday" type="time" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Friday</FormLabel>
              <Input placeholder="friday" type="time" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default InitialFocus;

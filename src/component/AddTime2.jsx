import React from "react";
import {
  Button,
  FormLabel,
  Input,
  useDisclosure,
  AddIcon,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  InputGroup,
  Stack,
  Box,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  FormControl,
} from "@chakra-ui/react";

function AddTime() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <>
      {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button> */}
      <Button onClick={onOpen} colorScheme="teal" size="sm" mt={2} ml={5}>
        Add Time
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

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

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default AddTime;

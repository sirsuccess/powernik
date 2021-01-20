import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import { addStaffRequest } from "../store/staffs/actions";
import { getRandomInt } from "../utills";

function AddStaff() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const finalRef = useRef();
  const toast = useToast();
  const dispatch = useDispatch();

  const { staffs } = useSelector((state) => state.staffsStore);
  const [photo, setPhoto] = useState(
    "https://randomuser.me/api/portraits/men/75.jpg"
  );
  const [newStaffs, setStaff] = useState({
    firstName: "",
    lastName: "",
  });
  const [valid, setValid] = useState({
    firstName: false,
    lastName: false,
  });

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then(function (response) {
        setPhoto(response.data.results[0].picture.large);
      })
      .catch(function (error) {
        // handle error
        toast({
          title: "Photo error",
          description: `Image failed to loard`,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    setStaff({ ...newStaffs, [e.target.name]: e.target.value });
    setValid({ firstName: false, lastName: false });
  };

  const handleSubmit = () => {
    if (!newStaffs.firstName) {
      return setValid({ firstName: true });
    }
    if (!newStaffs.lastName) {
      return setValid({ lastName: true });
    }
    const newUser = {
      id: getRandomInt(100),
      firstName: newStaffs.firstName,
      lastName: newStaffs.lastName,
      avatar: photo,
      workDays: [
        {
          monday: "",
        },
        {
          tuesday: "",
        },
        {
          wednesday: "",
        },
        {
          thursday: "",
        },
        {
          friday: "",
        },
      ],
    };

    dispatch(addStaffRequest(newUser));

    toast({
      title: "Success.",
      description: `You have added a new staff `,
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="teal"
        size="sm"
        mb={5}
        mt={5}
        disabled={staffs.length > 4}
      >
        Add Staff
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Staff</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} mt={3}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="First name"
                name="firstName"
                isInvalid={valid.firstName}
                errorBorderColor="red.200"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input
                isInvalid={valid.lastName}
                errorBorderColor="red.200"
                placeholder="Last name"
                name="lastName"
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddStaff;

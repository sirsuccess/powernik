import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  FormLabel,
  Input,
  useDisclosure,
  Drawer,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import { addTimeRequest } from "../store/staffs/actions";
import { filterSingleObject } from "../utills";
function AddTime({ id, name }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const initialRef = React.useRef();
  const dispatch = useDispatch();
  const toast = useToast();

  const { staffs } = useSelector((state) => state.staffsStore);
  const [newStaffs, setStaff] = useState({
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
  });

  const handleChange = (e) => {
    setStaff({ ...newStaffs, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    const filterStaff = filterSingleObject(staffs, id);

    const newUser = {
      id: filterStaff[0].id,
      firstName: filterStaff[0].firstName,
      lastName: filterStaff[0].lastName,
      avatar: filterStaff[0].avatar,
      workDays: [
        {
          monday: newStaffs.monday,
        },
        {
          tuesday: newStaffs.tuesday,
        },
        {
          wednesday: newStaffs.wednesday,
        },
        {
          thursday: newStaffs.thursday,
        },
        {
          friday: newStaffs.friday,
        },
      ],
    };

    dispatch(addTimeRequest(newUser));

    toast({
      title: "Success.",
      description: `You have added time for ${filterStaff[0].firstName}`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    onClose();
  };

  return (
    <>
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
            <DrawerHeader>{name} time</DrawerHeader>
            <Box p={5}>
              <FormControl>
                <FormLabel>Monday</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="monday"
                  name="monday"
                  type="time"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Tuesday</FormLabel>
                <Input
                  placeholder="Tuesday"
                  type="time"
                  name="tuesday"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Wednesday</FormLabel>
                <Input
                  placeholder="Wednesday"
                  type="time"
                  name="wednesday"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Thurday</FormLabel>
                <Input
                  placeholder="Thurday"
                  type="time"
                  name="thursday"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Friday</FormLabel>
                <Input
                  placeholder="Friday"
                  type="time"
                  name="friday"
                  onChange={handleChange}
                />
              </FormControl>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button color="blue" onClick={handleSubmit}>
                  Save
                </Button>
              </DrawerFooter>
            </Box>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default AddTime;

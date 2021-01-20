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


function AddTime({ id, name, time }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const initialRef = React.useRef();
  const dispatch = useDispatch();
  const toast = useToast();

  const { staffs } = useSelector((state) => state.staffsStore);
  const [newStaffs, setStaff] = useState({
    monday: time[0]["monday"],
    tuesday: time[1]["tuesday"],
    wednesday: time[2]["wednesday"],
    thursday: time[3]["thursday"],
    friday: time[4]["friday"],
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
      description: `You have successfuly added time for ${filterStaff[0].firstName}`,
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
            <DrawerHeader textTransform="uppercase">{name} time</DrawerHeader>
            <Box p={5}>
              <FormControl>
                <FormLabel>Monday</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="monday"
                  name="monday"
                  type="time"
                  value={newStaffs.monday}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Tuesday</FormLabel>
                <Input
                  placeholder="Tuesday"
                  type="time"
                  name="tuesday"
                  value={newStaffs.tuesday}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Wednesday</FormLabel>
                <Input
                  placeholder="Wednesday"
                  type="time"
                  name="wednesday"
                  value={newStaffs.wednesday}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Thurday</FormLabel>
                <Input
                  placeholder="Thurday"
                  value={newStaffs.thursday}
                  type="time"
                  name="thursday"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Friday</FormLabel>
                <Input
                  placeholder="Friday"
                  value={newStaffs.friday}
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

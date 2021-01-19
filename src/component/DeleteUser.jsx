import React from "react";
import { useDispatch } from "react-redux";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useToast,
} from "@chakra-ui/react";
import { deleteStaffRequest } from "../store/staffs/actions";

function DeleteStaff(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDelete = () => {
    dispatch(deleteStaffRequest(props.id));
    toast({
      title: "Success.",
      description: `You have delete ${props.name}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <>
      <Button
        colorScheme="red"
        size="sm"
        mt={2}
        ml={5}
        onClick={() => setIsOpen(true)}
      >
        Delete
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure, you want to delete {props.name}?.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No, Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Yes, Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default DeleteStaff;

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { BsFillPersonFill } from "react-icons/bs";
import Modal from "./Modal";

export default function ModalDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BsFillPersonFill className="shoppingCart" onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <Modal onCancel={handleClose} />
      </Dialog>
    </div>
  );
}

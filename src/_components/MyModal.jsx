import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Fade, Slide } from "@mui/material";

const style = {
  position: "absolute",
  top: "10%",
  left: "20%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MyModal({ open, setOpen, children }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        keepMounted
      >
        <Slide direction="down" in={open} timeout={400}>
          <Box sx={style} className="bg-white w-2/3">
            {children}
          </Box>
        </Slide>
      </Modal>
    </div>
  );
}

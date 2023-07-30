import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";

export default function ErrorDialog({open,close,msg}) {

    const handleClose =() =>{
     close(false);
    };

    return (
     <Dialog
         open={open}
         onClose={handleClose}
     >
         <DialogTitle>{"Wystąpił problem z przesłaniem plików"}</DialogTitle>
         <DialogContent>
             <DialogContentText>
                 {msg}
             </DialogContentText>
         </DialogContent>
         <DialogActions>
             <Button onClick={handleClose}>
                 OK
             </Button>
         </DialogActions>
     </Dialog>
 )
}
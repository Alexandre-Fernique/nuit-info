import { useState} from "react";
import {Modal} from "@mui/material";


export default function RickRoll() {

    const [code, setCode] = useState<number>(0);
    const rickroll = ["r", "i", "c", "k"];
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    document.onkeyup = (e) => {


        if (e.key === rickroll[code]) {
            setCode(code + 1);
        }
        else {
            setCode(0);
        }
        if (code === rickroll.length-1) {
            setOpen(true);
            setCode(0);
        }
    }


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <iframe width="1068" height="601" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                        title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>


            </Modal>

        </div>
    )
}
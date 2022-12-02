import { useState} from "react";
import {Modal} from "@mui/material";


export default function KonamiCode() {

    const [code, setCode] = useState<number>(0);
    const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    document.onkeydown = (e) => {

        if (e.key === konamiCode[code]) {
            setCode(code + 1);
        }
        else {
            setCode(0);
        }
        if (code === konamiCode.length-1) {
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
            ><iframe className={"mx-auto"} width="883" height="662" src="https://www.youtube.com/embed/dbwuY83XIEA?start=92&autoplay=1"
                        title="Rots + pets 😂 on s améliore ( en pets ) Audrey Pete de plus en plus fort 😂😂😂💙💙💙👍👍👍"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen ></iframe>


            </Modal>

        </div>
    )
}
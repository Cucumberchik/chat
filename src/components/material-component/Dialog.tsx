import { keyframes } from "@emotion/react";
import styled from "@emotion/styled/macro";

interface DialogType {
    $status: string
}

const open_dialog = keyframes`
    from {
        display: none;
        opacity: 0;
    }
    100% {
        opacity: 1;
        display: block;
    }
`
const clouse_dialog = keyframes`
    from {
        display: flex;
        opacity: 1;
    }
    100% {
        opacity: 0;
        display: none;
    }
`

const Dialog = styled.section<DialogType>`
    background-color: rgba(20, 20, 20, 0.509);
    backdrop-filter: blur(3px);

    .contant {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ${({$status})=>{
        if($status == 'opene'){
            return `animation: ${open_dialog} .2s forwards;`
        }else if($status == 'clouse'){
            return `animation: ${clouse_dialog} .2s forwards;`
        }else {
            return 'display: none;'
        }
    }}

`

export default Dialog
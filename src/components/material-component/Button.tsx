"use client"
import styled from "@emotion/styled"
import {FC} from 'react'
import { Material } from '~/types/matial-components'

type PaddingTypeOrFZ = {
    big:string,
    normal:string,
    average:string,
    small:string
}

type StyleType = {
    filled: string,
    outlined:string,
    ghost: string
}

const Button:FC<Material.ButtonType> = ({
    variant = "filled",
    onClick, className = "button", 
    children,
    type = "normal",
    disibled
}) => {

    const padding:PaddingTypeOrFZ = {
        big: "10px 40px", 
        normal: "10px 35px", 
        average: "8px 30px", 
        small: "8px 25px"
    }
    const style:StyleType = {
        outlined:` 
            background: var(--background-outlined-button);
            border: 1.8px solid var(--border-outlined-button);
            border-radius: 8px;
            &:hover {
                background: var(--background-outlined-hover);
            }
        `,
        filled: ` 
            background: var(--background-filled-button);
            border-radius: 8px;
            border: none;
            &:hover {
                background: var(--background-filled-hover);
            }
        `,
        ghost:` 
            background: var(--background-ghost-button);
            border-radius: 8px;
            border: none;
            color: #000;
            &:hover {
                background: var(--background-ghost-hover);
            }
        `
    };

    const ButtonStyle = styled.button`
        transition: .2s ;
        padding: ${padding[type]};
        color: var(--color-button);
        ${style[variant]};

        &:active{
            color: var(--color-button-active);
        }
        
    `;

  return (
    <ButtonStyle disabled={disibled} >
        {children}
    </ButtonStyle>
  )
}

export default Button
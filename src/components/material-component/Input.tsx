'use client'
import styled from '@emotion/styled'
import { FC } from 'react'
import { Material } from '~/types/matial-components'

const Input:FC<Material.InputType> = ({variant = "filled", type = "normal", onChange, value}) => {

    let style:any = {
        filled: `
         background: var(--ds-background-100);
         box-shadow: 0 0 0 1px var(--border-color);
         border: 1px solid var(--ds-gray-alpha-400);
         &:focus {
            box-shadow: 0 0 0 1px var(--ds-gray-alpha-600),0 0 0 4px hsla(0,0%,100%,.24);
        }
        `,
        error: `
         background: var(--ds-background-100);
         box-shadow: 0 0 0 1px var(--ds-red-900);
         border:none;
         &:focus {
            box-shadow:0 0 0 1px var(--ds-red-900), 0 0 0 4px rgb(229, 72, 77, 0.5);
            
        }
        `
    }

    let InputStyle = styled.input`
        color: var(--geist-foreground);
        padding: 8px 10px;
        transition: box-shadow .15s;
        border-radius: 6px;
        max-width: 100%;

        ${style[variant]}
    `
    return <InputStyle onChange={onChange} value={value} />
}

export default Input
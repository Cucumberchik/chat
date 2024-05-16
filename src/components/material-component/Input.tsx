'use client'
import styled from '@emotion/styled'
import { Material } from 'source/types/matial-components'


    let style:any = {
        filled: { bx: `var(--border-color)`, br: `1px solid var(--ds-gray-alpha-400)`, fc: `var(--ds-gray-alpha-600),0 0 0 4px hsla(0,0%,100%,.24)`},
        error: { bx: `var(--ds-red-900)`, br: `1px solid var(--ds-gray-alpha-400)`, fc: `var(--ds-red-900), 0 0 0 4px rgb(229, 72, 77, 0.5)`}
    }

const Input = styled.input<Material.InputType>`
    color: var(--geist-foreground);
    background: var(--ds-background-100);
    transition: box-shadow .2s;
    font-size: 17px;
    border-radius: 4px;
    max-width: 100%;
    padding: ${({$p})=> $p};
    width: ${({$width})=> $width}px;
    height: ${({$width})=> $width}px;
    box-shadow: 0 0 0 1px ${({$variant})=>style[$variant].bx};
    border: ${({$variant})=>style[$variant].br};
    &:focus{
        box-shadow: 0 0 0 1px ${({$variant})=>style[$variant].fc};

    }
`
export default Input
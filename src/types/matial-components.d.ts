import { ChangeEventHandler, ReactNode } from "react";


namespace Material {
    interface ButtonType {
        variant?: "filled" | "outlined" | "ghost",
        type?: "big" | "normal" | "average" | "small",
        onClick?: () => void,
        className?: string,
        children?: ReactNode,
        disibled?: boolean,
    }
    interface InputType {
        variant?: "filled" | "error",
        type?: "big" | "normal" | "average" | "small",
        onChange?: any,
        disibled?: boolean,
        value?: string | number,
    }
    interface TypographyType {
        variant: 'web' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body',
        children: number | string
    }
}
import type { ChangeEvent, ReactNode } from "react";


namespace Material {
    interface ButtonType {
        variant?: "filled" | "outlined" | "ghost",
        size?: "big" | "normal" | "average" | "small",
        onClick?: () => void,
        className?: string,
        children?: ReactNode,
        disibled?: boolean,
        type?:any
    }
    interface InputType {
        $variant: "filled" | "error",
        $width?:number,
        $height?:number,
        $p?:string,
    }
    interface TypographyType {
        variant: 'web' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body',
        children: number | string
    }
}

namespace Auth {
    type UserType = {
        email:string,
        identificator:string,
        password:string,
        name:string,
        date_creat:string,
        role: string,
    }
}
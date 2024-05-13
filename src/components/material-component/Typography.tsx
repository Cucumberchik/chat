import styled from "@emotion/styled";
import { FC, ReactElement } from "react"
import { Material } from "~/types/matial-components"

 const Typography:FC<Material.TypographyType> = ({variant = "web", children}):ReactElement => {
    let fz = {
        web: "500 36px / 122%",
        h1: "500 32px / 125%",
        h2: "500 24px / 117%",
        h3: "500 20px / 130%",
        h4: "500 17px / 141%",
        h5: "700 15px / 133%",
        h6: "700 15px / 133%",
        body: "400 15px / 133%",
    }
    let Web = styled.h1`
        font:   ${fz[variant]} var(--font-femely);
    `
    let H1 = styled.h1`
        font: ${fz[variant]} var(--font-femely);
    `
    let H2 = styled.h2`
    font: ${fz[variant]} var(--font-femely);
    `
    let H3 = styled.h3`
        font: ${fz[variant]} var(--font-femely);
    `
    let H4 = styled.h4`
    font: ${fz[variant]} var(--font-femely);
    `
    let H5 = styled.h5`
        font: ${fz[variant]} var(--font-femely);
    `
    let H6 = styled.h6`
    font: ${fz[variant]} var(--font-femely);
    `
    let Body = styled.span`
    font: ${fz[variant]} var(--font-femely);
    `
    switch(variant){
        case "h1": return <H1>{children}</H1>;
        case "h2": return <H2>{children}</H2>;
        case "h3": return <H3>{children}</H3>;
        case "h4": return <H4>{children}</H4>;
        case "h5": return <H5>{children}</H5>;
        case "h6": return <H6>{children}</H6>;
        case "body": return <Body>{children}</Body>;
        default: return <Web>{children}</Web>;
    }
}

export default Typography
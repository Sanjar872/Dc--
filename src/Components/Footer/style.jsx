import styled from "styled-components";
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';




export const Futers = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1A145E;
    padding: 35px 5%;
`

export const LogoPage = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    `
export const Logoos = styled.div`
    width: 100%;
    display: flex;
    cursor: pointer;
    `
    export const Logo = styled.img`
        width: 20%;
        height: 60px;
        background-color: unset;
    `
    export const LogoText = styled.div`
        /* display: flex; */
        height: 60px;
        flex-direction: column;
        justify-content: center;
        /* border: 1px solid black; */
    ` 
    export const LogoDs = styled.h1`
        font-size: 35px;
        line-height: 30px;
        letter-spacing: -1px;
        color: #fff;
    
    `
export const Addres = styled.div`
    color: #fff;
    /* width: 50%; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
        
    `
export const AddresGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
        
`

export const AddresIcons = styled.div`
    margin-right: 10px;
`
export const AddresText = styled.h2`
    font-size: 16px;
`
export const AddresNum = styled(Link)`
    font-size: 15px !important;
    font-weight: 200 !important;
    text-decoration: none !important;
    color:  #fff !important;
`
export const AddresInfo = styled.div`
    width: 100%;
`


export const NavLinks = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
export const Mylinks = styled(Link)`
    font-size: 20px !important;
    font-weight: 500 !important;
    color: #fff !important;
    text-decoration: none !important;
    /* cursor: pointer; */
`

export const RightCont = styled.div`
    width: 35%;
    height: 100%;
    display: grid;
    grid-gap: 10px 25px;
    color: #fff;
    grid-template-columns: 1fr 1fr;
    
`
export const RightContCard = styled.div`
    display: flex;
    flex-direction: column;
`
export const FooterInput = styled.input`
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 10px 5px;
    font-weight: 600;
`
export const FooterLabel = styled.label`
    padding-bottom: 7px;
`
export const MyButton = styled(Button)`
    height: 40px !important;
    position:relative;
    background-color: #5D70D6 !important;
    /* padding: 10px 50px !important; */
    font-size: 20px !important;
    color: #fff !important;
    border-radius: 3px !important;
    text-transform: inherit !important;
    margin-top: 20px !important;
    box-shadow: 0px 3px 20px 2px #87d4fd61 !important;
    transition: .2s !important;
    :hover {
        transform: scale(1.01) !important;
    }
`
import styled from "styled-components";
import Nav from "../Images/Navbarbg.png"
import Karta from '../Images/Group 632.png'

export const Container = styled.div`
    width:100%;
    height:1000px;
    /* border:1px solid red; */
    /* display:flex; */
    /* justify-content:center; */
    background:url(${Nav});
    /* border:5px solid red; */
    background-size: cover;
    
    background-position:center;
    /* @media (max-width: 1230px) { */
    /* height:160vh; */
    /* max-height:160hv; */
        
    /* } */

`
export const Navcon = styled.nav`
    width:100%;
    height:60px;
    /* display:flex; */
    /* padding-top:40px; */
    align-items:center;
    /* justify-content:center; */
    color:white;

`


export const Brand = styled.div`
    width:300px;
    height:60px;
    
    display:flex;
    justify-content:center;
    align-items:center;

`
export const Img = styled.img`
    width:100px;
    height:55px;

`
export const Imgg = styled.img`
    width:150px;
    height:50px;
`
export const Imggg = styled.img`
    width:150px;
    height:50px;
`

export const Ul = styled.div`
    width:100%;
    height:60px;
    display:flex;
    /* border:1px solid red; */
    /* column-gap:30px; */
    
    align-items:center;
    /* justify-content:space-between; */
`
export const Li = styled.div`
    width:20%;
    height:60px;

    display:flex;
    justify-content:center;
    align-items:center;
    font-size:16px;

`
export const Select = styled.select`
    width:30%;
    height:30px;
    border-radius:15px;
    padding-left:5px;
    outline:none;
    transition:5s;
    font-size:15px;
    border:2px solid white;
    color:white;
    background-color:#000911;

`
export const AndDiv = styled.div`
    width:100%;
    height:230px;
    display:flex;
    margin-top:50px;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    color:white;
    font-size:25px;
    
`
export const ImgAnd = styled.img`
    width:450px;
    height:658px;
`

export const P = styled.p`
    font-size:20px;
    padding-top:20px;
    position: relative;
`

export const H1 = styled.h1`
width:100%;
height:60px;
    font-size:55px;
    margin-top:-40px;
`

export const Imgkarta = styled.img`
    width:950px;
    height:600px;
    position:absolute;
    /* border:1px solid red; */
    border-radius:45%;
    /* background-image:url($) */
    opacity: 0.5;

    top:300px;
    &:hover{
        /* box-shadow:0px 0px 20px; */
        transform:scale(1.1);
    opacity: 10.7;

        cursor: pointer;
        /* transition:1s; */
    }

`





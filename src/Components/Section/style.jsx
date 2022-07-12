import styled from "styled-components";
import Re4555 from './img/Re455.png'
import Img1 from './img/card1.png'
import Img2 from './img/card2.png'
import Img3 from './img/card3.png'
import Img4 from './img/card4.png'
import Img5 from './img/card5.png'
import Img6 from './img/card6.png'
import Img7 from './img/card7.png'
import Button from '@mui/material/Button';


export const Container = styled.div`
    width:100%;
    margin-top:-350px;
    height:1150px;
    /* display:flex; */
    justify-content:center;
    flex-direction:column; 
    background-image:url(${Re4555});
    /* border:1px solid red; */
`

export const Con = styled.div`
    width:100%;
    height:700px;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const Math = styled.div`
    width:100%;
    height:100px;
    display:flex;
    margin-top:70px;
    justify-content:center;
    align-items:center;
`
export const H11 = styled.div`
    color:white;
    font-size:38px;
    text-align:center;
`

export const Grid = styled.div`
    width:70%;
    height:600px;
    margin-top:50px;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
`


export const Card1 = styled.div`
    width:300px;
    height:250px;
    background-image:url(${Img1});
    background-repeat:no-repeat;
    background-position:center;
    display:flex;
    text-align:center;
    justify-content:center;
    &:hover{
        transform:scale(1.2);
        transition: 2s;
        /* box-shadow:0px 0px 7px #909090;  */
        /* background-color:#31105F; */
        
        border-radius:7px;
        cursor: pointer;
      }
    
`
export const H3 = styled.h3`
    color: white;
    padding-top:200px;
`

export const Card2 = styled.div`
    width:300px;
    height:250px;
    background-image:url(${Img2});
    background-repeat:no-repeat;
    background-position:center;
    text-align:center;
    display:flex;
    justify-content:center;
    &:hover{
        transform:scale(1.2);
        transition: 2s;
        /* box-shadow:0px 0px 10px #909090;  */
        opacity: 5.5;
        border-radius:7px;
        cursor: pointer;
      }
`
export const Card3 = styled.div`
    width:300px;
    height:250px;
    background-image:url(${Img3});
    background-repeat:no-repeat;
    background-position:center;
    text-align:center;
    display:flex;
    justify-content:center;
    &:hover{
        transform:scale(1.2);
        transition: 1s;
        /* box-shadow:0px 0px 5px #909090;  */
        border-radius:7px;
        cursor: pointer;
      }
`
export const Card4 = styled.div`
    width:300px;
    height:250px;
    background-image:url(${Img4});
    background-repeat:no-repeat;
    background-position:center;
    text-align:center;
    display:flex;
    justify-content:center;
    &:hover{
        transform:scale(1.2);
        transition: 1s;
        /* box-shadow:0px 0px 10px #909090;  */
        border-radius:7px;
        cursor: pointer;
      }
`
export const Card5 = styled.div`
    width:300px;
    height:250px;
    background-image:url(${Img5});
    background-repeat:no-repeat;
    background-position:center;
    text-align:center;
    display:flex;
    justify-content:center;
    &:hover{
        transform:scale(1.2);
        transition: 1s;
        /* box-shadow:0px 0px 10px #909090;  */
        border-radius:7px;
        cursor: pointer;
      }
`
export const Card6 = styled.div`
    width:300px;
    height:250px;
    background-image:url(${Img6});
    background-repeat:no-repeat;
    background-position:center;
    text-align:center;
    display:flex;
    justify-content:center;
    &:hover{
        transform:scale(1.2);
        transition: 1s;
        /* box-shadow:0px 0px 10px #909090;  */
        border-radius:7px;
        cursor: pointer;
      }
`
export const Card7 = styled.div`
    width:300px;
    height:250px;
    background-image:url(${Img7});
    background-repeat:no-repeat;
    background-position:center;
    text-align:center;
    display:flex;
    justify-content:center;
    &:hover{
        transform:scale(1.2);
        transition: 1s;
        /* box-shadow:0px 0px 10px #909090;  */
        border-radius:7px;
        cursor: pointer;
      }
`

// digital citi companiya button

export const Card8 = styled(Button)`
    width:250px !important;
    height:40px;
    position: relative;
    display:flex !important;
    justify-content:center !important;
    margin-top:200px !important;
    margin-left:50px !important;
    background-color:#5D70D6 !important;
    color:white !important;
    /* border:1px solid red; */
`
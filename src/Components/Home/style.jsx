import styled from "styled-components";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import foto11 from './HomeImg/foto1.png'
import foto22 from './HomeImg/foto2.png'
import foto33 from './HomeImg/foto3.png'
import foto44 from './HomeImg/foto4.png'
import foto55 from './HomeImg/foto5.png'
import foto66 from './HomeImg/foto6.png'




export const Container = styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    flex-direction:column;
    background-color:#080038 ;
    position:relative;
    padding-top:50px;
    
`

export const SarlavxaH1 = styled.h1 `
    width:100%;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin-top:150px;
    font-weight:600;
    font-size:35px;
`
export const Containerbox = styled.div`
    width:100%;
    height:500px;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const Texth1 = styled.h1`
    width:100%;
    height:150px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
    color:white;
    text-align:center;

`

export const SectionFoto = styled.div`
    width:50%;
    height:40 0px;
    display:grid;
    margin-top:100px;
    justify-content:center;
    /* text-align:center; */
    /* border:1px solid yellow; */
    /* align-items:center; */
    grid-template-columns:1fr 1fr 1fr;
    
`
export const Gridlayt = styled.div`
    width:300px;
    height:280px;
    background-image:url(${foto11});
    color:white;
    display:flex;
    align-items:center;
    padding-top:180px;
    padding-left:5px;
    text-align:start;
    font-size:18px;
    justify-content:center;
    font-weight:550;
      &:hover {
        transform:scale(1.1);
        transition: 1s;
        box-shadow:0px 0px 10px #909090; 
        border-radius:7px;
        cursor: pointer;
      }

` 
export const Gridlayt1 = styled.div`
     width:300px;
    height:280px;
    background-image:url(${foto22});
    color:white;
    display:flex;
    font-weight:550;
    align-items:center;
    padding-top:130px;
    padding-left:5px;
    font-size:18px;
    &:hover {
        transform:scale(1.1);
        transition: 1s;
        box-shadow:0px 0px 10px #909090; 
        border-radius:10px;
        cursor: pointer;
      }

    /* justify-content:center; */
`
export const Gridlayt2 = styled.div`
      width:300px;
    height:280px;
    background-image:url(${foto33});
    color:white;
    display:flex;
    align-items:center;
    padding-top:180px;
    padding-left:5px;
    text-align:start;
    font-size:18px;
    font-weight:550;
    &:hover {
        transform:scale(1.1);
        transition: 1s;
        box-shadow:0px 0px 10px #909090; 
        border-radius:7px;
        cursor: pointer;
      }

`
export const Gridlayt3 = styled.div`
      width:300px;
    height:280px;
    background-image:url(${foto44});
    color:white;
    display:flex;
    align-items:center;
    padding-top:140px;
    padding-left:5px;
    text-align:start;
    font-size:18px;
    font-weight:550;
    &:hover {
        transform:scale(1.1);
        transition: 1s;
        box-shadow:0px 0px 10px #909090; 
        border-radius:7px;
        cursor: pointer;
      }

`
export const Gridlayt4 = styled.div`
      width:300px;
    height:280px;
    background-image:url(${foto55});
    color:white;
    display:flex;
    align-items:center;
    padding-top:140px;
    padding-left:5px;
    text-align:start;
    font-size:18px;
    font-weight:550;
    &:hover {
        transform:scale(1.1);
        transition: 1s;
        box-shadow:0px 0px 10px #909090; 
        border-radius:7px;
        cursor: pointer;
      }

`
export const Gridlayt5 = styled.div`
      width:300px;
    height:280px;
    background-image:url(${foto66});
    color:white;
    display:flex;
    align-items:center;
    padding-top:150px;
    padding-left:5px;
    text-align:start;
    font-size:18px;
    font-weight:550;
    &:hover {
        transform:scale(1.1);
        transition: 1s;
        box-shadow:0px 0px 10px #909090; 
        border-radius:7px;
        cursor: pointer;
      }

`
export const Nurdivlar = styled.div`
    
`



export const Images = styled.img`
    
    
`



export const Rasmdiv = styled.div`
position:relative;
display:flex;
justify-content:center;
width:450px;
height:450px;
    top:-1550px;
    /* margin-left:1450px; */
    /* left:-400px; */
    right:-75%;
    /* border:1px solid red; */
    opacity:0.2;
    background: radial-gradient(50% 50% at 50% 50%, #de58ff 5.92%, rgba(208, 22, 255, 0) 100%);
`
export const Imgdev = styled.img`
    width:503px;
    height:503px;
    border-radius: 100%;
    /* opacity:8,5; */
    /* border:1px solid red; */
    
`

export const Sectiongrid = styled.div`
    width:100%;
    height:600px;
    display:flex;
    justify-content:space-between;
    position:relative;

    align-items:center;
    /* border:1px solid green; */
`

export const SectionImg = styled.div`
    /* width:40%; */
    height:500px;
    border-radius:20px;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
        transition:1s;
        box-shadow:0px 0px 10px; 


    }
`
export const Grid = styled.div`
    width:55%;
    height:350px;
    /* border:1px solid red; */
    display:grid;
    align-items:center;
    cursor: pointer;
    
    grid-template-columns:1fr 1fr 1fr;
   
`

export const Img = styled.img`
    width:700px;
    height:500px;
`

export const GridDiv = styled.div`
    width:200px;
    height:150px;
    /* border:1px solid white; */
    display: flex;
    flex-direction: column;
    align-items:center;
    color:white;
    &:hover {
        background-color:#31105F;
        transition: 1s;
        border-radius:10px;
        box-shadow:0px 0px 10px; 
        transform: scale(1.1);
    }
`
export const H1 = styled.h1`
    text-align:center;
    font-size:36px;
`
export const P = styled.h1`
    text-align:center;
    padding-top:10px;
    font-size:15px;
`
export const H1Icon = styled(AttachMoneyIcon)`
    
    font-size: 45px !important;
    display:flex !important;
    justify-content:center !important;
    text-align:center !important;
`

export const H1IconFormat = styled(FormatListBulletedIcon)`
     font-size: 45px !important;
    display:flex !important;
    justify-content:center !important;
    text-align:center !important;
`

export const GridDivend = styled.div`
  width:200px;
    height:150px;
    /* border:1px solid white; */
    display: flex;
    flex-direction: column;
    align-items:center;
    color:white;
    padding-top:20px;
    grid-column-end: 4;
    &:hover {
        background-color:#31105F;
        transition: 1s;
        border-radius:10px;
        box-shadow:0px 0px 10px; 
        transform: scale(1.1);
    }
`





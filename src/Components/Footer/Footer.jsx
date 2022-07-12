import React from 'react'
import {NavLinks,Mylinks, Futers, LogoPage, LogoText,Logo,LogoDs,Logoos, Addres, AddresIcons, AddresInfo, AddresText, AddresNum, AddresGrid, RightCont, RightContCard, FooterLabel, FooterInput, MyButton } from './style'
import LogoImage from './img/Brandd.png'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <Futers id='Foter'>
      <LogoPage>
        <Logoos >
          <Logo src={LogoImage}/>
          <LogoText>
            <LogoDs>DIGITAL</LogoDs>
            <LogoDs>CITY</LogoDs>
          </LogoText>
        </Logoos>
        <AddresGrid>
          <Addres>
            <AddresIcons><LocationOnIcon sx={{fontSize: '35px'}}/></AddresIcons>
            <AddresInfo>
              <AddresText>Манзил</AddresText>
              <AddresNum href='https://www.google.com/maps/place/Digital+City/@40.747484,72.3595577,15z/data=!4m5!3m4!1s0x0:0xf72460c2369068a8!8m2!3d40.747484!4d72.3595719'>Андижон.ш Бобуршох к. 123</AddresNum>
            </AddresInfo>
          </Addres>
          <Addres>
            <AddresIcons><PhoneIcon sx={{fontSize: '35px'}}/></AddresIcons>
            <AddresInfo>
              <AddresText >Телефон Ракам</AddresText>
              <AddresNum href='#'>+99874 222-22-22</AddresNum>
            </AddresInfo>
          </Addres>
          <Addres>
            <AddresIcons><EmailIcon sx={{fontSize: '35px'}}/></AddresIcons>
            <AddresInfo>
              <AddresText>Почта</AddresText>
              <AddresNum href='#'>digitalcity@info.com</AddresNum>
            </AddresInfo>
          </Addres>
        </AddresGrid>

      </LogoPage>

      <NavLinks>
        <Mylinks href='#'>Yo’nalishlar</Mylinks>
        <Mylinks href='#'>Soliq imtiyozlari</Mylinks>
        <Mylinks href='#'>Digital city ko’magi</Mylinks>
        <Mylinks href='#'>Mutaxassislar uchun</Mylinks>
        <Mylinks href='#'>Matbuot biz haqimizda uchun</Mylinks>
      </NavLinks>

      <RightCont>
        <RightContCard>
          <FooterLabel type={'text'}>Исм</FooterLabel>
          <FooterInput/>
        </RightContCard>
        <RightContCard>
          <FooterLabel type={'text'}>Фамилия</FooterLabel>
          <FooterInput/>
        </RightContCard>
        <RightContCard>
          <FooterLabel type={'text'}>Почта</FooterLabel>
          <FooterInput/>
        </RightContCard>
        <MyButton>Yuborish</MyButton>

      </RightCont>



    </Futers>
  )
}

export default Footer
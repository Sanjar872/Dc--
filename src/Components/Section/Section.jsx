import { Container,Math,H11, Grid,Card1,Con,Card2,Card3,Card4,Card5,Card6,Card7,Card8,H3} from './style'
import Button from '@mui/material/Button';
import React from 'react'
import { H1 } from '../Navbar/style'

const Section = () => {
  return (
    <Container>
        <Math id='djcity'><H11>Digital City kompaniyalarga <br /> yordam ko‘rsatadi</H11></Math>
        <Con>

        <Grid>
            <Card1><H3>Biznesni ochish</H3></Card1>
            <Card2><H3>Xodimlarni qidirish <br />
             va tanlash</H3></Card2>
            <Card3><H3> Ofislarni qidirish <br />
             va tanlash</H3></Card3>
            <Card4><H3>Ofisni 50 kishigacha <br /> bo'lgan
             jihozlar va mebellar bilan jihozlash  </H3>   </Card4>
            <Card5><H3>Birinchi 6 oy uchun <br />
             imtiyozli ijara.</H3></Card5>
            <Card6><H3>Zarur hollarda davlat <br /> muassasalari <br />
             bilan ishlash</H3></Card6>
            <Card7><H3>Zarur hollarda davlat <br /> muassasalari <br />
             bilan ishlash</H3></Card7>
            <Card8><Button variant='contained' disableElevation>qweqwe</Button></Card8>
            {/* <Card></Card> */}


        </Grid>
        </Con>

    </Container>
  )
}

export default Section
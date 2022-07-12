import React from 'react'
import { Container,SarlavxaH1,Nurdivlar, SectionFoto,Images,Rasmdiv,Imgdev,Sectiongrid,SectionImg,Grid,Img,GridDiv,H1,P,H1Icon,H1IconFormat,GridDivend,Gridlayt,Texth1,Containerbox, Gridlayt1, Gridlayt2, Gridlayt3, Gridlayt4, Gridlayt5} from './style'
import Rasmdivv from './HomeImg/Ellipse611.png'
import Gridfoto from './HomeImg/gridfotoo.png'
import Section from '../Section/Section'
import About from '../About/About'



const Home = () => {
  return (
    <Container>

          <Texth1><h1  id="yonalish">Autsorsing kompaniyalari uchun <br />
asosiy yo‘nalishlar</h1></Texth1>
      <Containerbox>


        <SectionFoto>
              <Gridlayt>
                <p>Dasturiy ta’minotni ishlab chiqish <br />
                  va qo‘llab-quvvatlash</p>
              </Gridlayt>
              <Gridlayt1>
              <p>Logistika</p>
              </Gridlayt1>
              <Gridlayt2>
              <p> Qo‘ng‘iroqlarni qabul <br /> qilish va mijozlarni <br />
                qo‘llab-quvvatlash</p>
              </Gridlayt2>
              <Gridlayt3>
              <p>Buxgalteriya hisobi</p>
              </Gridlayt3>
              <Gridlayt4>
              <p>Buxgalteriya hisobi</p>
              </Gridlayt4>
              <Gridlayt5>
              <p>Boshqa ko‘plab <br /> yo‘nalishlar</p>
              </Gridlayt5>



             {/* <Images src={SectionFotoo} alt="" /> */}
             
        </SectionFoto>
      </Containerbox>

        <SarlavxaH1 id='soliq' >Digital City rezidentlari uchun soliq <br />
               imtiyozlari va preferensiyalar</SarlavxaH1>
        
        <Sectiongrid >
          <SectionImg>
              <Img src={Gridfoto} alt="" />
          </SectionImg>
          <Grid>
              <GridDiv>
                <H1>0%</H1>
                <P>Barcha turdagi soliqlardan to‘liq ozod bo‘lish</P>
              </GridDiv>
              <GridDiv>
                <H1>0%</H1>
                <P>Bojxona to‘lovlaridan ozod bo‘lish</P>
              </GridDiv>
              <GridDiv>
                <H1>0%</H1>
                <P>Jismoniy shaxslardan olinadigan daromad
                   solig‘i stavkasi</P>
              </GridDiv>
              <GridDiv>
                <H1Icon></H1Icon>
                <P>Chet el valyutasida dividendlar to‘lash</P>

              </GridDiv>
              <GridDiv>
                <H1Icon></H1Icon>
                <P>Chet el valyutasida ish haqi to‘lovlari</P>
              </GridDiv>
              <GridDiv>
                <H1IconFormat></H1IconFormat>
                <P>Chet ellik mutaxassislarga ishlash uchun
               ruxsatnoma talab etilmaydi</P>
              </GridDiv>
              <GridDivend>
                <H1>0%</H1>
                <P>Xorijiy kompaniyalar uchun
               dividend solig‘i</P>
              </GridDivend>

            
          </Grid>


        </Sectiongrid>
          <Rasmdiv>
            <Imgdev src={Rasmdivv} alt="" />
          </Rasmdiv>
          {/* <Nurdivlar></Nurdivlar> */}
          <Section/>
          <About/>
  {/* Abut Components */}

    </Container>
  )
}

export default Home
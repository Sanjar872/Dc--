import React from 'react'
import { Container,Brand,P,Navcon,Ul,Li,Img,H1,Select,Imggg,AndDiv,ImgAnd,Imgkarta } from './style'
import Brandfon from '../Images/Group 632.png'
import Brandfonn from '../Images/Group 11.svg'
import ScrollTo from 'react-scroll-into-view'
import style from './navbar.module.css'



const Navbar = () => {
  const [stickyClass, setStickyClass] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 50 ? setStickyClass(true) : setStickyClass(false);
    }
  };

  

  return (
      <Container>
          <Navcon>
          <div className={stickyClass ? style.stickNavbar : style.relativeNavbar}>
              <Ul>
                  <Brand>
                  {/* <Img src={Brandfn} alt="" /> */}
                  {/* <Imgg src={Brandfon} alt="" /> */}
                  <Imggg src={Brandfonn} alt="" />

                  </Brand>
                  <Li><ScrollTo selector="#yonalish">Yo’nalishlar</ScrollTo></Li>
                  <Li> <ScrollTo selector='#soliq'> Soliq imtiyozlari</ScrollTo></Li>
                  <Li> <ScrollTo selector='#djcity'>Digital city ko’magi</ScrollTo></Li>
                  <Li><ScrollTo selector='#Dastur'>Mutaxassislar uchun</ScrollTo></Li>
                  <Li><ScrollTo selector='#Foter'>Matbuot biz haqimizda</ScrollTo></Li>
                  <Li>
                      <Select name="" id="">
                      <option value="0">Уз:</option>
                      <option value="1">Rus</option>
                        <option value="2">Ang</option>
                      </Select>
                      

                      {/* <Language/>   */}
                  </Li>
              </Ul>
              </div>
          </Navcon>
          <AndDiv>
              {/* <ImgAnd src={Brandfon} alt="" /> */}
          <H1>Andijon ВРО</H1>
          <P>Eksport autsorsing kompaniyalari  ochilishini <br />
  qo‘llab-quvvatlash dasturi</P>
          <Imgkarta src={Brandfon} alt="" />
          </AndDiv>
      </Container>
  )
}

export default Navbar
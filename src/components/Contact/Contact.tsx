import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import ScrollAnimation from "react-animate-on-scroll";


export function Contact(){

 return (
  <Container id="contact">
    <header>
      <h2>The WishBoard</h2>  
      <br /><br />    

      <p>
        <strong>Dear Friend,</strong>
      </p>

      <ScrollAnimation animateIn="fadeInUp" delay={0.05 * 1000}>
        <p>
          On your special day, I just want to let you know how much you mean to me. You’ve been one of the brightest lights in my life — someone who brings joy, strength, and comfort even in the smallest moments. Having you as a friend has been one of the greatest gifts life has given me.
        </p>
      </ScrollAnimation>
      
      <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
        <p>
          As you step into this new chapter, I can’t wait to see all the amazing things you’ll do, the memories you’ll create, and the joy you’ll spread. I’ll always be here — supporting you, laughing with you, and celebrating every beautiful moment along the way.
        </p>
      </ScrollAnimation>
      
      <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
        <p>
          <strong>Happy Birthday, my favorite friend!</strong> The best is just beginning. 🎉💫
        </p>
      </ScrollAnimation>
    </header>
  </Container>
);
}
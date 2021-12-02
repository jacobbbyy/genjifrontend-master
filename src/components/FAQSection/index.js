
import { useState } from "react";
import { Data } from './Data'
import {
    AccordionSection,
    Container,
    Wrap,
    Dropdown,
    TextContainer,
    FAQTitle
} from './FAQElements'
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from 'react-icons/fi'
import {CSSTransition} from 'react-transition-group';


const FAQ = () => {

    const [clicked, setClicked] = useState(false);

    const toggle = index => {
      if (clicked === index) {
        //if clicked question is already active, then close it
        return setClicked(null);
      }
  
      setClicked(index);
    };
  


    return ( 
        <IconContext.Provider value={{ color: '#F8F5B3', size: '25px' }}>
          <AccordionSection>   
              <TextContainer>
                <FAQTitle>FAQ</FAQTitle>
              </TextContainer>
            <Container>
               {Data.map((item, index) => {
                  return ( 
                   <> 
                      <Wrap onClick={() => toggle(index)} key={index}>
                         <h1>{item.question}</h1>
                         <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                      </Wrap>
                {clicked === index ? (
                    <CSSTransition
                       in={clicked}
                       timeout={200}
                       classNames="dropdown-fade"
                       
                    >
                    <Dropdown className="dropdown-fade">
                      <p>{item.answer}</p>
                    </Dropdown>
                    </CSSTransition>
                  ) : null}
                
                </>
              );
            })}
          </Container>
        </AccordionSection>
      </IconContext.Provider>
     );
}
 
export default FAQ;
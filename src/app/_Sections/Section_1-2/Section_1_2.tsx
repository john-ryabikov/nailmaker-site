import { complects } from "@/app/_Constants/Complects";

import Container from "@/app/_UI/Container/Container";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";
import AnimatedDiv from "@/app/_UI/AnimatedTags/AimatedDiv";

import "./Section_1_2.scss"

interface Props {
  typedClass: string
}

export default function Section_1_2({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass}>
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <AnimatedDiv typedClass={typedClass}>
          <h2 className={`${typedClass}__title-h2`}>Комплекты поставки</h2>
          <div className={`${typedClass}__complects`}>
            <div className={`${typedClass}__complects-row`}>
              {complects.slice(0,2).map(complect => (
                <div className={`${typedClass}__complect`} key={complect.id}>
                  <img className={`${typedClass}__complect-img`} src={complect.image} alt={complect.id}/>
                  <p className={`${typedClass}__complect-info`}>
                    <span className={`${typedClass}__complect-info-cap`}>{complect.cap}</span>
                    <span className={`${typedClass}__complect-info-text`}>{complect.text}</span>
                  </p>
                </div>
              ))}
            </div>
            <div className={`${typedClass}__complects-row`}>
              {complects.slice(2).map(complect => (
                <div className={`${typedClass}__complect`} key={complect.id}>
                  <img className={`${typedClass}__complect-img`} src={complect.image} alt={complect.id}/>
                  <p className={`${typedClass}__complect-info`}>
                    <span className={`${typedClass}__complect-info-cap`}>{complect.cap}</span>
                    <span className={`${typedClass}__complect-info-text`}>{complect.text}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedDiv>
      </Container>
    </AnimatedSection>
  )
}
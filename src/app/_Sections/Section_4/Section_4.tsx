import { main_prems } from "@/app/_Constants/MainPrems";

import Container from "@/app/_UI/Container/Container";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";

import "./Section_4.scss"

interface Props {
  typedClass: string
}

export default function Section_4({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass} id="prems">
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <h3 className={`${typedClass}__title-h3`}>Почему мы уверены в успехе наших партнеров</h3>
        <div className={`${typedClass}__prems`}>
            <div className={`${typedClass}__prems-row`}>
              {main_prems.slice(0, 3).map((prem) => (
                <p className={`${typedClass}__prem`} key={prem.id}>
                  <span className={`${typedClass}__prem-icon`}>
                    <img src={prem.icon} alt={prem.id} />
                  </span>
                  <span className={`${typedClass}__prem-cap`}>{prem.cap}</span>
                  <span className={`${typedClass}__prem-text`}>{prem.text}</span>
                </p>
              ))}
            </div>
            <div className={`${typedClass}__prems-row`}>
              {main_prems.slice(3).map((prem) => (
                <p className={`${typedClass}__prem`} key={prem.id}>
                  <span className={`${typedClass}__prem-icon`}>
                    <img src={prem.icon} alt={prem.id} />
                  </span>
                  <span className={`${typedClass}__prem-cap`}>{prem.cap}</span>
                  <span className={`${typedClass}__prem-text`}>{prem.text}</span>
                </p>
              ))}
            </div>
        </div>
      </Container>
    </AnimatedSection>
  )
}
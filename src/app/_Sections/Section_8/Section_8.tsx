import { provisions } from "@/app/_Constants/Provisions";

import Container from "@/app/_UI/Container/Container";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";
import ButtonPopup from "@/app/_UI/ButtonPopup/ButtonPopup";

import "./Section_8.scss"

interface Props {
  typedClass: string
}

export default function Section_8({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass} id="faq">
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <h5 className={`${typedClass}__title-h5`}>Обеспечиваем для своих партнёров</h5>
        <div className={`${typedClass}__provisions`}>
          <div className={`${typedClass}__provisions-row`}>
            {provisions.slice(0, 2).map(provision => (
              <p className={`${typedClass}__provision`} key={provision.id}>
                <img src={provision.photo} alt={provision.id} />
                <span className={`${typedClass}__provision-cap`}>{provision.cap}</span>
                <span className={`${typedClass}__provision-text`}>{provision.text}</span>
              </p>
            ))}
          </div>
          <div className={`${typedClass}__provisions-row`}>
            {provisions.slice(2).map(provision => (
              <p className={`${typedClass}__provision`} key={provision.id}>
                <img src={provision.photo} alt={provision.id} />
                <span className={`${typedClass}__provision-cap`}>{provision.cap}</span>
                <span className={`${typedClass}__provision-text`}>{provision.text}</span>
              </p>
            ))}
          </div>
        </div>
        <div className={`${typedClass}__info`}>
          <span className={`${typedClass}__info-title`}>На всех этапах с момента подписания договора вас сопровождает менеджер</span>
          <ButtonPopup typedClass="button-popup" icon="/img/Icons/send_icon.svg" cont="Отправить заявку" second={true}/>
        </div>
      </Container>
    </AnimatedSection>
  )
}
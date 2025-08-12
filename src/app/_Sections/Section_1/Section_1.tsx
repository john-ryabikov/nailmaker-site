import Container from "@/app/_UI/Container/Container";
import ButtonPopup from "@/app/_UI/ButtonPopup/ButtonPopup";
import VideoBlock from "@/app/_UI/VideoBlock/VideoBlock";

import "./Section_1.scss"

interface Props {
  typedClass: string
}

export default function Section_1({ typedClass }: Props) {
  return (
    <section className={typedClass} id="main">
      <div className={`${typedClass}__fon`}></div>
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <div className={`${typedClass}__main-cont`}>
          <h1 className={`${typedClass}__title-h1`}>Открой прибыльное мини-производство строительных материалов и зарабатывай<br/>до <strong>400 000₽</strong> в месяц</h1>
          <p className={`${typedClass}__title`}>Два вибростола <b>+</b> формы <b>+</b> обучающие материалы по запуску производства – <strong>79 000₽</strong></p>
          <p className={`${typedClass}__subtitle`}>*Комплект 3 в 1: оборудование, формы, обучение по запуску производства.<br/><br/><b>Окупаемость от 2-х месяцев</b></p>
          <ButtonPopup typedClass="button-popup" icon="/img/Icons/send_icon.svg" cont="Отправить заявку"/>
        </div>
        <VideoBlock/>
      </Container>
    </section>
  )
}

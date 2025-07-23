import Container from "@/app/_UI/Container/Container";
import ButtonPopup from "@/app/_UI/ButtonPopup/ButtonPopup";

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
          <h1 className={`${typedClass}__title-h1`}>Открой свою студию красоты и зарабатывай от 400 000 в месяц*</h1>
          <p className={`${typedClass}__subtitle`}>Оставьте заявку и получите 100 000 руб на маркетинг при открытии.<br/><br/>*общие инвестиции 4 млн. рублей</p>
          <ButtonPopup typedClass="button-popup" icon="/img/Icons/send_icon.svg" cont="Отправить заявку"/>
        </div>
        <img className={`${typedClass}__main-photo`} src="/img/Section-1/video-skeleton.png" alt=""/>
      </Container>
    </section>
  )
}

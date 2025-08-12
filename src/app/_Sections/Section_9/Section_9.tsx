import Container from "@/app/_UI/Container/Container";
import FormSend from "../../_UI/FormSend/FormSend";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";

import "./Section_9.scss"

interface Props {
  typedClass: string
}

export default function Section_9({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass}>
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <img className={`${typedClass}__image`} src="/img/Section-9/call-us.png" alt="Image" />
          <div className={`${typedClass}__info`}>
            <h6 className={`${typedClass}__info-title`}>Присоединяйтесь к успешной команде СЕРДЦЕ МАСТЕРА</h6>
            <p className={`${typedClass}__info-subtitle`}>Заполните форму и получите всю необходимую информацию для открытия своего мини-производства строительных материалов</p>
            <FormSend typedClass="form-send" isPopup={false}/>
          </div>
      </Container>
    </AnimatedSection>
  )
}
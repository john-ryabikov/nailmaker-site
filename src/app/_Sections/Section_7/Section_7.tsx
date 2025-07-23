import Container from "@/app/_UI/Container/Container";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";

import "./Section_7.scss"
import FormRecord from "@/app/_UI/FormRecord/FormRecord";

interface Props {
  typedClass: string
}

export default function Section_7({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass} id="reviews">
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <FormRecord typedClass="form-record"/>
        <p className={`${typedClass}__info`}>
          <span className={`${typedClass}__info-title`}>За каждым партнёром закрепляется территориальная зона с ёмкостью рынка на размещение 2-3 филиалов.</span>
          <span className={`${typedClass}__info-subtitle`}>Это защищает партнёров от внутренней конкуренции и позволяет развивать собственную сеть студий в данном регионе.</span>
        </p>
      </Container>
    </AnimatedSection>
  )
}
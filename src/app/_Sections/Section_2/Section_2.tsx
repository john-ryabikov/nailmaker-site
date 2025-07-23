import Container from "@/app/_UI/Container/Container";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";
import AnimatedDiv from "@/app/_UI/AnimatedTags/AimatedDiv";

import "./Section_2.scss"

interface Props {
  typedClass: string
}

export default function Section_2({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass} id="about">
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <AnimatedDiv typedClass={typedClass}>
          <img className={`${typedClass}__main-photo`} src="/img/Section-2/image-skeleton.png" alt=""/>
          <div className={`${typedClass}__main-cont`}>
            <h2 className={`${typedClass}__title-h2`}>О компании NailMaker Bar</h2>
            <p className={`${typedClass}__subtitle`}>
              Первый салон открыт в августе 2016 года. Благодаря современному подходу к управлению бизнесом, компания растёт и развивается быстрыми темпами.<br/><br/>
              Студии NailMaker Bar предлагают качественные услуги и современный сервис в среднем ценовом сегменте. За 8 лет компания стала одним из ключевых игроков на рынке Москвы, благодаря выстроенной системе управления.
            </p>
            <a className={`${typedClass}__link`} href="/">Посмотреть сайт сети</a>
          </div>
        </AnimatedDiv>
      </Container>
    </AnimatedSection>
  )
}
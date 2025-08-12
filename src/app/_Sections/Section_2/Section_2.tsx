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
        <img className={`${typedClass}__main-photo`} src="/img/Section-2/about.png" alt=""/>
        <div className={`${typedClass}__main-cont`}>
          <h2 className={`${typedClass}__title-h2`}>О компании<br/>СЕРДЦЕ МАСТЕРА</h2>
          <p className={`${typedClass}__subtitle`}>
            С 2018 года мы выпускаем домашние станки для производства декоративного камня, блоков, плитки.<br/><br/>
            Наша компания предлагает вам приобрести надежное российское оборудование и полный курс обучающих материалов, который приведет вас к первым продажам уже через месяц!
          </p>
          <a className={`${typedClass}__link`} href="/">Посмотреть сайт сети</a>
        </div>
      </Container>
    </AnimatedSection>
  )
}
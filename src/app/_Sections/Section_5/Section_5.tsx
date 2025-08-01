import { faq_results, main_results } from "@/app/_Constants/MainResults";

import Container from "@/app/_UI/Container/Container";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";
import Revenues from "./Revenues";

import "./Section_5.scss"

interface Props {
  typedClass: string
}

export default function Section_5({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass} id="tabels">
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <div className={`${typedClass}__elipse`}></div>
        <h4 className={`${typedClass}__title-h4`}>Результаты филиалов СЕРДЦЕ МАСТЕРА</h4>
        <p className={`${typedClass}__subtitle`}>Максимальная и минимальная выручка в месяц за весь период работы клиентов. Данные актуальны на август 2025 г.</p>
        <div className={`${typedClass}__results`}>
          {main_results.map((result) => <Revenues typedClass={typedClass} result={result} key={result.id}/>)}
        </div>
        <p className={`${typedClass}__subtitle ${typedClass}__subtitle_second`}>
          Первый партнер компании СЕРДЦЕ МАСТЕРА появился в августе 2016 года, а сегодня наша сеть состоит из 31 производств, из 
          которых 4 собственных филиалов. Мы с гордостью наблюдаем за быстрым ростом компании и уверены, что это достигается 
          только благодаря применению современных инструментов управления бизнесом.
        </p>
        <div className={`${typedClass}__faqs`}>
          {faq_results.map(faq => (
            <p className={`${typedClass}__faq`} key={faq.id}>
              <span className={`${typedClass}__faq-q`}>{faq.q}</span>
              <span className={`${typedClass}__faq-a`}>{faq.a}</span>
            </p>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  )
}
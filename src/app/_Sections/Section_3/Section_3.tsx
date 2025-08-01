import { results } from "@/app/_Constants/Results";

import Container from "@/app/_UI/Container/Container";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";

import "./Section_3.scss"

interface Props {
  typedClass: string
}

export default function Section_3({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass}>
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <h3 className={`${typedClass}__title-h3`}>Результаты сети СЕРДЦЕ МАСТЕРА</h3>
        <div className={`${typedClass}__results`}>
          <div className={`${typedClass}__results-col`}>
            {results.slice(0, 3).map((result) => (
              <div className={`${typedClass}__result`} key={result.id}>
                <p className={`${typedClass}__result-icon`}>
                  <img src={result.icon} alt={result.id}/>
                </p>
                <p className={`${typedClass}__result-text`}>
                  <span className={`${typedClass}__result-text-1`}>{result.text}</span>
                  <span className={`${typedClass}__result-text-2`}>{result.subtext}</span>
                </p>
              </div>
            ))}
          </div>
          <div className={`${typedClass}__results-col`}>
            {results.slice(3).map((result) => (
              <div className={`${typedClass}__result`} key={result.id}>
                <p className={`${typedClass}__result-icon`}>
                  <img src={result.icon} alt={result.id}/>
                </p>
                <p className={`${typedClass}__result-text`}>
                  <span className={`${typedClass}__result-text-1`}>{result.text}</span>
                  <span className={`${typedClass}__result-text-2`}>{result.subtext}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  )
}
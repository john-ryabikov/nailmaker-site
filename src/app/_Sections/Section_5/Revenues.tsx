type MainResults = {
    id: string,
    cap: string,
    subcaps: string[],
    revenueMax: string,
    revenueMaxText: string,
    profitMax: string,
    revenueMin: string,
    revenueMinText: string,
    profitMin: string
}

interface Props {
  typedClass: string,
  result: MainResults
}

export default function Revenues({ typedClass, result }: Props) {
  return (
    <div className={`${typedClass}__result`}>
        <div className={`${typedClass}__result-title`}>
            <p className={`${typedClass}__result-title-cap`}>{result.cap}</p>
            <p className={`${typedClass}__result-title-subcaps`}>
                {result.subcaps.map(((subcap, i) => (<span key={i}>{subcap}</span>)))}
            </p>
        </div>
        <div className={`${typedClass}__result-revenues`}>
            <div className={`${typedClass}__result-revenue`}>
                <p className={`${typedClass}__result-revenue-info`}>
                    <span className={`${typedClass}__result-revenue-info-num`}>{result.revenueMax}</span>
                    <span className={`${typedClass}__result-revenue-info-text`}>{result.revenueMaxText}</span>
                </p>
                <p className={`${typedClass}__result-profit`}>
                    <span className={`${typedClass}__result-profit-num`}>{result.profitMax}</span>
                    <span className={`${typedClass}__result-profit-text`}>Прибыль</span>
                </p>
            </div>
            <div className={`${typedClass}__result-revenue`}>
                <p className={`${typedClass}__result-revenue-info`}>
                    <span className={`${typedClass}__result-revenue-info-num`}>{result.revenueMin}</span>
                    <span className={`${typedClass}__result-revenue-info-text`}>{result.revenueMinText}</span>
                </p>
                <p className={`${typedClass}__result-profit`}>
                    <span className={`${typedClass}__result-profit-num`}>{result.profitMin}</span>
                    <span className={`${typedClass}__result-profit-text`}>Прибыль</span>
                </p>
            </div>
        </div>
    </div>
  )
}

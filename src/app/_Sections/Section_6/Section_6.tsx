import { reviews } from "@/app/_Constants/Reviews";

import Container from "@/app/_UI/Container/Container";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";
import Reviews from "./Reviews";

import "./Section_6.scss"

interface Props {
  typedClass: string
}

export default function Section_6({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass} id="cases">
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <h4 className={`${typedClass}__title-h4`}>Кейсы партнёров СЕРДЦЕ МАСТЕРА</h4>
        <Container typedClass={`${typedClass}__cont wrapper_slider`}>
          <Reviews typedClass={typedClass}>
            {reviews.map(review => (
              <div className={`${typedClass}__reviews-slider-slide`} key={review.id}>
                <img src={review.photo} alt={review.id} />
                <div className={`${typedClass}__reviews-slider-slide-info`}>
                  <p className={`${typedClass}__reviews-slider-slide-info-title`}>
                    <span className={`${typedClass}__reviews-slider-slide-info-title-cap`}>{review.cap}</span>
                    <span className={`${typedClass}__reviews-slider-slide-info-title-subcap`}>{review.subcap}</span>
                  </p>
                  <div className={`${typedClass}__reviews-slider-slide-info-properties`}>
                    <p className={`${typedClass}__reviews-slider-slide-info-property`}>
                      {review.properties.slice(0, 4).map((property, i) => (<span key={i}>{property}</span>))}
                    </p>
                    <p className={`${typedClass}__reviews-slider-slide-info-property`}>
                      {review.properties.slice(4).map((property, i) => (<span key={i}>{property}</span>))}
                    </p>
                  </div>
                  <div className={`${typedClass}__reviews-slider-slide-info-avatar`}>
                    <div className={`${typedClass}__reviews-slider-slide-info-avatar-block`}>
                      <img src={review.avatar} alt={review.id} />
                      <p className={`${typedClass}__reviews-slider-slide-info-avatar-text`}>
                        <span className={`${typedClass}__reviews-slider-slide-info-avatar-name`}>{review.name}</span>
                        <span className={`${typedClass}__reviews-slider-slide-info-avatar-role`}>{review.role}</span>
                      </p>
                    </div>
                  </div>
                  <p className={`${typedClass}__reviews-slider-slide-info-avatar-rev`}>{review.avatar_rev}</p>
                </div>
              </div>
            ))}
          </Reviews>
        </Container>
      </Container>
    </AnimatedSection>
  )
}
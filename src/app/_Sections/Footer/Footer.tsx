import Container from "@/app/_UI/Container/Container";

import "./Footer.scss"

interface Props {
  typedClass: string
}

export default function Footer({ typedClass }: Props) {
  return (
    <footer className={`${typedClass}`}>
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <p className={`${typedClass}__rules-links`}>
          <a className={`${typedClass}__rules-link`} href="https://сердце-мастера.рф/include/offer_detail.php" target="_blank" rel="nofollow">Политика в отношении обработки персональных данных</a>
          <a className={`${typedClass}__rules-link`} href="https://сердце-мастера.рф/include/licenses_detail.php" target="_blank" rel="nofollow">Согласие на обработку персональных данных</a>
        </p>
        <p className={`${typedClass}__info`}>
          <span>ИНН: 773395015820</span>
          <span>ОГРНИП: 319774600282822</span>
        </p>
        <div className={`${typedClass}__left-links`}>
          <div className={`${typedClass}__left-links-author`}>
            <p>Разработка: <a className={`${typedClass}__left-link-author`} href="https://just-site.ru/" target="_blank" rel="nofollow">Just-site.ru</a></p>
            <p>© {new Date().getFullYear()} Все права защищены.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
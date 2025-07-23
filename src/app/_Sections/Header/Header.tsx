import { navbar } from "@/app/_Constants/Navigation";
import { socials } from "@/app/_Constants/Socials";

import Container from "@/app/_UI/Container/Container";
import ButtonPopup from "@/app/_UI/ButtonPopup/ButtonPopup";
import MenuButton from "./MenuButton";

import "./Header.scss"

interface Props {
  typedClass: string
}

export default function Header({ typedClass }: Props) {
  return (
    <header className={typedClass}>
      <Container typedClass={`${typedClass}__cont wrapper`}>
          <a className={`${typedClass}__logo`} href="#main">
            <img src="/img/Icons/logo.svg" alt="Сердце Мастера" />
          </a>
          <nav className={`${typedClass}__nav`}>
            <div className={`${typedClass}__phone`}>
              <p className={`${typedClass}__left-links-socials`}>
                {socials.map((social) => (
                  <a className={`${typedClass}__left-link-socials`} key={social.id} href={social.href} target="_blank" rel="nofollow">
                    <img src={social.icon_header} alt={social.id} />
                  </a>
                ))}
              </p>
              <p className={`${typedClass}__phone-text`}>
                <span className={`${typedClass}__phone-text-cap`}>Звонок по России бесплатный</span>
                <span className={`${typedClass}__phone-text-num`}>+7 (925) 369-90-91</span>
              </p>
            </div>
            <ul className={`${typedClass}__nav-links`}>
              {navbar.map((link) => (
                <li className={`${typedClass}__nav-link`} key={link.id}>
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
              <li>
                <ButtonPopup 
                  typedClass="button-popup"  
                  icon="/img/Icons/call_icon.svg" 
                  cont="Заказать звонок" 
                  inHeader={true}
                />
              </li>
            </ul>
          </nav>
        <MenuButton typedClass={`${typedClass}__menu-btn`}/>
      </Container>
    </header>
  )
}
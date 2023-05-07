import logoImg from '../../assets/Logo.svg'
import effectRight from '../../assets//effect_r.svg'
import effectLeft from '../../assets//effect_l.svg'
import { HeaderContainer, HeaderContent } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={effectLeft} alt="" />
        <img className="logo" src={logoImg} alt="" />
        <img src={effectRight} alt="" />
      </HeaderContent>
    </HeaderContainer>
  )
}

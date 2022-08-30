import Link from 'next/link'
import * as S from './styles'

const Navbar = () => {
  return (
    <S.MenuNav>

      <Link href='#about' passHref>
        <S.NavLink>
          about
        </S.NavLink>
      </Link>

      <Link href='#services' passHref>
        <S.NavLink>
          services
        </S.NavLink>
      </Link>

      <Link href='#works' passHref>
        <S.NavLink>
          works
        </S.NavLink>
      </Link>

      <Link href='#contact' passHref>
        <S.NavLink>
          contact
        </S.NavLink>
      </Link>

    </S.MenuNav>
  )
}

export default Navbar
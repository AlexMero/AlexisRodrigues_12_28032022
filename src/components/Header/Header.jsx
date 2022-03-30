import logo from '../../assets/logo.png'

function Header() {
  return (
    <section className="Header">
      <img src={logo} alt="logo sport see" />
      <nav>
        <p>Accueil</p>
        <p>Profil</p>
        <p>Réglage</p>
        <p>Communauté</p>
      </nav>
    </section>
  )
}

export default Header

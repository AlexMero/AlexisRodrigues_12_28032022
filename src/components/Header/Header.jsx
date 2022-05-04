import logo from '../../assets/logo.png'

function Header() {
  return (
    <section className="Header">
      <div className="imgContainer">
        <img src={logo} alt="logo sport see" />
      </div>
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

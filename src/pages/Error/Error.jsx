import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'

function Error() {
  return (
    <div className="Home">
      <Header />
      <main>
        <h1>
          La page est <span>introuvable</span>
        </h1>
        <p className="congratulation">
          <a href="user/12">Retourner à la page user en cliquant ici !</a>
        </p>
      </main>
      <Footer />
    </div>
  )
}

export default Error

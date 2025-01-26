import React from "react"
import {
  iconeFlor,
  iconeEmail,
  iconeCalendario,
  logoYunabacaxi,
  fotoYuna,
  logoDiscord,
  logoKofi,
  logoSpotify,
  logoSteam,
  logoTwitch,
  logoX,
  iconeHome
} from "../../assets"
import "./styles.css"

export function Home() {
  return (
    <>
      <header className="header">
        <img src={logoYunabacaxi} />
      </header>

      <main className="container-general">
        <nav className="navigation">
          <h2>X</h2>
          <div className="icon-and-title">
            <img src={iconeHome} alt="Ícone da página da Home" />
            <h2>HOME</h2>
          </div>
          <div className="icon-and-title">
            <img src={iconeEmail} alt="Ícone da página de Email" />
            <h2>CONTATO</h2>
          </div>
          <div className="icon-and-title">
            <img src={iconeFlor} alt="Ícone da página de Galeria" />
            <h2>GALERIA</h2>
          </div>
          <div className="icon-and-title">
            <img src={iconeCalendario} alt="Ícone da página de Outros" />
            <h2>OUTROS</h2>
          </div>
          <h1>X</h1>
        </nav>

        <div className="container-infos-vtuber">
          <div className="container-vtuber-and-links">
            <img className="icon-vtuber" src={fotoYuna} alt="logoDaVtuberYunabacaxi" />

            <div className="locale-social">Redes sociais</div>
            <div className="links">
              <img src={logoX} alt="Logo rede social X" />
              <img src={logoTwitch} alt="Logo da twitch" />
              <img src={logoDiscord} alt="Logo do discord" />
              <img src={logoSteam} alt="Logo steam" />
              <img src={logoSpotify} alt="Logo spotify" />
              <img src={logoKofi} alt="Logo Kofi" />
            </div>
          </div>

          <div className="container-about-me">
            <h2>Bem Vindo</h2>
            <span>aqui você encontra tudo sobre mim, minhas lives e comissões</span>
            <h2>Sobre Mim</h2>
            <span>Nome: Yuna</span>
            <span>Idade: 20 anos</span>
            <span>Aniversário: 05/02</span>
          </div>

          <div className="container-games-and-comissions">
            <div className="games">
              <h2>O que eu jogo?</h2>
              <div className="logo-games">
                <span>logo</span>
                <span>logo</span>
                <span>logo</span>
              </div>
              <span>+ jogos de história e joguinhos com os amigos!</span>
            </div>
            <div className="comissions-info">
              <h1>COMISSIONS</h1>
              <span>Também faço design para streams!
                inclusive esse site! de uma olhadinha no meu ko-fi e na minha galeria!
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
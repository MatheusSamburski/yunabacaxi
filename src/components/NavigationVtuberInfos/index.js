import React, { useState } from "react"
import {
  iconeFlor,
  iconeEmail,
  iconeCalendario,
  iconeHome
} from "../../assets"
import "./styles.scss"
import { Home } from "./components/Home"
import { Contact } from "./components/Contact"
import { Others } from "./components/Others"
import { Galery } from "./components/Galery"

export function NavigationVtuberInfos() {
  const [route, setRoute] = useState("Home")

  return (
    <main className="container-general">
      <nav className="navigation">
        <h2 className="icon-navigation-x">X</h2>
        <div className="container-icons-pages">
          <div onClick={() => setRoute("Home")} className={`icon-and-title ${route === "Home" && "home-selected"}`}>
            <img src={iconeHome} alt="Ícone da página da Home" />
            <h2>HOME</h2>
          </div>
          <div onClick={() => setRoute("Contact")} className={`icon-and-title ${route === "Contact" && "contact-selected"}`}>
            <img src={iconeEmail} alt="Ícone da página de Email" />
            <h2>CONTATO</h2>
          </div>
          <div onClick={() => setRoute("Galery")} className={`icon-and-title ${route === "Galery" && "galery-selected"}`}>
            <img src={iconeFlor} alt="Ícone da página de Galeria" />
            <h2>GALERIA</h2>
          </div>
          <div onClick={() => setRoute("Others")} className={`icon-and-title ${route === "Others" && "others-selected"}`}>
            <img src={iconeCalendario} alt="Ícone da página de Outros" />
            <h2>OUTROS</h2>
          </div>
        </div>
        <h2 className="icon-navigation-x">X</h2>
      </nav>


      <div className="container-infos-vtuber">
        {route === "Home" && <Home />}
        {route === "Contact" && <Contact />}
        {route === "Galery" && <Galery />}
        {route === "Others" && <Others />}
      </div>

      <div className="navigation-pink-footer"></div>
    </main>
  )
}
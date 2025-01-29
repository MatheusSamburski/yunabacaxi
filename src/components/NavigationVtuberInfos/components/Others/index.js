import React from "react"
import { layoutOthers, logoShein, logoShoppe, logoSteam2, logoTemu, spotifyLives, spotifyPessoal } from "../../../../assets"

export function Others() {
  return (
    <>
      <img src={layoutOthers} />

      <div className="container-wish-list">
        <a className="container-shoppee" href="Link para a lista de desejos da Shoppee da Yunabacaxi">
          <img  className="" src={logoShoppe} alt="Logo da shoppe" />
          <span>Shoppee</span>
        </a>

        <a href="Link para a lista de desejos da Temu da Yunabacaxi">
          <img src={logoTemu} alt="Logo da Temu" />
          <span>Temu</span>
        </a>
        
        <a href="" aria-label="Link para a lista de desejos da Shein da Yunabacaxi">
          <img src={logoShein} alt="Logo da Shein" />
          <span>Shein</span>
        </a>

        <a href="Link para a lista de desejos da Steam da Yunabacaxi">
          <img src={logoSteam2} alt="Logo da Steam" />
          <span>Steam</span>
        </a>
      </div>

      <a href="https://open.spotify.com/playlist/0hxkdHeirWhKTf9NCfedBu?si=a55b772e43e1491f" target="_blank" aria-label="Link para a playlist pessoal no Spotify de Yunabacaxi">
        <img className="my-spotify" src={spotifyPessoal} />
      </a>

      <a href="https://open.spotify.com/playlist/5hla7bfv4XwFXgIpKv9tGl?si=a817a7876f7443bd" target="_blank" aria-label="Link para a playlist de lives no Spotify de Yunabacaxi">
        <img className="lives-spotify" src={spotifyLives} />
      </a>
    </>
  )
}
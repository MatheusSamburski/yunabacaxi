import React from "react"
import { layoutHome, logoDiscord, logoKofi, logoSpotify, logoSteam, logoTwitch, logoX } from "../../../../assets"

export function Home() {
  return (
    <>
      <img src={layoutHome} alt="" />
      <div className="container-icons-social">
        <a className="icon-x" href="https://x.com/yunabacaxi_" target="_blank" aria-label="Link de redirecionamento para a rede social X da Yunabacaxi">
          <img src={logoX} alt="Logo do X" />
        </a>

        <a className="icon-twitch" href="https://www.twitch.tv/yunabacaxi" target="_blank" aria-label="Link de redirecionamento para a twitch da Yunabacaxi">
          <img src={logoTwitch} alt="Logo da Twitch" />
        </a>

        <a className="icon-discord" href="https://discord.gg/z9VqG7JK8J" target="_blank" aria-label="Link de redirecionamento para o discord da Yunabacaxi">
          <img src={logoDiscord} alt="Logo do Discord" />
        </a>

        <a className="icon-steam" href="https://steamcommunity.com/profiles/76561198985229140" target="_blank" aria-label="Link de redirecionamento para a steam da Yunabacaxi">
          <img src={logoSteam} alt="Logo da Steam" />
        </a>

        <a className="icon-spotify" href="https://open.spotify.com/user/cugjrf2fsvihyfobid4q7fhqh?si=874c2e6000eb4176" target="_blank" aria-label="Link de redirecionamento para o Spotify da Yunabacaxi">
          <img src={logoSpotify} alt="Logo do spotify" />
        </a>

        <a className="icon-kofi" href="https://ko-fi.com/yunabacaxi/commissions" target="_blank" aria-label="Link de redirecionamento para o Kofi de Yunabacaxi">
          <img src={logoKofi} alt="logo da Kofi" />
        </a>
      </div>
    </>
  )
}
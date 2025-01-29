import React from "react"
import {
  logoYunabacaxi,
} from "../../assets"
import "./styles.css"

export function Header() {
  return (
    <header className="header">
      <img src={logoYunabacaxi} />
    </header>
  )
}
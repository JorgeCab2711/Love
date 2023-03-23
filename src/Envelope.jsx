import React from 'react'
import './Envelope.css'
import Mplayer from './Mplayer'
import cats from './cats.gif'

export default function Envelope() {
  return (
    <>
      <div className="aniversary">
        <div className="envelope">
          <div className="card">
            <div className="text">
              <div className="title">
              Amada y querida esposa Camila, 
              </div>
              <div className="message">
              Amor y felicidad mía, sendero de mi vida, dulce y tierna compañera de vida:

Hoy es un día muy especial, hace un año y seis meses hicimos una promesa, quizás no de forma explícita, pero ya estaba decidido incluso antes de que te hiciera la pregunta más importante de mi vida. Tú lo decidiste unos meses antes, yo lo había decidido años atrás, en caso de que se presentara la oportunidad.

Hoy, mi amor, quiero decirte que esa promesa es la más sencilla de cumplir. Cada día que pasa, te amo más y se me hace más fácil amarte. Cada vez que me lanzas esa mirada que me hace sentir como si mi corazón se detuviera por sí mismo, cuando te ríes nerviosamente por alguna travesura que hiciste, o cuando escondes mis cosas para no separarte de mí, me hace llegar a la conclusión de que amarte es la cosa más fácil que pude haber hecho en la vida.

Gracias por elegir compartir tu vida conmigo. No sabes lo especial y afortunado que me siento de tenerte a mi lado. Te amo, Camila (futura) de Caballeros. Feliz año y medio, corazón.

Atentamente,
Jorhershey
              </div>
            </div>
          </div>
        </div>
        <div className="front"></div>
        <div className="seal"></div>
        <div className="container-media">
        <Mplayer className = 'music'/>
        <img className = 'cats' src={cats} alt="" />
        </div>
      </div>
    </>
  )
}

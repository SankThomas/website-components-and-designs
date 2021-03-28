import React from "react"
import data from "./data/data"

const App = () => {
  // eslint-disable-next-line
  const [cards, setCards] = React.useState(data)
  return (
    <>
      <section className="grid-section">
        {cards.map(({ id, title, desc, btn }) => {
          return (
            <article key={id} className="article-card">
              <h4>{title}</h4>
              <p>{desc}</p>
              <button>{btn} &rarr;</button>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default App

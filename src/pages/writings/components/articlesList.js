import React from 'react'
import s from './articlesList.module.css'

export default function ArticlesList({ articles }) {

  const Card = ({ data }) => {
    return (
      <div
        className={s.card}
        target='_blank'
        onClick={() => window.open(data.url, '_blank')}
      >
        <div className={s.title}>
          {data.title}
        </div>
        <div className={s.details}>
          July 7, 2021 • ☕️☕️☕️ 14 min read
        </div>
        <div className={s.description}>
          {data.description}
        </div>
      </div>
    )
  }

  return (
    <section id={s.list}>
      {articles.map((data) => <Card data={data} />)}
    </section>
  )
}
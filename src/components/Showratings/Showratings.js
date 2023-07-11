import React from 'react'
import "./Showratings.scss"

function Showratings({ratings, type}) {
  return (
    <div className='show_ratings'>
        <div className="title">
            <span className='count'>{ratings.length}</span>
            <span>{type === "Ethical" ? "Ethical Code of conduct.." : "Have Met in real life/Video call"}</span>
        </div>
    </div>
  )
}

export default Showratings
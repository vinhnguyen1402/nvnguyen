import React from 'react'

export default ({ title = 'about', text = '',schoolName='' }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{schoolName}</h2>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  )
}

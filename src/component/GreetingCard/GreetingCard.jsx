// props
import React from 'react'

export default function GreetingCard({name}) {
  return (
    <div style={{border:"2px solid black"}}>
      <h1>Hello {name}</h1>
      <p>Have a great day</p>
    </div>
  )
}

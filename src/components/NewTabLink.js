import React from 'react'

export default function NewTabLink({to, content}) {
  return (
    <a target="_blank" rel="noreferrer" href={to}>
      {content}
    </a>
  )
}

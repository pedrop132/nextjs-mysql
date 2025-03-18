'use client'

import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    fetch('/api/utilizadores')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])
  return <h1>Teste</h1>
}
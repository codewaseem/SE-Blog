import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

export default () => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  )
}

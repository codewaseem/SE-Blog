import React from "react"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const StyledH1 = styled.h1`
  color: rebeccapurple;
`
export default () => {
  const { title, description } = useSiteMetadata()

  return (
    <Link to="/">
      <StyledH1>{title}</StyledH1>
      <p>{description}</p>
    </Link>
  )
}

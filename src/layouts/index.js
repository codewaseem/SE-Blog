import React from "react"
import styled from "@emotion/styled"
import Header from "../components/Header"

const AppStyles = styled.main`
  width: 800px;
  margin: 0 auto;
`

export default ({ children }) => {
  return (
    <AppStyles>
      <Header />
      {children}
    </AppStyles>
  )
}

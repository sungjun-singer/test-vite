import React from 'react'
import {Link} from "react-router-dom"

const Main = () => {
  return (
    <>
        <Link to="/about">About</Link>
        <Link to="/detail">NotFound</Link>
    </>
  )
}

export default Main
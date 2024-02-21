import React from 'react'
import {Outlet} from "react-router-dom";

const About = () => {
  return (
    <>
        <h1>상세페이지입니다.</h1>
        <Outlet />
    </>
  )
}

export default About
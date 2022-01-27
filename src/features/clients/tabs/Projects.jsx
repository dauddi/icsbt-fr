import React from 'react'
import Router from 'next/router'
import { SharedTable } from '../../../components'


const Projects = () => {
  const handleClick = () => {
    Router.push('/app/projects/1');
  }

  return (
    <SharedTable handleClick={handleClick} >

    </SharedTable>
  )
}

export default Projects

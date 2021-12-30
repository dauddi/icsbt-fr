import React from 'react'
import { AppLayout } from "../../../src/components";

const Statements = () => {
    return (
        <h1>Statements Route</h1>
    )
}

Statements.getLayout = function getLayout(page) {
    return (
      <AppLayout>
        {page}
      </AppLayout>
    )
  }

export default Statements

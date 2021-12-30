import React from 'react'
import {AppLayout} from "../../../src/components";

const Contracts = () => {
    return (
        <h1>Contracts Route</h1>
    )
}

Contracts.getLayout = function getLayout(page) {
    return (
      <AppLayout>
        {page}
      </AppLayout>
    )
  }

export default Contracts

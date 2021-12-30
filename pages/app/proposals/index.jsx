import React from 'react'
import { AppLayout } from "../../../src/components";

const Proposals = () => {
    return (
        <h1>Proposals Route</h1>
    )
}

Proposals.getLayout = function getLayout(page) {
    return (
      <AppLayout>
        {page}
      </AppLayout>
    )
  }

export default Proposals

import React from 'react'
import {AppLayout} from "../../../src/components";

const Invoices = () => {
    return (
        <h1>Invoices Route</h1>
    )
}

Invoices.getLayout = function getLayout(page) {
    return (
      <AppLayout>
        {page}
      </AppLayout>
    )
  }

export default Invoices

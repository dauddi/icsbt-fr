import React from 'react'
import { AppLayout } from "../../../src/components";

const Transactions = () => {
    return (
        <h1>Transactions Route</h1>
    )
}

Transactions.getLayout = function getLayout(page) {
    return (
      <AppLayout>
        {page}
      </AppLayout>
    )
}


export default Transactions

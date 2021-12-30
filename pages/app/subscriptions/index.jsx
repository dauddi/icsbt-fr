import React from 'react'
import { AppLayout } from "../../../src/components";

const Subscriptions = () => {
    return (
        <h1>Subscritions Route</h1>
    )
}

Subscriptions.getLayout = function getLayout(page) {
    return (
      <AppLayout>
        {page}
      </AppLayout>
    )
  }

export default Subscriptions;

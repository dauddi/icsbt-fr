import React from 'react'
import { AppLayout } from "../../../src/components";

const ReceiptsBox = () => {
    return (
        <h1>ReceiptsBox Route</h1>
    )
}

ReceiptsBox.getLayout = function getLayout(page) {
    return (
      <AppLayout>
        {page}
      </AppLayout>
    )
  }

export default ReceiptsBox

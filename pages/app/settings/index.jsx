import React from 'react'
import { AppLayout } from "../../../src/components";

const Settings = () => {
    return (
        <h1>Settings Home Route</h1>
    )
}

Settings.getLayout = function getLayout(page) {
    return (
      <AppLayout>
        {page}
      </AppLayout>
    )
  }

export default Settings

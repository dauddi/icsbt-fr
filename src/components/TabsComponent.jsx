import React from 'react'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const TabsComponent = ({ tabs, children }) => {
  return (
    <Tabs>
      <TabList>
        { tabs.map(tab => <Tab color="gray" _focus={{outline: 'none'}}> {tab} </Tab>) }
      </TabList> 
      <TabPanels>
        { children }
      </TabPanels>
    </Tabs>
  )
}

export default TabsComponent

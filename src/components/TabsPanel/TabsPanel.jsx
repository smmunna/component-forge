import React from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';

const TabsPanel = ({ tabs, children }) => {
  return (
    <Tabs>
      <TabList className="flex justify-center mb-4 bg-black rounded-t-lg">
        {tabs.map((tab, index) => (
          <Tab key={index} className="px-6 py-2 text-white hover:bg-gray-700 cursor-pointer">
            {tab.label}
          </Tab>
        ))}
      </TabList>
      {children}
    </Tabs>
  );
};

export default TabsPanel;

import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

export default function TabsWithIcon() {
  const [activeTab, setActiveTab] = React.useState("dashboard");

  function handleTabChange(selectedTab) {
    console.log("Selected Tab:", selectedTab);
    setActiveTab(selectedTab);
  }

  const data = [
    {
      label: "Basketball",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Football",
      value: "profile",
      icon: UserCircleIcon,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Baseball",
      value: "settings",
      icon: Cog6ToothIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Soccer",
      value: "settings2",
      icon: Cog6ToothIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <Tabs value={activeTab} className="bg-transparent">
      <TabsHeader className="bg-transparent border-customYellow border-b-2">
        {data.map(({ label, value, icon }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => handleTabChange(value)}
            className={`${
              activeTab === value ? "bg-customYellow text-black" : "bg-transparent text-white/80"
            } rounded-lg font-montserrat font-bold`}
            
          >
            <div className="flex items-center gap-2">
              {/* {React.createElement(icon, { className: "w-5 h-5" })} */}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

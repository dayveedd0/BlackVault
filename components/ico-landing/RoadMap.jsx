import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const RoadMap = () => {
  const [itemsTabs, setItemsTabs] = useState(1);

  const roadMapList = [
    {
      id: 1,
      tabMenu: "PHASE 1: Development",
    },
    {
      id: 2,
      tabMenu: "PHASE 2: Launch",
    },
    {
      id: 3,
      tabMenu: "PHASE 3: Expansion",
    },
    {
      id: 4,
      tabMenu: "PHASE 4: Global Adoption",
    },
  ];
  const roadMapContent = [
    {
      id: 1,
      text: `Finalize protocol design, develop core algorithms, and set up a testnet.
      Begin community outreach and establish initial governance structures.`,
    },
    {
      id: 2,
      text: `Launch the mainnet and establish mining pools.
      Begin targeted marketing efforts to attract miners and users`,
    },
    {
      id: 3,
      text: `Integrate additional privacy features, expand marketplace options, and establish cross-chain compatibility.
      Continuously refine governance processes and involve the community in decision-making.`,
    },
    {
      id: 4,
      text: `Focus on mass adoption with user education campaigns, strategic partnerships, and continuous technological upgrades.`,
    },
  ];

  return (
    <section
      id="roadmap"
      className="relative bg-cover bg-center bg-no-repeat py-24 after:absolute after:inset-0 after:bg-black/60"
      style={{
        backgroundImage: 'url("/images/ico-landing/ico_landing_roadmap.jpg")',
      }}
    >
      <div className="container relative z-10">
        <h2 className="mb-6 font-display text-3xl text-gold">Roadmap</h2>
        <p className="mb-12 max-w-xl text-lg text-jacarta-300">
          This timeline details our funding and development goals.
        </p>

        <Tabs>
          <div className="flex">
            <TabList className="nav nav-tabs w-1/3 space-y-9 self-start border-l-2 border-jacarta-200 py-2 pl-2 md:pl-8">
              {roadMapList.map((item) => (
                <Tab
                  className="nav-item"
                  key={item.id}
                  onClick={() => setItemsTabs(item.id)}
                >
                  <button
                    className={
                      itemsTabs === item.id
                        ? "active nav-link nav-link--style-3 relative flex items-center  text-jacarta-300 hover:text-white"
                        : "nav-link nav-link--style-3 relative flex items-center  text-jacarta-300 hover:text-white"
                    }
                  >
                    <span className="px-2 font-display text-lg font-medium md:text-2xl">
                      {item.tabMenu}
                    </span>
                  </button>
                </Tab>
              ))}
            </TabList>
            {/* End Tablist  */}

            <div className="tab-content pl-4 md:mt-16 md:w-2/4">
              {roadMapContent.map((item) => (
                <TabPanel key={item.id}>
                  <p className="text-lg text-white ">{item.text}</p>
                </TabPanel>
              ))}
            </div>
            {/* End tab-content */}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default RoadMap;

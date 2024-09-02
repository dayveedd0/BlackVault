/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-4 w-4 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const itemContent = [
  {
    id: 1,
    title: "Privacy-Focused Mining",
    descriptions: ` Anonymous Mining Pools: Join mining pools without revealing your identity or IP address, using advanced privacy protocols like Tor or I2P.`,
  },
  {
    id: 2,
    title: "Stealth Protocols",
    descriptions: ` Utilize stealth mining protocols that obscure your activities, making it nearly impossible for external observers to trace or monitor your operations.`,
  },
  {
    id: 3,
    title: "Community Governance",
    descriptions: ` Governed by its community, with miners and stakeholders voting on protocol changes and upgrades to ensure decentralized control.`,
  },
  {
    id: 4,
    title: " Adaptive Difficulty",
    descriptions: ` Employs an adaptive proof-of-work algorithm that dynamically adjusts difficulty based on network activity, ensuring equitable participation`,
  },
  {
    id: 5,
    title: "Energy Efficiency",
    descriptions: ` Features energy-efficient algorithms that reduce the computational power required, minimizing environmental impact while maintaining top-tier security.`,
  },
  {
    id: 6,
    title: "Private Transactions",
    descriptions: ` The platform integrates a marketplace where users can buy, sell, or trade goods and services anonymously, with a focus on privacy and security.`,
  },
  {
    id: 7,
    title: "End-to-End Encryption",
    descriptions: `All communications and transactions within the network are encrypted end-to-end, ensuring maximum security.`,
  },
  {
    id: 8,
    title: "Integration with Privacy Coins",
    descriptions: ` Compatible with leading privacy coins like Monero (XMR) and Zcash (ZEC) for seamless and secure transactions`,
  },
  {
    id: 9,
    title: "Distributed Ledger",
    descriptions: `Utilizes a distributed ledger across the network to mitigate the risk of a 51% attack, with robust consensus mechanisms to prevent double-spending and fraud.`,
  },
];

const FaqAccordion = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      {itemContent.map((item) => (
        <Accordion
          className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600 h-auto"
          key={item.id}
          open={open === item.id}
          icon={<Icon id={item.id} open={open} />}
        >
          <AccordionHeader
            className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-sm text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
            onClick={() => handleOpen(item.id)}
          >
            {item.title}
          </AccordionHeader>
          <div className="hidden-style">
            <AccordionBody className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
              {item.descriptions}
            </AccordionBody>
          </div>
        </Accordion>
      ))}
    </>
  );
};

export default FaqAccordion;

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Benifits = () => {
  const singleBenifits = [
    {
      id: 1,
      title: "Privacy-Focused Mining",
      text: ` Anonymous Mining Pools: Join mining pools without revealing your identity or IP address, using advanced privacy protocols like Tor or I2P.`,
    },
    {
      id: 2,
      title: "Stealth Protocols",
      text: ` Utilize stealth mining protocols that obscure your activities, making it nearly impossible for external observers to trace or monitor your operations.`,
    },
    {
      id: 3,
      title: "Community Governance",
      text: ` Governed by its community, with miners and stakeholders voting on protocol changes and upgrades to ensure decentralized control.`,
    },
    {
      id: 4,
      title: " Adaptive Difficulty",
      text: ` Employs an adaptive proof-of-work algorithm that dynamically adjusts difficulty based on network activity, ensuring equitable participation`,
    },
    {
      id: 5,
      title: "Energy Efficiency",
      text: ` Features energy-efficient algorithms that reduce the computational power required, minimizing environmental impact while maintaining top-tier security.`,
    },
    {
      id: 6,
      title: "Private Transactions",
      text: ` The platform integrates a marketplace where users can buy, sell, or trade goods and services anonymously, with a focus on privacy and security.`,
    },
    {
      id: 7,
      title: "End-to-End Encryption",
      text: `All communications and transactions within the network are encrypted end-to-end, ensuring maximum security.`,
    },
    {
      id: 8,
      title: "Integration with Privacy Coins",
      text: ` Compatible with leading privacy coins like Monero (XMR) and Zcash (ZEC) for seamless and secure transactions`,
    },
    {
      id: 9,
      title: "Distributed Ledger",
      text: `Utilizes a distributed ledger across the network to mitigate the risk of a 51% attack, with robust consensus mechanisms to prevent double-spending and fraud.`,
    },
  ];
  return (
    <>
      <section className="py-24 dark:bg-black benifit-section" id="features">
      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-gold">
            Core Features
          </h2>
          <p className="text-lg dark:text-jacarta-300 text-jacarta-800">
          Designed to offer unparalleled security and anonymity, BlackVault empowers users to mine digital assets in a secure and private environment, ensuring that their activities remain confidential while unlocking the future of decentralized finance.
          </p>
        </div>
      </div>
        <div className="container">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView="auto"
            loop={true}
            breakpoints={{
              240: {
                slidesPerView: 1,
              },
              565: {
                slidesPerView: 2,
              },
              995: {
                slidesPerView: 3,
              },
            }}
            className="!pt-10"
          >
            {singleBenifits.map((item) => {
              const { id, title, text } = item;
              return (
                <SwiperSlide className="text-white overflow-visible" key={id}>
                  <div
                    className="mb-12 rounded-2.5xl border border-green bg-green p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-white dark:bg-gold"
                    key={id}
                  >
                    {/* <div className="mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                      <img
                        src={`/images/crypto-app/${icon}.svg`}
                        alt="icon"
                        width="24"
                        height="24"
                        className="h-12 w-12"
                      />
                    </div> */}

                    <h3 className="mb-4 mt-5 font-display text-lg text-jacarta-700 dark:text-white">
                      {title}
                    </h3>
                    <p className="dark:text-white text-jacarta-700">
                      {text}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Benifits;


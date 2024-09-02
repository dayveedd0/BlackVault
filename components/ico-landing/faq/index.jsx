import Faq from "./Faq";

const index = () => {
  return (
    <section className="bg-light-base py-24 dark:bg-jacarta-800">
      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
            Core Features
          </h2>
          <p className="text-lg dark:text-jacarta-300 text-jacarta-800">
          Designed to offer unparalleled security and anonymity, BlackVault empowers users to mine digital assets in a secure and private environment, ensuring that their activities remain confidential while unlocking the future of decentralized finance.
          </p>
        </div>
        <div className="lg:flex lg:flex-nowrap">
          <div className="lg:w-[59%]">
            <figure className="relative mb-8 overflow-hidden rounded-3xl">
              <img
                src="/images/ico-landing/ico_landing_promo.png"
                alt="icon landing"
              />
            </figure>
          </div>
          <div className="lg:w-[41%] lg:pl-24">
            <p className="mt-10 mb-5 dark:text-jacarta-300">
            BlackVault empowers users to mine digital assets in a secure and private environment, ensuring that their activities remain confidential while unlocking the future of decentralized finance.
            </p>
            <Faq />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;

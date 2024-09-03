const Features = () => {
  const featuresContent = [
    {
      id: 1,
      icon: (
        <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="h-6 w-6 fill-white"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4 10v4h2v-4H7zm4-6v10h2V7h-2zm4 3v7h2v-7h-2z" />
        </svg>
      </>
      ),
      title: "50% (500 million BLVT)",
      text: `Mining Rewards (distributed over 2+ years).`,
    },
    {
      id: 2,
      icon: (
        <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="h-6 w-6 fill-white"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4 10v4h2v-4H7zm4-6v10h2V7h-2zm4 3v7h2v-7h-2z" />
        </svg>
      </>
      ),
      title: "20% (200 million BLVT)",
      text: `Development Fund (with a 2-year vesting schedule)`,
    },
    {
      id: 3,
      icon: (
        <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="h-6 w-6 fill-white"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4 10v4h2v-4H7zm4-6v10h2V7h-2zm4 3v7h2v-7h-2z" />
        </svg>
      </>
      ),
      title: "15% (150 million BLVT)",
      text: `Community & Ecosystem (staking, governance, incentives)`,
    },
    {
      id: 4,
      icon: (
        <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="h-6 w-6 fill-white"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4 10v4h2v-4H7zm4-6v10h2V7h-2zm4 3v7h2v-7h-2z" />
        </svg>
      </>
      ),
      title: "10% (100 million BLVT)",
      text: `Team & Advisors (4-year vesting, 1-year cliff)`,
    },
    {
      id: 5,
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="h-6 w-6 fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4 10v4h2v-4H7zm4-6v10h2V7h-2zm4 3v7h2v-7h-2z" />
          </svg>
        </>
      ),
      title: "5% (50 million BLVT)",
      text: `Strategic Partnerships & Marketing`,
    },
  ];

  return (
    <>
      {/* <!-- Features --> */}
      <section className="relative pt-24 pb-10 dark:bg-black">
        <div className="container">
          <div className="lg:flex lg:flex-nowrap">
            <div className="mb-16 lg:w-1/2 lg:pr-20">
              <img
                src="/images/crypto-app/3d_elements_crypto_app.png"
                alt="cryto portfolio"
                loading="lazy"
                className="rounded-2.5xl"
              />
            </div>
            {/* <!-- End Left Image --> */}

            {/* <!-- Info --> */}
            <div className="mb-16 lg:w-2/3 lg:pl-5">
              <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-gold">
                Tokenomics
              </h2>
              <p className=" mb-12 text-lg leading-normal dark:text-jacarta-300">
                Distribution
              </p>

              {featuresContent.map((item) => (
                <div className="mb-6 flex space-x-6" key={item.id}>
                  <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-2xl dark:bg-gold">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="mb-3 mt-2 block font-display text-xl font-semibold text-jacarta-700 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="dark:text-jacarta-300">{item.text}</p>
                  </div>
                </div>
              ))}

              <div className="mt-10">
                <a
                  href="https://dexscreener.com"
                  className="inline-block rounded-full bg-gold py-3 px-8 text-center font-semibold text-white  transition-all hover:bg-green"
                >
                  Released TBA
                </a>
              </div>
              {/* End btn text */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end features -->   */}
    </>
  );
};

export default Features;

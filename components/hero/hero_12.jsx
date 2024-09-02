import Link from "next/link";


const hero_12 = () => {
  return (
    <section className="relative my-2 h-screen bg-black ">
      {/* <picture className="pointer-events-none absolute inset-0 -z-10">
        <img
          src="/images/gradient_dark.jpg"
          alt="gradient dark"
          className="h-full w-full"
        />
      </picture> */}

      <picture className="pointer-events-none absolute inset-y-0 right-6 -z-100 hidden items-center justify-end md:flex xl:right-[10%]">
        <img
          src="/images/ico-landing/hero.svg"
          alt="hero"
          className="w-96 xxl:w-auto"
        />
      </picture>

      <div className="ml-auto mr-auto h-full max-w-[91rem] px-4">
        <div className="grid h-full items-center gap-4 md:grid-cols-12">
          <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:ml-10 lg:py-20">
            <p className="mb-5 inline-block bg-gold bg-clip-text text-lg text-transparent">
              Mining Application
            </p>
            <h1 className="mb-8 text-center font-display text-5xl text-white md:text-left lg:text-6xl">
              A cutting-edge cryptocurrency platform focused on privacy-centric mining operations.
            </h1>
            <div className="flex space-x-4">
              <Link href="/collection/explore_collection">
                <a className="rounded-full bg-green py-3 px-8 text-center font-semibold text-white  transition-all hover:bg-gold">
                  Get Started
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero_12;

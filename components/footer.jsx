import Link from "next/link";
import { socialIcons } from "../data/footer_data";
import { FaMediumM } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}

      <footer className="dark:bg-black page-footer bg-black">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12">
            <div className="col-span-12 md:col-span-12">
              {/* <!-- Logo --> */}
              <Link href="#">
                <a className="mb-6 inline-block">
                  <img
                    src="/images/logo.png"
                    className="max-h-7 dark:hidden"
                    alt="BLACK VAULT CRYPTO MINER"
                  />
                </a>
              </Link>

              <Link href="#">
                <a className=" mb-6 inline-block">
                  <img
                    src="/images/logo.png"
                    className="hidden max-h-40 dark:block mb-6"
                    alt="BLACK VAULT CRYPTO MINER"
                  />
                </a>
              </Link>
              <p className="dark:text-jacarta-300 mb-12">
              BlackVault empowers users to mine digital assets in a secure and private environment, ensuring that their activities remain confidential while unlocking the future of decentralized finance.
              </p>

              {/* <!-- Socials --> */}
              <div className="flex space-x-6">
                <Link href="https://medium.com/@blackvaultcoin/">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer"
                >
                <FaMediumM className="text-lg text-jacarta-300 dark:text-white" />
                </a>
                </Link>

                {socialIcons.map((item) => {
                  const { id, href, text } = item;
                  return (
                    <Link href={href} key={id}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group cursor-pointer"
                      >
                        <svg className="icon group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white">
                          <use xlinkHref={`/icons.svg#icon-${text}`}></use>
                        </svg>
                      </a>
                    </Link>
                  );
                })}
                <Link href="https://t.me/BlackVaultCoin">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer"
                >
                <FaTelegramPlane className="text-lg text-jacarta-300 dark:text-white" />
                </a>
                </Link>
              </div>
            </div>

          
          </div>

          <div className="flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
            <span className="dark:text-jacarta-400 text-sm">
              <span>© {new Date().getFullYear()} BlackVault</span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;

import Head from "next/head";

const Meta = ({ title, keyword, desc }) => {
  return (
    <div>
      <Head>
        <title>{title} || Crypto Miner</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={desc} />
        <meta name="keyword" content={keyword} />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "Black Vault",
  keyword:
    "bitcoin, blockchain, crypto, crypto collectibles, crypto makretplace, cryptocurrency, digital items, market, nft, nft marketplace, nft next js, NFT react, non-fungible tokens, virtual asset, wallet",
  desc: "BlackVault is a cutting-edge cryptocurrency platform focused on privacy-centric mining operations. Designed to offer unparalleled security and anonymity, BlackVault empowers users to mine digital assets in a secure and private environment, ensuring that their activities remain confidential while unlocking the future of decentralized finance.",
};

export default Meta;

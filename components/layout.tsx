import Head from "next/head";

export default function Layout({ children }: Element) {
  return (
    <>
      <Head>
        <title>SHMS Class of 1970</title>
      </Head>
      {children}
    </>
  );
}

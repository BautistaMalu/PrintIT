import { type NextPage } from "next";
import Head from "next/head";
import { signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import Link from "next/link";
import { Logo } from "~/components/logo"; 
import { NavBar } from "~/components/navBar";

const Landing: NextPage = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined,
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <>
      <Head> 
        <title>PrintIT</title>
        <link rel="icon" href="/Logo.ico"/>
        <meta name="description" content="PrintIT" />
      </Head>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-white from-[#2e026d] to-[#15162c]">
        <Logo height={50} width={50} justifyContent={"center"} display={"flex"} />
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl p-5">PrintIT</h1>
        <button>
          <p className="bg-blue-500 text-white py-2 px-4 rounded"><Link href={"/signUp"}>Enter</Link></p>
        </button>
        {sessionData && <button onClick={() => void signOut()} className="p-5"><p className="bg-blue-500 text-white py-2 px-4 rounded">SignOut</p></button>}

        <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
        </p>
      </main>
    </>
  );
};

export default Landing;
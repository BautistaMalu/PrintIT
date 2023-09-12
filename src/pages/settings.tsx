import Head from "next/head";
import { SettingsHeader } from "~/components/Settings/settingsHeader";
import { useMantineColorScheme } from "@mantine/core";
import { type SetStateAction } from "react";
import SettingsTab from "~/components/Settings/settingsTabs";

interface SettingsProps {
  opened: boolean;
  setOpened: (value: SetStateAction<boolean>) => void;
  username: string;
  userImage: string;
}

const Settings: React.FC<SettingsProps> = ({}) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <>
      <Head>
        <title>PrintIT</title>
        <link rel="icon" href="/General/Logo.ico" />
        <meta name="description" content="PrintIT" />
      </Head>
      <SettingsHeader />
      <main
        className={
          colorScheme === "dark"
            ? "flex min-h-screen flex-col items-center justify-center bg-[#0E1525] from-[#2e026d] to-[#15162c]"
            : "flex min-h-screen flex-col items-center justify-center bg-[#F0F1F8] from-[#2e026d] to-[#15162c]"
        }
      >
        <h1 className="mt-16 flex w-full items-center justify-start">
          Configuración
        </h1>
        <SettingsTab />
      </main>
    </>
  );
};

export default Settings;

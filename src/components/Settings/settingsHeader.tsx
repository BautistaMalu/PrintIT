import {
  createStyles,
  Header,
  Group,
  Divider,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Logo } from "../Logos/logo";
import Link from "next/link";
import SchemeButton from "../Landing/schemeButton";
import UserBox from "../Dashboard/userBox";
import { useSession } from "next-auth/react";

const useStyles = createStyles((theme) => ({
  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export const SettingsHeader: React.FC = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const { data: sessionData } = useSession();

  return (
    <>
      <Header
        height={60}
        px="md"
        className={
          colorScheme === "dark" ? "fixed bg-[#1C2333]" : "fixed bg-white"
        }
      >
        <Group position="apart" sx={{ height: "100%" }}>
          <Link className="flex flex-row items-center gap-2" href="/dashboard/subirArchivo" passHref>
            <Logo width={40} height={40} />
          </Link>

          <Group>
            <SchemeButton />
            <UserBox
              user={{
                name: sessionData?.user.name as string,
                image: sessionData?.user.image as string,
              }}
            />
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="apart">
            <Group position="right" pb="lg" px="md">
              <SchemeButton />
            </Group>
          </Group>
        </ScrollArea>
      </Drawer>
    </>
  );
};

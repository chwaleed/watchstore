"use client";

import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavItem } from "./type";
import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box shadow={"sm"} textStyle={"paragraph"}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        minH={"100px"}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex className=" justify-between items-center " flex={{ base: 1 }}>
          <Image
            alt="Logo"
            h={21}
            src={
              "http://louris.wpbingosite.com/wp-content/themes/louris/assets/images/logo/logo.svg"
            }
          />

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav navItems={NAV_ITEMS} />
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Sign In
            </Button>
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              href={"#"}
              _hover={{
                bg: "pink.300",
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={NAV_ITEMS} />
      </Collapse>
    </Box>
  );
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",

    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Shop",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Products",
    href: "#",
  },
  {
    label: "Blogs",
    href: "#",
  },
];

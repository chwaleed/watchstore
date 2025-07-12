"use client";
import { Stack, useColorModeValue } from "@chakra-ui/react";
import MobileNavItem from "./MobileNavItems";
import { NavItem } from "../type";

const MobileNav = ({ navItems }: { navItems: NavItem[] }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNav;

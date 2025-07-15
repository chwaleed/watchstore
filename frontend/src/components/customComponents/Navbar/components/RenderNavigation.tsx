"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Type definitions for better type safety
interface NavigationLink {
  title: string | React.ReactNode;
  to?: string;
  isHeader?: boolean;
}

interface NavigationItem {
  title: string;
  to: string;
  description: string;
  children: Record<string, NavigationLink[]>;
}

// Reusable data arrays
const shopStyles: NavigationLink[] = [
  { title: "Shop Styles", isHeader: true },
  { title: "Shop Standard", to: "/shop/standard" },
  { title: "Shop Full", to: "/shop/full" },
  { title: "Shop Only Categories", to: "/shop/categories" },
  { title: "Shop Image Categories", to: "/shop/image-categories" },
  { title: "Shop Icon Categories", to: "/shop/icon-categories" },
  { title: "Shop Image Categories 2", to: "/shop/image-categories-2" },
  { title: "Shop Sub Categories", to: "/shop/sub-categories" },
  { title: "Shop List", to: "/shop/list" },
];

const filterLayout: NavigationLink[] = [
  { title: "Filter Layout", isHeader: true },
  { title: "Sidebar", to: "/shop/filter/sidebar" },
  { title: "Filter Side out", to: "/shop/filter/side-out" },
  { title: "Filter Drop down", to: "/shop/filter/dropdown" },
  { title: "Filter Dropup", to: "/shop/filter/dropup" },
  { title: "Filter Down", to: "/shop/filter/down" },
];

const shopLoader: NavigationLink[] = [
  { title: "Shop Loader", isHeader: true },
  { title: "Shop Pagination", to: "/shop/loader/pagination" },
  { title: "Shop Infinity", to: "/shop/loader/infinity" },
  { title: "Shop Load More", to: "/shop/loader/load-more" },
];

// Blog post component for better structure
const BlogPost: React.FC<{ imageSrc: string; title: string; to: string }> = ({
  imageSrc,
  title,
  to,
}) => (
  <Link
    href={to}
    className="flex gap-3 items-start hover:opacity-80 transition-opacity"
  >
    <div className="flex-shrink-0 w-16 h-12 relative overflow-hidden rounded">
      <Image src={imageSrc} fill className="object-cover" alt={title} />
    </div>
    <h5 className="text-sm font-medium leading-tight">{title}</h5>
  </Link>
);

const recentPosts: NavigationLink[] = [
  { title: "Recent Posts", isHeader: true },
  {
    title: (
      <BlogPost
        imageSrc="https://louris.wpbingosite.com/wp-content/uploads/2025/04/blogs-1-720x484.jpg"
        title="Best Fashion Smart Phone"
        to="/blog/best-fashion-smart-phone"
      />
    ),
    to: "/blog/best-fashion-smart-phone",
  },
  {
    title: (
      <BlogPost
        imageSrc="https://louris.wpbingosite.com/wp-content/uploads/2025/04/blogs-1-720x484.jpg"
        title="Top 10 Style Trends 2025"
        to="/blog/top-style-trends-2025"
      />
    ),
    to: "/blog/top-style-trends-2025",
  },
];

// Main navigation items
const navigationItems: NavigationItem[] = [
  {
    title: "Home",
    to: "/",
    description: "Go to the home page",
    children: {
      "Home Styles": [
        { title: "Home 1", to: "/home/style-1" },
        { title: "Home 2", to: "/home/style-2" },
        { title: "Home 3", to: "/home/style-3" },
        { title: "Home 4", to: "/home/style-4" },
        { title: "Home 5", to: "/home/style-5" },
        { title: "Home 6", to: "/home/style-6" },
      ],
    },
  },
  {
    title: "Shop",
    to: "/shop",
    description: "Browse our products",
    children: {
      "Group-1": shopStyles,
      "Group-2": [...filterLayout, ...shopLoader],
    },
  },
  {
    title: "Products",
    to: "/products",
    description: "View all products",
    children: {
      "Group-1": shopStyles,
      "Group-2": [...filterLayout, ...shopLoader],
    },
  },
  {
    title: "Blogs",
    to: "/blog",
    description: "Read our latest articles",
    children: {
      "Group-1": shopStyles,
      "Group-2": [...filterLayout, ...shopLoader],
      "Group-3": recentPosts,
    },
  },
];

export function RenderNavigation() {
  return (
    <NavigationMenu className="ml-10 z-50" viewport={false}>
      <NavigationMenuList>
        {navigationItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex px-2 pb-4 w-[max-content] gap-10">
                {Object.entries(item.children).map(([groupTitle, links]) => (
                  <li key={groupTitle}>
                    <ul className="mt-2 space-y-1">
                      {links.map((link, idx) => (
                        <li className="text-[15px]" key={idx}>
                          {link.isHeader ? (
                            <div className="font-semibold my-3">
                              {link.title}
                            </div>
                          ) : (
                            <div className="hover:text-black transition-all duration-300 text-gray-400">
                              {typeof link.title === "string" && link.to ? (
                                <Link href={link.to}>{link.title}</Link>
                              ) : (
                                link.title
                              )}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

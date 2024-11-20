import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const navigation = [
  { name: "Docs", href: "/docs/getting-started/installation" },
  // { name: "Blocks", href: "/blocks" },
  // { name: "Charts", href: "/charts" },
  { name: "icons", href: "/icons" },
  { name: "Colors", href: "/colors" },
  // { name: "Templates", href: "/templates" },
];


const Navbar = () => {

  const { asPath } = useRouter();
  return (
    <Disclosure as="nav" className="fixed z-10 top-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {/*<Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />*/}
              {/*<XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />*/}
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex gap-1 flex-shrink-0 items-center text-slate-700">
              <Image src="/logo.svg" alt="Logo" height={100} width={100} />
            </div>

          </div>
          <div className="hidden sm:ml-6 sm:block h-full">
            <div className="flex space-x-4 h-full">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={twMerge(
                    asPath === item.href ? "text-primary border-b-2 border-primary font-semibold" : "text-gray-600 dark:text-green-50 hover:bg-gray-200",
                    "flex justify-center items-center px-3 h-full text-sm font-medium capitalize",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={twMerge(
                item.href === asPath ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium",
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;

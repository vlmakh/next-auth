import { Navigation } from "./Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
];

export const TheHeader = () => {
  return (
    <header>
      <Navigation navItems={navItems} />
    </header>
  );
};

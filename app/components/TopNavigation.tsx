import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "@remix-run/react";

export default function TopNavigation() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">Blog entries generator</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" to="/">
            Add entry
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link to="/entries" aria-current="page">
            All entries
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

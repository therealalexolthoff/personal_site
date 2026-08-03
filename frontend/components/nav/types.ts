type AnchorNavItem = {
  kind: "anchor";
  label: string;
  id: string; // matches the DOM element's id for scroll-spy
};

type RouteNavItem = {
  kind: "route";
  label: string;
  href: string; // matches a real route
};

export type NavItem = AnchorNavItem | RouteNavItem;

export type NavMode = "home" | "projects";
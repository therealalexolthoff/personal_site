import { NavItem,NavMode } from "./types";
const navHomeItems: NavItem[]=[{kind: "anchor", label: "About", id: "about-section"},{kind: "anchor", label: "Projects", id: "projects-section"},{kind: "anchor", label: "Work Experience", id: "work-exp-section"},{kind: "anchor", label: "Education", id: "education-section"},{kind: "anchor", label: "Skills", id: "skills-section"}, {kind: "anchor", label: "Contact", id: "contact-section"}]

const navProjectItems: NavItem[]= [{kind: "route", label: "All Projects", href: "all-projects-section"}]

export const navLookup: Record<NavMode, NavItem[]> = {"home": navHomeItems, "projects": navProjectItems }


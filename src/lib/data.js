import { Calendar, CalendarChecked, CalendarTime } from "src/icons";

export const SidebarItems = [
  {
    title: "All",
    href: "/",
    Icon: Calendar,
  },
  {
    title: "Pending",
    href: "/pending",
    Icon: CalendarTime,
  },
  {
    title: "Completed",
    href: "/completed",
    Icon: CalendarChecked,
  },
];

type tabType = {
  value: string;
  label: string;
  icon: string;
};
type sidebarLinksType = {
  imgURL: string;
  route: string;
  label: string;
};

export const sidebarLinks: sidebarLinksType[] = [
  {
    imgURL: "assets/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "assets/search.svg",
    route: "/search",
    label: "Search",
  },
  {
    imgURL: "assets/heart.svg",
    route: "/activity",
    label: "Activity",
  },
  {
    imgURL: "assets/create.svg",
    route: "/create-thread",
    label: "Create Thread",
  },
  {
    imgURL: "assets/community.svg",
    route: "/communities",
    label: "Communities",
  },
  {
    imgURL: "assets/user.svg",
    route: "/profile",
    label: "Profile",
  },
];

export const profileTabs: tabType[] = [
  { value: "threads", label: "Threads", icon: "assets/reply.svg" },
  { value: "replies", label: "Replies", icon: "assets/members.svg" },
  { value: "tagged", label: "Tagged", icon: "assets/tag.svg" },
];

export const communityTabs: tabType[] = [
  { value: "threads", label: "Threads", icon: "assets/reply.svg" },
  { value: "members", label: "Members", icon: "assets/members.svg" },
  { value: "requests", label: "Requests", icon: "assets/request.svg" },
];

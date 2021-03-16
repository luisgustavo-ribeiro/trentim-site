interface INavLink {
  title: string;
  url: string;
}

export default interface INavbarProps {
  links?: INavLink[];
}

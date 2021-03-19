interface IHeroCompaniesLogos {
  url: string;
  logo: string;
}

export default interface IHeroProps {
  image?: string;
  logos?: IHeroCompaniesLogos[];
}

export interface Author {
  name: string;
  imageUrl: string;
}

export interface SitePageConfig {
  // Provide the slug of site page config.
  banner: string;
  author: Author;
}

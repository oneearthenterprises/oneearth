export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  imageId: string;
};

export const newsArticles: NewsArticle[] = [
  {
    slug: 'novo-holdings-launches-intellico-project',
    title: 'Intellico Project Launch',
    date: 'August 12, 2024',
    imageId: 'news-article-2',
    excerpt: 'novo holdings announces the launch of Intellico, a new venture focused on next-generation IT solutions.',
    content: `
      <p class="mb-4">novo holdings is proud to announce its expansion into the technology sector with the launch of its latest venture, Intellico. This new company will focus on developing cutting-edge IT services and solutions, aiming to drive digital transformation for businesses worldwide.</p>
      <p class="mb-4">"With Intellico, we are not just investing in technology; we are investing in the future of business operations," said the CEO of novo holdings. "This project embodies our commitment to innovation and long-term value creation in the digital age."</p>
    `,
  },
  {
    slug: 'new-sustainable-real-estate-project-unveiled',
    title: 'New Sustainable Real Estate Project Unveiled',
    date: 'August 1, 2024',
    imageId: 'news-article-1',
    excerpt: 'The urban development project will feature green building technologies and community-centric design.',
    content: `
      <p class="mb-4">novo holdings has unveiled plans for "Greenwood Commons," a landmark sustainable real estate project. The mixed-use development will prioritize environmental responsibility, featuring solar power, rainwater harvesting, and extensive green spaces.</p>
      <p class="mb-4">"With Greenwood Commons, we are not just constructing buildings; we are creating a blueprint for future urban living," said Emily White, Director of Real Estate. "Our goal is to build a vibrant community where people can live, work, and thrive in harmony with nature."</p>
    `,
  },
  {
    slug: 'e-commerce-platform-reports-record-growth',
    title: 'E-commerce Platform Reports Record Growth',
    date: 'July 25, 2024',
    imageId: 'news-article-3',
    excerpt: 'The direct-to-consumer brand, backed by novo holdings, has doubled its customer base in the last quarter.',
    content: `
      <p class="mb-4">ShopDirect, an e-commerce venture supported by novo holdings, has announced record-breaking growth for the second quarter of 2024. The company has successfully doubled its active user base and reported a 150% increase in revenue year-over-year.</p>
      <p class="mb-4">The success is attributed to a data-driven marketing strategy and a strong focus on customer experience, principles that are central to novo holdings\' e-commerce investment philosophy.</p>
    `,
  },
];

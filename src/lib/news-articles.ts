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
    slug: 'one-earth-enterprises-launches-intellico-project',
    title: 'Intellico Project Launch',
    date: 'August 12, 2024',
    imageId: 'news-article-2',
    excerpt: 'One Earth Enterprises announces the launch of Intellico, a new venture focused on next-generation IT solutions.',
    content: `
      <p class="mb-4">One Earth Enterprises is proud to announce its expansion into the technology sector with the launch of its latest venture, Intellico. This new company will focus on developing cutting-edge IT services and solutions, aiming to drive digital transformation for businesses worldwide.</p>
      <p class="mb-4">"With Intellico, we are not just investing in technology; we are investing in the future of business operations," said the CEO of One Earth Enterprises. "This project embodies our commitment to innovation and long-term value creation in the digital age."</p>
    `,
  },
  {
    slug: 'new-sustainable-real-estate-project-unveiled',
    title: 'New Sustainable Real Estate Project Unveiled',
    date: 'August 1, 2024',
    imageId: 'news-article-1',
    excerpt: 'The urban development project will feature green building technologies and community-centric design.',
    content: `
      <p class="mb-4">One Earth Enterprises has unveiled plans for "Greenwood Commons," a landmark sustainable real estate project. The mixed-use development will prioritize environmental responsibility, featuring solar power, rainwater harvesting, and extensive green spaces.</p>
      <p class="mb-4">"With Greenwood Commons, we are not just constructing buildings; we are creating a blueprint for future urban living," said Emily White, Director of Real Estate. "Our goal is to build a vibrant community where people can live, work, and thrive in harmony with nature."</p>
    `,
  },
  {
    slug: 'e-commerce-platform-reports-record-growth',
    title: 'E-commerce Platform Reports Record Growth',
    date: 'July 25, 2024',
    imageId: 'news-article-3',
    excerpt: 'The direct-to-consumer brand, backed by One Earth Enterprises, has doubled its customer base in the last quarter.',
    content: `
      <p class="mb-4">ShopDirect, an e-commerce venture supported by One Earth Enterprises, has announced record-breaking growth for the second quarter of 2024. The company has successfully doubled its active user base and reported a 150% increase in revenue year-over-year.</p>
      <p class="mb-4">The success is attributed to a data-driven marketing strategy and a strong focus on customer experience, principles that are central to One Earth Enterprises\' e-commerce investment philosophy.</p>
    `,
  },  {
    slug: 'one-earth-partners-with-green-city-authority',
    title: 'One Earth Partners with Green City Authority',
    date: 'September 10, 2024',
    imageId: 'news-article-4',
    excerpt: 'One Earth Enterprises signs a strategic partnership to deliver sustainable infrastructure and urban renewal projects.',
    content: `
      <p class="mb-4">One Earth Enterprises has signed a strategic memorandum with the Green City Authority to co-develop sustainable infrastructure projects that enhance urban livability. The agreement focuses on energy-efficient buildings, public green spaces, and smart mobility solutions.</p>
      <p class="mb-4">At the core of this collaboration is a shared commitment to build healthier, more resilient neighborhoods while reducing the environmental footprint of urban growth. One Earth Enterprises will work closely with the Authority to integrate renewable energy technologies, advanced building systems, and community-centered design principles into every phase of development.</p>
      <p class="mb-4">The partnership will target priority areas where infrastructure upgrades can deliver the greatest impact. This includes retrofitting existing buildings with energy-saving systems, constructing mixed-use developments that promote walkability, and creating new green corridors that connect parks, schools, and transit hubs.</p>
      <p class="mb-4">One Earth Enterprises is bringing its multidisciplinary expertise in property development, technology, and sustainable operations to the table. The company’s project teams will collaborate with the Green City Authority to establish performance benchmarks around energy efficiency, water conservation, and reduced carbon emissions.</p>
      <p class="mb-4">Smart mobility is another major pillar of the partnership. By investing in smart traffic management, electric vehicle infrastructure, and last-mile connectivity, the joint initiative aims to ease congestion and improve access for residents across the city. This mobility vision is designed to support healthier lifestyles while reducing commute times and pollution.</p>
      <p class="mb-4">The collaboration also places a strong emphasis on inclusive urban regeneration. One Earth Enterprises and the Green City Authority will work with local communities to ensure that new developments deliver affordable housing, public amenities, and vibrant street-level experiences. Community engagement sessions will shape planning decisions, helping to align the projects with the needs and aspirations of residents.</p>
      <p class="mb-4">In addition to physical infrastructure, the partnership will support capacity-building initiatives that strengthen local governance and project execution. This includes sharing best practices for sustainable design, adopting digital planning tools, and establishing metrics to measure social and environmental outcomes over time.</p>
      <p class="mb-4">One Earth Enterprises sees this agreement as a model for how private-sector leadership can accelerate city transformation. By combining investment discipline with a long-term sustainability mindset, the company hopes to demonstrate that urban growth and environmental stewardship can advance together.</p>
      <p class="mb-4">The Green City Authority collaboration is expected to unlock new opportunities for public-private partnerships across the region. Future phases may include climate-resilient infrastructure, community energy solutions, and integrated smart city platforms that make urban living more efficient and more equitable.</p>
      <p class="mb-4">Through this strategic alliance, One Earth Enterprises is helping shape a future where cities are not only economically dynamic but also environmentally regenerative and socially inclusive. The goal is clear: to make sustainable growth accessible, practical, and impactful for every community touched by the project.</p>
    `,
  },
  {
    slug: 'collaboration-with-education-accelerator-launched',
    title: 'Collaboration with Education Accelerator Launched',
    date: 'September 18, 2024',
    imageId: 'news-article-5',
    excerpt: 'A new collaboration will support startups focused on education technology and workforce development.',
    content: `
      <p class="mb-4">One Earth Enterprises has launched a collaboration with a leading education accelerator to support startups developing edtech solutions and workforce development platforms. This initiative will provide mentorship, funding, and operational support to founders focused on skills training and digital learning.</p>
      <p class="mb-4">The partnership will identify ambitious early-stage companies that are building scalable solutions for learners, educational institutions, and employers. Through access to the accelerator ecosystem, selected startups will receive coaching on curriculum design, student engagement, learning analytics, and the commercial models needed to sustain long-term growth.</p>
      <p class="mb-4">A key element of the collaboration is the emphasis on workforce readiness. As industries evolve faster than ever before, the demand for job-ready talent is intensifying. The accelerator will help startups create programs that close skills gaps in high-growth areas such as digital marketing, cloud services, data analytics, green construction, and customer experience management.</p>
      <p class="mb-4">One Earth Enterprises is also funding development pathways that promote inclusive access for underrepresented communities. The collaboration is designed to support innovations that bring affordable, high-quality education to learners from smaller cities and towns, helping to bridge the digital divide and unlock economic opportunity across India.</p>
      <p class="mb-4">Beyond capital, the program will provide hands-on operational guidance. Founders will work closely with One Earth’s leadership team and accelerator mentors on go-to-market strategy, customer acquisition, product-market fit, and the systems necessary to track outcomes and demonstrate impact to employers and investors.</p>
      <p class="mb-4">The initiative is grounded in the belief that education technology can be transformative when it is built around real-world application. Startups will be encouraged to design learning experiences that blend virtual classrooms, mobile-first content, project-based learning, and employer-led credentials. This approach seeks to create seamless pathways from training programs to actual jobs.</p>
      <p class="mb-4">One Earth Enterprises will also help foster collaboration between the accelerator network and corporate partners. By creating partnerships with employers, the program will support apprenticeships, internship pipelines, and business-led innovation challenges that give learners practical exposure and accelerate their journey from classroom to career.</p>
      <p class="mb-4">Ultimately, this collaboration aims to nurture a new generation of edtech innovators while strengthening the talent ecosystem for employers. By blending mentorship, investment, and operational support, One Earth Enterprises seeks to create a sustainable model for education and workforce transformation that delivers measurable benefits for learners, companies, and communities.</p>
    `,
  },
  {
    slug: 'new-urban-retail-hub-opens-in-city-center',
    title: 'New Urban Retail Hub Opens in City Center',
    date: 'October 1, 2024',
    imageId: 'news-article-6',
    excerpt: 'One Earth Enterprises opens a new retail destination that blends shopping with sustainability and community spaces.',
    content: `
      <p class="mb-4">One Earth Enterprises has opened a new urban retail hub in the city center, designed around sustainable design principles and local community activation. The hub features eco-friendly retail spaces, pedestrian plazas, and flexible event areas for local entrepreneurs.</p>
      <p class="mb-4">This launch reinforces the company’s commitment to creating mixed-use destinations that support local economies and enrich city life.</p>
    `,
  },];

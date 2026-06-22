export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  imageId: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'the-future-of-sustainable-investing',
    title: 'The Future of Sustainable Investing',
    author: 'Jane Doe, Chief Investment Officer',
    date: 'August 5, 2024',
    imageId: 'blog-post-1',
    excerpt:
      'Exploring how long-term value creation is intrinsically linked to sustainable and responsible business practices.',
    content: `
      <p class="mb-4">In today's evolving economic landscape, the definition of value is expanding. No longer is it enough to focus solely on short-term financial returns. At One Earth Enterprises, we believe that true, lasting value is created when businesses operate with a deep sense of responsibility—to their stakeholders, to society, and to the planet. This is the essence of sustainable investing.</p>
      <p class="mb-4">Our approach is grounded in the conviction that environmental, social, and governance (ESG) factors are not just ethical considerations; they are critical drivers of long-term performance and resilience. By integrating ESG principles into our investment strategy, we identify companies that are not only profitable but are also well-positioned to navigate future challenges and opportunities.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">The Pillars of Our Strategy</h3>
      <p class="mb-4"><strong>Environmental Stewardship:</strong> We seek out businesses that are leaders in resource efficiency, carbon reduction, and environmental innovation. These are the companies building the circular economies of tomorrow.</p>
      <p class="mb-4"><strong>Social Responsibility:</strong> A company's relationship with its employees, customers, and communities is a key indicator of its long-term health. We invest in businesses that prioritize fair labor practices, diversity and inclusion, and community engagement.</p>
      <p class="mb-4"><strong>Governance and Transparency:</strong> Strong, ethical leadership is the bedrock of any successful enterprise. We are committed to partnering with companies that uphold the highest standards of corporate governance, ensuring accountability and building trust.</p>
      <p class="mb-4">By focusing on these pillars, we are not just investing in companies; we are investing in a more sustainable and equitable future. It is a strategy that aligns financial success with positive impact, proving that purpose and profit can, and should, go hand in hand.</p>
    `,
  },
  {
    slug: 'navigating-digital-transformation-in-2024',
    title: 'Navigating Digital Transformation in 2024',
    author: 'John Smith, Head of Technology',
    date: 'July 28, 2024',
    imageId: 'blog-post-2',
    excerpt:
      'A look at the key technology trends shaping industries and how businesses can adapt to stay ahead.',
    content: `
      <p class="mb-4">Digital transformation is more than a buzzword; it is the fundamental reshaping of how businesses operate and deliver value to customers. In 2024, the pace of change has only accelerated, with advancements in AI, data analytics, and cloud computing creating both unprecedented opportunities and significant challenges.</p>
      <p class="mb-4">For organizations to thrive, they must adopt a mindset of continuous adaptation. This means not just implementing new technologies, but also fostering a culture of innovation that empowers teams to experiment, learn, and iterate. At One Earth Enterprises, our IT services vertical is dedicated to helping our partners navigate this complex journey.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Key Trends to Watch</h3>
      <p class="mb-4"><strong>Generative AI:</strong> Beyond chatbots, generative AI is transforming everything from software development to content creation. The key is to integrate it ethically and effectively into existing workflows.</p>
      <p class="mb-4"><strong>Cybersecurity Resilience:</strong> As businesses become more digital, the attack surface expands. A proactive, multi-layered approach to cybersecurity is no longer optional; it is essential for survival.</p>
      <p class="mb-4"><strong>Data-Driven Decision-Making:</strong> The ability to collect, analyze, and act on data is what separates market leaders from the rest. Investing in a modern data stack is critical for unlocking actionable insights.</p>
      <p class="mb-4">The path of digital transformation is unique for every organization, but the principles of clarity, strategy, and execution are universal. By focusing on these fundamentals, businesses can harness the power of technology to build a more efficient, agile, and resilient future.</p>
    `,
  },
  {
    slug: 'the-art-of-long-term-thinking-in-real-estate',
    title: 'The Art of Long-Term Thinking in Real Estate',
    author: 'Emily White, Director of Real Estate',
    date: 'July 15, 2024',
    imageId: 'blog-post-3',
    excerpt:
      'Why patience, quality, and community focus are the cornerstones of creating enduring value in real estate.',
    content: `
      <p class="mb-4">In a market often driven by short-term gains, our real estate philosophy at One Earth Enterprises is deliberately different. We believe that real estate is not about quick flips; it is about creating places that stand the test of time, add value to communities, and deliver sustainable returns over the long run.</p>
      <p class="mb-4">This long-term perspective requires patience, discipline, and a deep understanding of how cities and communities evolve. It means looking beyond immediate trends to identify locations with enduring appeal and developing properties that are built with quality, functionality, and sustainability in mind.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Our Guiding Principles</h3>
      <p class="mb-4"><strong>Location as a Foundation:</strong> We invest in locations with strong underlying fundamentals—connectivity, amenities, and growth potential. This is the foundation upon which all other value is built.</p>
      <p class="mb-4"><strong>Design for People:</strong> Great real estate is designed for the people who will use it. We focus on creating spaces that are not just aesthetically pleasing but are also functional, comfortable, and enhance the well-being of their occupants.</p>
      <p class="mb-4"><strong>Community Integration:</strong> A building does not exist in a vacuum. We strive to develop properties that integrate seamlessly with their surrounding communities, contributing positively to the local fabric.</p>
      <p class="mb-4">By adhering to these principles, we create assets that appreciate not just in financial value, but in their value to the people and communities they serve. It's a patient, thoughtful approach that defines our commitment to building for the future.</p>
    `,
  },
  {
    slug: 'building-value-with-mixed-use-communities',
    title: 'Building Value with Mixed-Use Communities',
    author: 'Priya Kapoor, Urban Planning Lead',
    date: 'September 3, 2024',
    imageId: 'blog-post-4',
    excerpt:
      'How mixed-use developments are creating resilient, pedestrian-friendly communities that drive long-term value.',
    content: `
      <p class="mb-4">Mixed-use communities are a key part of our strategy at One Earth Enterprises. By combining residential, retail, and workspace within walkable neighbourhoods, we create places that support everyday convenience, stronger social connections, and greater economic resilience.</p>
      <p class="mb-4">These developments are designed to reduce commute times, increase foot traffic for local businesses, and offer residents easy access to amenities. They also attract a diverse mix of tenants and buyers, helping communities remain vibrant through market cycles.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">The Benefits of Mixed-Use Design</h3>
      <p class="mb-4"><strong>Convenience:</strong> Residents can access shops, services, and workspaces without long trips, improving quality of life and lowering environmental impact.</p>
      <p class="mb-4"><strong>Community Activation:</strong> A blend of uses brings people together throughout the day, supporting local businesses and creating safer, more engaging streetscapes.</p>
      <p class="mb-4"><strong>Investment Stability:</strong> Mixed-use assets often have more diverse income streams, making them more resilient during market changes.</p>
      <p class="mb-4">At One Earth Enterprises, we are committed to building the kinds of neighbourhoods that future generations will value—for their sustainability, their convenience, and their ability to foster community.</p>
    `,
  },
  {
    slug: 'smart-infrastructure-for-sustainable-growth',
    title: 'Smart Infrastructure for Sustainable Growth',
    author: 'Ankit Mehra, Infrastructure Director',
    date: 'September 18, 2024',
    imageId: 'blog-post-5',
    excerpt:
      'Using smart infrastructure to reduce waste, improve comfort, and create more efficient urban environments.',
    content: `
      <p class="mb-4">Smart infrastructure is a major theme for our projects. By introducing connected systems for energy, water, and mobility, we can make buildings more efficient and make cities easier to live in.</p>
      <p class="mb-4">Our approach includes smart lighting, building management systems, and digital tenant services that improve performance while lowering operating costs. It also enables faster responses to changing conditions and tenant needs.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Why Smart Infrastructure Matters</h3>
      <p class="mb-4"><strong>Efficiency:</strong> Real-time monitoring allows us to reduce energy and water use without sacrificing comfort.</p>
      <p class="mb-4"><strong>Tenant Experience:</strong> Connected buildings make it easier for occupants to interact with services, access spaces, and enjoy healthier environments.</p>
      <p class="mb-4"><strong>Scalability:</strong> Smart systems can be tuned for different asset classes, from offices to retail and residential communities.</p>
      <p class="mb-4">In every project, we look for ways to weave smart infrastructure into the design so it delivers both practical value and better long-term sustainability.</p>
    `,
  },
  {
    slug: 'ventures-that-create-meaningful-impact',
    title: 'Ventures That Create Meaningful Impact',
    author: 'Riya Sharma, Ventures Lead',
    date: 'October 2, 2024',
    imageId: 'blog-post-6',
    excerpt:
      'Exploring how One Earth Enterprises invests in startups and business models that generate positive social and environmental outcomes.',
    content: `
      <p class="mb-4">Our venture investments are guided by a simple belief: impact and return can coexist. We back companies that solve real problems in real estate, commerce, and technology while creating good outcomes for people and the planet.</p>
      <p class="mb-4">From sustainable product brands to logistics startups and proptech platforms, we look for founders with a clear vision, strong execution, and a commitment to measurable impact.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">What We Look For</h3>
      <p class="mb-4"><strong>Market fit:</strong> Products and services that address meaningful demand in growing markets.</p>
      <p class="mb-4"><strong>Impact potential:</strong> Startups that reduce waste, improve access, or enable more efficient use of resources.</p>
      <p class="mb-4"><strong>Founder strength:</strong> Teams that combine domain expertise with the ability to build and scale responsibly.</p>
      <p class="mb-4">By investing thoughtfully, we support ventures that not only grow financially, but also contribute to a better future.</p>
    `,
  },
];

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
];

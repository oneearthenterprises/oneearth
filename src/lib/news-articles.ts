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
    title: 'Is PCOS Reversible? Understanding Symptom Remission',
    date: 'May 26, 2026',
    imageId: 'news-article-1',
    excerpt: 'A hopeful, evidence-backed view of PCOS management that focuses on insulin resistance, lifestyle change, and symptom remission.',
    content: `
      <p class="mb-4">Polycystic Ovary Syndrome (PCOS) affects approximately 1 in 10 women in the UK. Yet, many leave their GP’s office feeling completely lost and dismissed. You are often handed a diagnosis, a prescription, and generic advice to simply lose weight.</p>
      <p class="mb-4">This article explores whether PCOS can enter long-term remission through targeted metabolic and lifestyle changes, with a stronger emphasis on insulin sensitivity, inflammation control, and sustainable habits.</p>      
      <h3 class="mt-8 mb-4 text-xl font-semibold">The Hidden Driver: Metabolic, Not Just Reproductive</h3>
      <p class="mb-4">PCOS is rarely just a reproductive issue; it is primarily a metabolic dysfunction affecting your reproductive system. The irregular periods, stubborn weight, and hormonal acne are actually downstream effects. They stem from one central biological problem: insulin resistance.</p>
      <p class="mb-4">When treating PCOS symptoms in isolation, the results are rarely permanent. The key is addressing the root metabolic cause.</p>
      
      <h3 class="mt-8 mb-4 text-xl font-semibold">3-Step PCOS Management Framework</h3>
      <p class="mb-4"><strong>Step 1: Stop the Insulin Spike</strong> - Before hormones can balance, the daily blood sugar rollercoaster must slow down. Consuming a teaspoon of extra virgin olive oil before meals helps delay carbohydrate absorption. Additionally, taking a 10-minute walk after eating works wonders for blood sugar regulation.</p>
      <p class="mb-4"><strong>Step 2: Repair the Receptors</strong> - Once blood sugar spikes are calmer, you must help your body read insulin signals correctly again. Inositol is the most heavily researched non-pharmaceutical intervention for PCOS. Magnesium and Vitamin D3 are also crucial for optimal endocrine health.</p>
      <p class="mb-4"><strong>Step 3: Cool the Inflammation</strong> - Even when insulin improves, chronic low-grade inflammation can keep androgen levels stubbornly elevated. Incorporating daily Omega-3s from walnuts, flaxseeds, or algae oil helps reduce inflammatory markers. <a href="https://www.mysagensoul.com/blogs/sage-herbal-tea/6-easy-ways-to-add-fibre-to-lunch-for-better-metabolic-flexibility" target="_blank" rel="noreferrer" class="text-emerald-600 hover:underline">Learn 6 easy ways to add fibre to lunch for better metabolic flexibility</a>.</p>
      
      <h3 class="mt-8 mb-4 text-xl font-semibold">Does Weight Loss Cure PCOS?</h3>
      <p class="mb-4">Weight loss does not cure PCOS; improving insulin sensitivity is the true catalyst for metabolic change. Many lean women experience PCOS, and many achieve symptom remission without losing a single kilogram. Focus heavily on fixing the root cause, and let the weight management naturally follow.</p>
      
      <h3 class="mt-8 mb-4 text-xl font-semibold">Nutrition & Lifestyle Support</h3>
      <p class="mb-4">Discover <a href="https://www.mysagensoul.com/blogs/sage-herbal-tea/7-high-protein-foods-to-transform-your-daily-diet" target="_blank" rel="noreferrer" class="text-emerald-600 hover:underline">7 high-protein foods to transform your daily diet</a>, designed to support hormonal balance and sustained energy.</p>
      <p class="mb-4">Learn about <a href="https://www.mysagensoul.com/blogs/sage-herbal-tea/last-meal-of-the-day-best-time-to-eat-for-digestion-sleep" target="_blank" rel="noreferrer" class="text-emerald-600 hover:underline">the best time to eat your last meal for digestion and sleep quality</a>—critical for metabolic recovery in PCOS management.</p>
      
      <h3 class="mt-8 mb-4 text-xl font-semibold">Key Takeaways for Managing PCOS</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Insulin is the root:</strong> PCOS is primarily driven by insulin resistance and metabolic dysfunction.</li>
        <li><strong>Remission is possible:</strong> Complete symptom remission is highly achievable with the right strategy.</li>
        <li><strong>Targeted nutrition:</strong> Inositol, magnesium, and Vitamin D are the most effective interventions.</li>
        <li><strong>Daily movement:</strong> Short walks after meals and eating within a 12-hour window stabilise daily blood sugar.</li>
        <li><strong>Rest matters:</strong> Quality sleep is absolutely non-negotiable for reducing inflammation.</li>
      </ul>
      
      <p class="mt-8 text-sm text-slate-600"><em>For more evidence-based wellness insights and PCOS resources, visit <a href="https://www.mysagensoul.com/" target="_blank" rel="noreferrer" class="text-emerald-600 hover:underline">Sage & Soul</a>. Explore the full article on <a href="https://www.mysagensoul.com/blogs/sage-herbal-tea/is-pcos-reversible-understanding-symptom-remission" target="_blank" rel="noreferrer" class="text-emerald-600 hover:underline">PCOS symptom remission</a> and the <a href="https://www.mysagensoul.com/blogs/sage-herbal-tea/pcos-to-pmos-why-the-70-year-wait-for-a-name-change" target="_blank" rel="noreferrer" class="text-emerald-600 hover:underline">history behind PCOS naming</a>.</em></p>    `,
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
    `,  },
  {
    slug: 'last-meal-of-the-day-best-time-to-eat-for-digestion-sleep',
    title: 'Last Meal of the Day: Best Time to Eat for Digestion & Sleep',
    date: 'June 15, 2026',
    imageId: 'news-article-7',
    excerpt: 'Timing your last meal correctly can dramatically improve digestion, sleep quality, and metabolic health. Learn the science behind evening meal timing.',
    content: `
      <p class="mb-4">When you eat your last meal of the day matters just as much as what you eat. The timing of your evening meal plays a crucial role in digestive health, sleep quality, and metabolic function.</p>
      <p class="mb-4">Research shows that eating too close to bedtime can disrupt sleep architecture and impair glucose metabolism. Conversely, eating too early may leave you hungry and restless during the night.</p>
      
      <h3 class="mt-8 mb-4 text-xl font-semibold">The Ideal Dinner Window</h3>
      <p class="mb-4">Most sleep experts recommend finishing your last meal 3-4 hours before bedtime. This allows adequate time for digestion while maintaining stable blood sugar levels throughout the night. For someone sleeping at 10 PM, dinner should ideally conclude by 6-7 PM.</p>
      
      <h3 class="mt-8 mb-4 text-xl font-semibold">Digestion & Sleep Connection</h3>
      <p class="mb-4">Your digestive system is naturally more active during the day. Evening meals rich in heavy fats or proteins require more digestive effort, which can delay sleep onset and fragment sleep cycles. Lighter, balanced meals with complex carbohydrates and moderate protein support better rest.</p>
      
      <h3 class="mt-8 mb-4 text-xl font-semibold">Metabolic Flexibility</h3>
      <p class="mb-4">Eating within a 12-hour window—for example, between 8 AM and 8 PM—supports metabolic health and helps regulate insulin sensitivity. This practice gives your body a consistent fasting period each night, which enhances cellular repair and hormone balance.</p>
      
      <p class="mt-8 text-sm text-slate-600"><em>For more evidence-based nutrition insights, visit <a href="https://www.mysagensoul.com/blogs/sage-herbal-tea/last-meal-of-the-day-best-time-to-eat-for-digestion-sleep" target="_blank" rel="noreferrer" class="text-emerald-600 hover:underline">the full article on Sage & Soul</a>.</em></p>
    `,
  },
  {
    slug: 'pcos-to-pmos-why-the-70-year-wait-for-a-name-change',
    title: 'PCOS to PMOS: Why the 70-Year Wait for a Name Change?',
    date: 'June 10, 2026',
    imageId: 'news-article-8',
    excerpt: 'A deep dive into the history of PCOS naming, why the medical term may be changing, and what it means for diagnosis and patient care.',
    content: `
      <p class="mb-4">For over 70 years, Polycystic Ovary Syndrome (PCOS) has defined a condition that affects millions of women worldwide. Yet the name itself may be fundamentally misleading, which is why some researchers now propose Polycystic Metabolic Syndrome (PMOS) as a more accurate descriptor.</p>
      
      <h3 class="mt-8 mb-4 text-xl font-semibold">The Problem with "PCOS"</h3>
      <p class="mb-4">The term "Polycystic Ovary Syndrome" emphasizes the reproductive symptom—cysts on the ovaries—rather than the underlying metabolic dysfunction. However, not all women with PCOS have polycystic ovaries, and many with polycystic ovaries don't have PCOS. This naming has led to decades of misdiagnosis, delayed treatment, and misguided medical advice focused solely on reproductive health.</p>
      
      <h3 class="mt-8 mb-4 text-xl font-semibold">A Metabolic Condition at Heart</h3>
      <p class="mb-4">Modern endocrinology now understands PCOS as a metabolic disorder first, with reproductive symptoms as secondary manifestations. Insulin resistance, inflammation, and hormonal dysregulation are the core drivers. Renaming it to reflect this metabolic reality could shift how doctors diagnose and treat the condition.</p>
      
      <h3 class="mt-8 mb-4 text-xl font-semibold">The Impact of Better Naming</h3>
      <p class="mb-4">A name change to PMOS would encourage earlier intervention focused on metabolic health rather than waiting for ovarian changes. It would validate the experiences of lean women with PCOS who are often dismissed because they don't fit the "overweight" stereotype. It would also align medical understanding with the latest research on insulin sensitivity and inflammation.</p>
      
      <h3 class="mt-8 mb-4 text-xl font-semibold">What This Means for Patients</h3>
      <p class="mb-4">For women living with this condition, a name change signals hope: the recognition that this is not just about reproductive health, but about systemic metabolic wellness. It opens doors to more comprehensive treatment plans that address root causes rather than just managing symptoms.</p>
      
      <p class="mt-8 text-sm text-slate-600"><em>Explore the full history and implications at <a href="https://www.mysagensoul.com/blogs/sage-herbal-tea/pcos-to-pmos-why-the-70-year-wait-for-a-name-change" target="_blank" rel="noreferrer" class="text-emerald-600 hover:underline">Sage & Soul</a>.</em></p>
    `,
  },
  {
    slug: 'metabolic-flexibility-what-it-is-and-why-it-matters',
    title: 'Metabolic Flexibility: What It Is and Why It Matters for Your Health',
    date: 'June 5, 2026',
    imageId: 'news-article-9',
    excerpt: 'Metabolic flexibility is your body\'s ability to switch between fuel sources. Discover how to build it and why it\'s crucial for long-term health.',
    content: `
      <p class="mb-4">Metabolic flexibility is a concept that's rapidly gaining attention in the wellness world—and for good reason. It refers to your body's ability to efficiently switch between burning carbohydrates and fats as fuel sources based on availability and energy needs.</p>
      
      <h3 class="mt-8 mb-4 text-xl font-semibold">What is Metabolic Flexibility?</h3>
      <p class="mb-4">When you eat a carbohydrate-rich meal, your body prioritizes burning glucose. When carbs are scarce—such as during fasting or low-carb periods—it shifts to fat oxidation. This switching ability is what we call metabolic flexibility. Many modern diets, high in processed carbohydrates and frequent eating, actually reduce this flexibility, leaving people dependent on constant glucose availability.</p>
      
      <h3 class="mt-8 mb-4 text-xl font-semibold">Why Flexibility Matters</h3>
      <p class="mb-4">People with high metabolic flexibility experience more stable energy, better appetite regulation, improved body composition, and superior metabolic health markers. They're also more resilient to dietary variations and less prone to energy crashes and cravings.</p>
      
      <h3 class="mt-8 mb-4 text-xl font-semibold">How to Build Metabolic Flexibility</h3>
      <p class="mb-4"><strong>1. Embrace varied eating patterns:</strong> Include periods of lower carb intake alongside balanced, whole-food meals. This trains your body to access both fuel sources.</p>
      <p class="mb-4"><strong>2. Move regularly:</strong> Physical activity—especially walking after meals—increases your muscles' ability to clear glucose and burn fat efficiently.</p>
      <p class="mb-4"><strong>3. Support nutrient status:</strong> Magnesium, Vitamin D, and inositol are critical for metabolic enzymes and insulin signaling.</p>
      <p class="mb-4"><strong>4. Prioritize sleep:</strong> Poor sleep impairs fat oxidation and glucose handling. Consistent, quality sleep is foundational.</p>
      <p class="mb-4"><strong>5. Manage inflammation:</strong> Chronic inflammation impairs metabolic switching. Omega-3s, polyphenol-rich foods, and stress management help restore flexibility.</p>
      
      <h3 class="mt-8 mb-4 text-xl font-semibold">The Takeaway</h3>
      <p class="mb-4">Building metabolic flexibility isn't about restricting food or following extreme diets. It's about training your body to use multiple fuel sources efficiently. This foundation supports everything from stable energy to reproductive health, making it one of the most valuable investments you can make in your long-term wellness.</p>
    `,
  },
];

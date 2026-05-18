export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readingTime: string;
  author: string;
}

export const newsPosts: NewsPost[] = [
  {
    slug: "ecommerce-trends-2026",
    title: "E-Commerce Trends 2026: What UAE Businesses Need",
    excerpt:
      "The UAE market is shifting fast — mobile commerce, fast checkout, and personalised shopping experiences are now table stakes for local businesses.",
    content: `
The UAE e-commerce market is growing rapidly in 2026, and businesses need the right website, payment gateway, and digital strategy to stay competitive.

## Key Trends for 2026

- **Mobile-first stores**: Customers expect fast, easy shopping from their phones.
- **Secure checkout**: Payment confidence drives higher conversion rates.
- **Local delivery integration**: Seamless shipping options reduce cart abandonment.
- **Data-driven marketing**: Use analytics to optimise offers and product placement.

## How ZIA Tech Solutions Helps

We build store experiences that are secure, fast, and tailored to your brand. From website launch to performance optimisation, we handle the technology while you focus on sales.
    `,
    date: "2026-04-12",
    category: "E-Commerce",
    readingTime: "3 min read",
    author: "ZIA Tech Team",
  },
  {
    slug: "it-consultancy-business-growth",
    title: "How IT Consultancy Drives Small Business Growth",
    excerpt:
      "Smart IT planning helps businesses reduce costs, improve efficiency, and build a stronger customer experience online and in-store.",
    content: `
A well-structured IT strategy can be a game-changer for small and medium-sized businesses, especially in fast-moving markets.

## Benefits of IT Consultancy

- **Technology alignment**: Match systems with business goals.
- **Cost control**: Avoid overspending on unnecessary hardware.
- **Scalable infrastructure**: Grow your systems without disruption.
- **Staff productivity**: Better tools mean faster work.

## What We Deliver

We assess your existing setup, recommend practical improvements, and help implement the right tools for your team, whether that's office software, networks, or e-commerce platforms.
    `,
    date: "2026-03-20",
    category: "IT Consultancy",
    readingTime: "4 min read",
    author: "ZIA Tech Team",
  },
  {
    slug: "technical-installations-best-practices",
    title: "Technical Installations: Best Practices for Office IT",
    excerpt:
      "Reliable cabling, secure WiFi, and clean hardware installation are the foundation of a stable business technology environment.",
    content: `
Installing technology correctly from the start saves time, money, and frustration later on.

## Installation Best Practices

- **Structured cabling**: Keep network wiring organised and future-ready.
- **Secure WiFi**: Protect your network with the right access controls.
- **Clean hardware setup**: Configure computers and printers with consistent settings.
- **Backup systems**: Ensure data protection from day one.

## Our Approach

We plan every installation around your space, your users, and your future needs. That means fewer service calls and a smoother day-to-day experience.
    `,
    date: "2026-02-08",
    category: "Technical Installations",
    readingTime: "3 min read",
    author: "ZIA Tech Team",
  },
];

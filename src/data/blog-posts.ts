export type BlogPost = {
  slug: string;
  title: string;
  image: string;
  category: string;
  paragraphs: string[];
  author: string;
  publishedAt: string;
  dateLabel: string;
};

const articles = [
  {
    "slug": "getting-eyeballs-on-your-business-writing",
    "title": "Getting eyeballs on your business writing",
    "image": "/assets/img/blog/2.png",
    "category": "Content Marketing",
    "paragraphs": [
      "Every article needs a reader and a reason to exist. Before drafting, write down who the post is for, what they are trying to do, and what they should know by the end.",
      "Publish the article where your readers already spend time. Share a concrete takeaway in your newsletter, link to the article from related resources, and use engagement to decide which topics deserve a follow-up."
    ]
  },
  {
    "slug": "choosing-a-content-writing-tool",
    "title": "Which tool fits your content writing strategy?",
    "image": "/assets/img/blog/4.png",
    "category": "Content Marketing",
    "paragraphs": [
      "Start by identifying the slowest step of your workflow. If handoffs are the bottleneck, look for clear review permissions and version history. If the team struggles to plan, test a tool that keeps briefs and deadlines together.",
      "Compare tools on the same short assignment. Give each writer time to draft, revise, and export, then note which features actually helped."
    ]
  },
  {
    "slug": "seo-beyond-the-buzzwords",
    "title": "SEO beyond the buzzwords",
    "image": "/assets/img/blog/3.png",
    "category": "SEO",
    "paragraphs": [
      "Search optimization starts with the question behind a search. A practical article answers that question early and uses headings that make the important information easy to find.",
      "Review internal links, page titles, and page performance before adding more content. Keep useful pages current and consolidate pages that repeat the same answer."
    ]
  },
  {
    "slug": "understanding-lending",
    "title": "Understanding Lending: The Basics and Beyond",
    "image": "/assets/img/blog/1.png",
    "category": "Banking & Finance",
    "paragraphs": [
      "A loan agreement sets out the amount borrowed, the repayment schedule, and the cost of borrowing. Comparing agreements means looking at the full cost over the same period.",
      "Read the terms for fees, missed payments, and early repayment. A different payment schedule can change how much you pay and when the balance is cleared."
    ]
  },
  {
    "slug": "building-an-audience-for-business-writing",
    "title": "Building an audience for business writing",
    "image": "/assets/img/blog/2.png",
    "category": "Content Marketing",
    "paragraphs": [
      "A recurring series gives readers a reason to come back. Choose a narrow topic you can cover consistently, and use reader questions to plan the next installment.",
      "Track which posts lead to replies, referrals, or continued reading. Those signals help you focus on topics that support a lasting relationship with your audience."
    ]
  },
  {
    "slug": "reading-a-diplomatic-announcement",
    "title": "How to read a diplomatic announcement",
    "image": "/assets/img/blog/3.png",
    "category": "World News",
    "paragraphs": [
      "Read the joint statement and note who issued it. Separate commitments with dates or named organizations from general descriptions of the relationship.",
      "Compare the language with earlier statements to see what changed. Follow up when an announced plan reaches its next milestone."
    ]
  },
  {
    "slug": "starting-a-cloud-kitchen",
    "title": "How to Start a Cloud Kitchen in 6 Steps",
    "image": "/assets/img/blog/4.png",
    "category": "Business",
    "paragraphs": [
      "Define your audience, develop a delivery-friendly menu, and test how well each dish travels. These first three steps help you identify a menu you can produce consistently.",
      "Then review local operating requirements, compare kitchen and delivery costs, and launch with a small service area. Use early orders to see what needs to change before expanding."
    ]
  },
  {
    "slug": "buying-with-a-credit-card",
    "title": "What can you pay and buy with a credit card?",
    "image": "/assets/img/blog/1.png",
    "category": "Banking & Finance",
    "paragraphs": [
      "A credit card can be used wherever a merchant accepts its network and the purchase meets the card's terms. Some payments may be treated differently from everyday purchases.",
      "Review your statement to confirm the charge and any fees. Knowing the billing cycle and payment due date helps you plan how you will cover the balance."
    ]
  },
  {
    "slug": "how-ai-service-access-changes",
    "title": "How access to an AI service changes",
    "image": "/assets/img/blog/1.png",
    "category": "Technology",
    "paragraphs": [
      "When a service returns after a pause, read its notices to see who can sign in and what has changed for existing accounts.",
      "Review the service settings before using it for work. A feature or policy shown in one region may differ from what another region sees."
    ]
  },
  {
    "slug": "digital-collectibles-on-social-platforms",
    "title": "Digital collectibles on social platforms",
    "image": "/assets/img/blog/2.png",
    "category": "Technology",
    "paragraphs": [
      "A platform can stop displaying digital collectibles while an item still exists outside that platform. Check where the item and its metadata are stored.",
      "Before relying on a platform feature, understand how to export or share the information you need if the feature is retired."
    ]
  },
  {
    "slug": "understanding-access-to-drinking-water",
    "title": "Understanding access to clean drinking water",
    "image": "/assets/img/blog/1.png",
    "category": "World News",
    "paragraphs": [
      "Water access reports distinguish between a source that is present and a supply that is safe, reliable, and available when needed.",
      "When comparing figures, check the definitions, survey dates, and geographic areas covered. Different measures can describe different problems."
    ]
  },
  {
    "slug": "understanding-vehicle-inspections",
    "title": "Understanding vehicle inspections",
    "image": "/assets/img/blog/3.png",
    "category": "Transport",
    "paragraphs": [
      "Vehicle inspection programs check a defined set of safety and condition criteria. The checklist and the interval between inspections can vary.",
      "Keep records of repairs and check what an inspection covers before a vehicle changes hands. Routine maintenance still matters between inspections."
    ]
  },
  {
    "slug": "student-credit-cards",
    "title": "Student Credit Cards: What to Know",
    "image": "/assets/img/blog/2.png",
    "category": "Banking & Finance",
    "paragraphs": [
      "Student credit cards are designed for people starting to build a credit history. A card's costs depend on its fees, interest terms, and how the balance is managed.",
      "Compare the terms before applying and use the billing statement to track spending and payment dates. Choose an account you can manage alongside other expenses."
    ]
  }
];

export const blogPosts: BlogPost[] = articles.map(article => ({
  ...article,
  author: "Amir Nisi",
  publishedAt: "2024-09-10",
  dateLabel: "10 September, 2024",
}));

export function blogPostPath(slug: string) {
  return `/blog/${slug}`;
}

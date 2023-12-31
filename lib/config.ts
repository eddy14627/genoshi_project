export const TEST_PAPERS = [
  {
    id: 0,
    title: 'Sample paper One',
    favorite: false
  },
  {
    id: 1,
    title: 'Sample paper One but with a longer name',
    favorite: false
  },
  {
    id: 2,
    title: 'Sample paper Two',
    favorite: false
  }
];

export const PRICING_TIERS = [
  {
    name: 'basic-plan',
    title: 'Basic Plan',
    cost: '$4 / user / month',
    description: 'Get started ASAP with our basic plan!',
    features: ['Up to 10 graphs', 'Up to 500 chatbot queries'],
    cta: 'Purchase Now!'
  },
  {
    name: 'pro-plan',
    title: 'Pro Plan',
    cost: '$8 / user / month',
    description: 'Our most popular pro plan to meet all your needs!',
    features: [
      'Up to 50 graphs',
      'Up to 1000 chatbot queries',
      'Email + live chat support'
    ],
    cta: 'Purchase Now!'
  },
  {
    name: 'enterprise-plan',
    title: 'Enterprise Plan',
    cost: 'Negotiable',
    description: "Have specific requirements? Let's talk business.",
    features: [
      'Unlimited graphs',
      'Unlimited chatbot queries',
      'Ability to upload custom PDFs',
      '24/7 phone + email support'
    ],
    cta: 'Contact Now!'
  }
];

export const TEST_COLLECTIONS = [
  {
    id: 0,
    title: 'Machine Learning Papers',
    description: 'A collection of papers related to machine learning',
    numberPapers: 5
  },
  {
    id: 1,
    title: 'Data Science Journals',
    description: 'Journals and articles about data science',
    numberPapers: 8
  },
  {
    id: 2,
    title: 'Computer Vision Research',
    description: 'Papers focusing on computer vision and image processing',
    numberPapers: 6
  },
  {
    id: 3,
    title: 'AI Ethics Studies',
    description: 'Exploring ethical considerations in artificial intelligence',
    numberPapers: 10
  }
];

export const USER_GRAPHS = [
  {
    id: 0,
    title: 'Predictive Analytics Trends',
    description:
      'Analyzing trends in predictive analytics for the upcoming year',
    link: '#',
    dateCreated: '2023-12-28',
    papersUsed: [0, 2, 4]
  },
  {
    id: 1,
    title: 'Neural Networks Survey',
    description:
      'A comprehensive survey on the recent advancements in neural networks',
    link: '#',
    dateCreated: '2023-12-29',
    papersUsed: [1, 3, 5]
  },
  {
    id: 2,
    title: 'Computer Vision Applications',
    description:
      'Exploring practical applications of computer vision in various fields',
    link: '#',
    dateCreated: '2023-12-30',
    papersUsed: [2, 4, 6]
  },
  {
    id: 3,
    title: 'AI and Bias',
    description:
      'Investigating the impact of bias in artificial intelligence algorithms',
    link: '#',
    dateCreated: '2023-12-31',
    papersUsed: [0, 3, 5]
  },
  {
    id: 4,
    title: 'Big Data Analytics',
    description: 'Analyzing the role of big data analytics in modern business',
    link: '#',
    dateCreated: '2024-01-01',
    papersUsed: [1, 4, 6]
  }
];

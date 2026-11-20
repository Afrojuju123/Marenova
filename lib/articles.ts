export interface MentalHealthArticle {
  slug: string
  title: string
  category: string
  excerpt: string
  publishedAt: string
  reviewedAt: string | null
  image: { src: string; alt: string; position?: string }
  takeaway: string
  sections: { id: string; heading: string; paragraphs: string[]; points?: string[] }[]
  sources: { label: string; href: string }[]
}

export type PublishedMentalHealthArticle = MentalHealthArticle & { reviewedAt: string }

export function getPublishedArticles(): PublishedMentalHealthArticle[] {
  return articles.filter((article): article is PublishedMentalHealthArticle => Boolean(article.reviewedAt?.trim()))
}

const articles: MentalHealthArticle[] = [
  {
    slug: 'staying-connected-as-we-grow-older',
    title: 'Staying connected as we grow older',
    category: 'Older adult wellbeing',
    excerpt: 'Why meaningful connection matters—and small, realistic ways to make more room for it.',
    publishedAt: '2026-09-30',
    reviewedAt: null,
    image: {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-a-darmel-8153750-TMJr0JejECXtGxG3kJlpZEzlFy3T9m.jpg',
      alt: 'Four older adults sharing a cheerful moment around a table in a bright café.',
      position: 'center 60%',
    },
    takeaway: 'Connection is personal. A regular conversation, a shared interest, or a familiar routine can be a meaningful starting point—not a test of how social you should be.',
    sections: [
      {
        id: 'connection-and-wellbeing',
        heading: 'Connection is part of wellbeing',
        paragraphs: [
          'Retirement, a move, bereavement, changing mobility, and hearing difficulties can reshape a person’s social world. Wanting more connection after these changes is understandable. It is not a personal failure, and loneliness is not an inevitable part of aging.',
          'Loneliness is the feeling of being disconnected; social isolation describes having limited social contact. They are related, but not the same. Someone can live alone and feel connected, or feel lonely in a busy household. Research links both with poorer health outcomes, but a person’s needs and circumstances matter more than a simple count of social activities.',
        ],
      },
      {
        id: 'small-ways-to-connect',
        heading: 'Start with something that feels possible',
        paragraphs: ['Meaningful contact does not have to mean a full calendar. Choose an activity that fits your energy, interests, access needs, and comfort level.'],
        points: [
          'Arrange a regular phone call, short walk, or visit with someone you trust.',
          'Explore a library group, community center, faith community, or an accessible class around a familiar interest.',
          'Ask about transportation, hearing support, or help using video calls if these are barriers.',
          'Consider a manageable volunteer role or a peer-support group, without taking on more than feels sustainable.',
        ],
      },
      {
        id: 'support-without-pressure',
        heading: 'For families: invite, rather than pressure',
        paragraphs: [
          'Ask what kind of company feels welcome. A specific, low-pressure invitation can be easier to accept than “you should get out more.” Listen for obstacles such as pain, fatigue, grief, cost, or difficulty hearing. Addressing those barriers may be more helpful than adding activities.',
          'Respect the person’s preferences and privacy. Familiar routines, smaller groups, and practical help can make participation more comfortable. Social contact can support wellbeing, but it does not replace care for depression, anxiety, or cognitive concerns.',
        ],
      },
      {
        id: 'when-to-seek-support',
        heading: 'When a conversation with a clinician may help',
        paragraphs: [
          'Persistent withdrawal, low mood, loss of interest, or a change in everyday functioning deserves attention. A clinician can explore emotional, medical, medication-related, and practical contributors. New or sudden confusion calls for prompt medical evaluation rather than assuming it is part of aging.',
          'There is no need to wait until you feel overwhelmed to ask for support. Care can include a mental health assessment, attention to physical health or hearing needs, and connections to community resources.',
        ],
      },
    ],
    sources: [
      { label: 'National Institute on Aging: Loneliness and Social Isolation—Tips for Staying Connected', href: 'https://www.nia.nih.gov/health/loneliness-and-social-isolation/loneliness-and-social-isolation-tips-staying-connected' },
    ],
  },
  {
    slug: 'when-low-mood-needs-support',
    title: 'When low mood needs a little more support',
    category: 'Emotional wellbeing',
    excerpt: 'Understanding changes in mood, energy, and interest—and knowing when to reach out.',
    publishedAt: '2026-09-30',
    reviewedAt: null,
    image: {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-olly-3807730-eveQx3vfY3GRXNpJF5iHMx2xiylrKr.jpg',
      alt: 'An adult woman sitting quietly on a bed beside a bright window.',
      position: 'center 60%',
    },
    takeaway: 'You do not need to be certain that you have depression before asking for help. Persistent changes in mood or daily functioning are enough to start a conversation.',
    sections: [
      {
        id: 'more-than-a-difficult-day',
        heading: 'More than a difficult day',
        paragraphs: [
          'Everyone experiences sadness, disappointment, and difficult stretches. Depression is different from an occasional low mood: it can affect how you feel, think, sleep, eat, and manage everyday responsibilities. It is a health condition, not a sign of weakness or a lack of effort.',
          'For a major depressive episode, symptoms generally occur most of the day, nearly every day, for at least two weeks and include low mood or a loss of interest. That timeframe is part of assessment—not a reason to delay getting help if symptoms are severe, distressing, or unsafe.',
        ],
      },
      {
        id: 'changes-worth-noticing',
        heading: 'Changes worth noticing',
        paragraphs: ['Depression does not look the same in everyone. Some people describe sadness; others notice irritability, emotional numbness, physical discomfort, or exhaustion. Possible changes include:'],
        points: [
          'Less interest or pleasure in activities that usually matter to you.',
          'Changes in sleep, appetite, energy, concentration, or decision-making.',
          'Persistent guilt, hopelessness, or feeling unusually withdrawn.',
          'Difficulty keeping up with work, relationships, or everyday care.',
        ],
      },
      {
        id: 'what-an-assessment-can-offer',
        heading: 'What an assessment can offer',
        paragraphs: [
          'A clinician will ask about the pattern and duration of your symptoms, your medical history, medications, sleep, substance use, and life circumstances. Some medical conditions and medications can cause similar symptoms. Assessment may also explore periods of unusually high energy or reduced need for sleep, because the safest treatment depends on the full picture.',
          'Depending on your needs, care may involve psychotherapy, medication, practical supports, or a combination. Treatment decisions should include your preferences and a discussion of benefits, risks, and follow-up. Do not start, stop, or change a medication based on an article.',
        ],
      },
      {
        id: 'taking-the-next-step',
        heading: 'Taking the next step, gently',
        paragraphs: [
          'If you can, tell someone you trust what has changed and arrange a conversation with a healthcare professional. A brief private note about symptoms and questions can help you prepare. Regular meals, manageable movement, and a steady sleep routine may support wellbeing, but they are not substitutes for treatment.',
          'If you have thoughts of suicide or feel unable to stay safe, do not wait for a routine appointment or a website response. In the United States, call or text 988 for crisis support. For immediate danger, call 911 or go to the nearest emergency department.',
        ],
      },
    ],
    sources: [
      { label: 'National Institute of Mental Health: Depression', href: 'https://www.nimh.nih.gov/health/publications/depression' },
    ],
  },
  {
    slug: 'small-moments-of-mindfulness',
    title: 'Small moments of calm: making room for mindfulness',
    category: 'Everyday wellbeing',
    excerpt: 'A grounded introduction to mindfulness, without the pressure to empty your mind or do it perfectly.',
    publishedAt: '2026-09-30',
    reviewedAt: null,
    image: {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-a-darmel-6643392-W0xfCNvPt4nC6yDTkhsQwT39vHWw10.jpg',
      alt: 'Two adults seated on yoga mats with their hands together during a quiet practice.',
      position: 'center 40%',
    },
    takeaway: 'Mindfulness is an optional tool for noticing the present moment. It is not a cure, a requirement for recovery, or a replacement for individualized mental health care.',
    sections: [
      {
        id: 'what-mindfulness-means',
        heading: 'What mindfulness actually means',
        paragraphs: [
          'Mindfulness involves paying attention to present-moment experiences with less judgment. It is not about achieving a blank mind, ignoring problems, or feeling calm on demand. A wandering mind is normal; noticing that it has wandered is part of the practice.',
          'Some structured mindfulness-based approaches may help with stress, anxiety, or depressive symptoms. Research findings vary, and not every practice is helpful for every person. Benefits depend on the approach, the individual, and the quality of the evidence—not on trying harder.',
        ],
      },
      {
        id: 'a-small-place-to-start',
        heading: 'A small place to start',
        paragraphs: ['If you are curious, try a short, gentle practice while sitting somewhere safe. You can keep your eyes open and stop whenever you wish.'],
        points: [
          'Notice where your feet touch the floor or where the chair supports you.',
          'Choose one ordinary detail to observe, such as a sound in the room or the texture of an object.',
          'If comfortable, notice your natural breathing without forcing a pattern or holding your breath.',
          'When your attention moves, gently return to the detail you chose. There is no need to criticize yourself.',
        ],
      },
      {
        id: 'comfort-and-safety',
        heading: 'Your comfort matters more than the exercise',
        paragraphs: [
          'For some people, focusing inward or on the breath can increase anxiety, distress, or difficult memories. Mindfulness is not risk-free. If a practice makes you feel worse, stop, look around your surroundings, and return to an activity that feels familiar and grounding.',
          'If you have a trauma history, panic symptoms, or other mental health concerns, a qualified clinician can help you decide whether an adapted approach is appropriate. You do not have to meditate to take good care of yourself.',
        ],
      },
      {
        id: 'part-of-a-broader-plan',
        heading: 'One possible part of a broader care plan',
        paragraphs: [
          'A quiet pause, a mindful walk, or noticing a familiar daily routine may feel more accessible than a long seated practice. Small, optional experiments can help you notice what suits you without turning wellbeing into another performance task.',
          'Continue established treatment and discuss persistent symptoms with your healthcare professional. Mindfulness should not be used to postpone an assessment, replace prescribed care, or promise a particular outcome.',
        ],
      },
    ],
    sources: [
      { label: 'National Center for Complementary and Integrative Health: Meditation and Mindfulness—Effectiveness and Safety', href: 'https://www.nccih.nih.gov/health/meditation-and-mindfulness-effectiveness-and-safety' },
    ],
  },
  {
    slug: 'understanding-attention-and-adult-adhd',
    title: 'Distracted, overwhelmed, or ADHD? Understanding attention',
    category: 'Adult ADHD',
    excerpt: 'Why attention difficulties deserve a thoughtful assessment, rather than a quick label.',
    publishedAt: '2026-09-30',
    reviewedAt: null,
    image: {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-n-voitkevich-6837648-xhZjTmTzrlkyyZTgF6m23xMBLAYRqn.jpg',
      alt: 'An adult resting their head on an arm at a desk beside a laptop and notebooks.',
      position: 'center 45%',
    },
    takeaway: 'Difficulty concentrating is real, but it is not specific to ADHD. A careful assessment looks at your history, daily functioning, and other possible explanations.',
    sections: [
      {
        id: 'attention-has-many-influences',
        heading: 'Attention has many influences',
        paragraphs: [
          'Losing track of a task, missing a deadline, or feeling mentally scattered can happen for many reasons. Poor sleep, anxiety, depression, stress, medication effects, substance use, and medical conditions can all affect attention. An online checklist or a relatable story cannot establish a diagnosis.',
          'ADHD is a neurodevelopmental condition involving a persistent pattern of inattention and/or hyperactivity and impulsivity that interferes with functioning. It can be recognized in adulthood, but the assessment looks for symptoms beginning in childhood—not only recent difficulty during a demanding season of life.',
        ],
      },
      {
        id: 'what-adult-adhd-can-look-like',
        heading: 'What adult ADHD can look like',
        paragraphs: ['In adults, hyperactivity may feel like inner restlessness rather than obvious constant movement. Symptoms must be considered in context, across settings and over time. Patterns a clinician may explore include:'],
        points: [
          'Persistent trouble organizing tasks, estimating time, or following through.',
          'Frequently losing items, forgetting commitments, or becoming distracted.',
          'Restlessness, impulsive decisions, or difficulty waiting and listening.',
          'Meaningful effects on more than one area of life, such as home and work.',
        ],
      },
      {
        id: 'a-thoughtful-evaluation',
        heading: 'What a thoughtful evaluation involves',
        paragraphs: [
          'Your provider may ask about childhood experiences, education, work, relationships, sleep, mood, and health history. Rating scales can support the conversation but do not replace it. With appropriate consent, school records or observations from someone who knows you well may help clarify longstanding patterns.',
          'The goal is not simply to confirm or reject a label. It is to understand what is affecting daily life, whether ADHD or another condition is present, and which supports are appropriate. Sometimes additional assessment or a referral is needed.',
        ],
      },
      {
        id: 'support-is-individual',
        heading: 'Support is individual',
        paragraphs: [
          'Treatment may include medication when appropriate, psychotherapy, skills-based strategies, or accommodations. External reminders, smaller task steps, and a consistent place for essentials may help some people, but they do not replace an assessment when difficulties are persistent.',
          'An ADHD evaluation does not guarantee a diagnosis or a specific medication. Your provider will consider benefits, risks, medical history, and applicable prescribing rules with you. Bring your questions; understanding your experience is a useful first step.',
        ],
      },
    ],
    sources: [
      { label: 'National Institute of Mental Health: ADHD in Adults—4 Things to Know', href: 'https://www.nimh.nih.gov/health/publications/adhd-what-you-need-to-know' },
    ],
  },
]

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T12:00:00Z`))
}

export function articleReadingMinutes(article: MentalHealthArticle) {
  const text = [article.excerpt, article.takeaway, ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.points ?? [])])].join(' ')
  return Math.max(1, Math.ceil(text.trim().split(/\s+/).length / 200))
}

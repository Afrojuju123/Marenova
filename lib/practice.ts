export const practice = {
  name: 'Marenova Psychiatry & Wellness LLC',
  eligibility: 'Currently accepting telehealth patients located in Florida.',
  bookingUrl: 'https://marenovawellness.clientsecure.me',
  portalUrl: null as string | null,
}

export const provider = {
  name: 'Kizito L. Mbaekwe',
  credentials: 'MSN, APRN, PMHNP-BC',
  role: 'Psychiatric–Mental Health Nurse Practitioner',
  portrait:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kizito_provider_portrait_refined_400w-6pRNdeiQlhaRTM7b64rfzXZO4KYJfK.webp',
}

interface NavigationItem {
  label: string
  href: string
  description?: string
  children?: { label: string; href: string }[]
}

export const olderAdultNavigation = [
  { label: 'Geriatric Mental Health', href: '/older-adults#geriatric-mental-health' },
  { label: "Dementia / Alzheimer's Behavioral Care", href: '/older-adults#dementia-alzheimers-care' },
  { label: 'Lewy Body Dementia Support', href: '/older-adults#lewy-body-dementia' },
  { label: 'Nursing Home / Assisted-Living Services', href: '/older-adults#nursing-home-assisted-living' },
]

export const facilityNavigation = [
  { label: 'Nursing Homes', href: '/facilities#nursing-homes' },
  { label: 'Assisted Living / Memory Care', href: '/facilities#assisted-living-memory-care' },
  { label: 'What We Provide', href: '/facilities#what-we-provide' },
  { label: 'Discuss a Partnership', href: '/facilities#refer-a-resident' },
]

export const patientNavigation = [
  { label: 'New Patients', href: '/patient-info#new-patients' },
  { label: 'Insurance & Fees', href: '/patient-info#insurance-fees' },
  { label: 'FAQs', href: '/patient-info#faqs' },
  { label: 'Forms / Portal', href: '/patient-info#forms-portal' },
  { label: 'Telehealth Information', href: '/patient-info#telehealth-information' },
]

export const navigation: NavigationItem[] = [
  {
    label: 'About',
    href: '/about',
    description: 'One provider. A more personal kind of care.',
    children: [
      { label: 'Our Practice', href: '/about#our-practice' },
      { label: 'Meet Your Provider', href: '/about#meet-your-provider' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    description: 'Thoughtful support, built around your needs.',
    children: [
      { label: 'Psychiatric Evaluation', href: '/services#psychiatric-evaluation' },
      { label: 'Medication Management', href: '/services#medication-management' },
      { label: 'ADHD Evaluation & Treatment', href: '/services#adhd-evaluation-treatment' },
      { label: 'Depression & Anxiety Treatment', href: '/services#depression-anxiety-treatment' },
      { label: 'Geriatric Psychiatry', href: '/services#geriatric-psychiatry' },
      { label: 'Telepsychiatry', href: '/services#telepsychiatry' },
    ],
  },
  {
    label: 'What We Treat',
    href: '/what-we-treat',
    description: 'Understanding is a meaningful first step.',
    children: [
      { label: 'Depression', href: '/what-we-treat/depression' },
      { label: 'Generalized Anxiety', href: '/what-we-treat/generalized-anxiety' },
      { label: 'Social Anxiety / Panic', href: '/what-we-treat/social-anxiety-panic' },
      { label: 'ADHD', href: '/what-we-treat/adhd' },
      { label: 'Bipolar Disorder', href: '/what-we-treat/bipolar-disorder' },
      { label: 'Insomnia', href: '/what-we-treat/insomnia' },
      { label: 'Grief / Adjustment Disorders', href: '/what-we-treat/grief-adjustment-disorders' },
      { label: 'Cognitive & Behavioral Symptoms', href: '/what-we-treat/cognitive-behavioral-symptoms' },
    ],
  },
  {
    label: 'Older Adult Care',
    href: '/older-adults',
    description: 'Dignity, understanding, and support for every chapter.',
    children: olderAdultNavigation,
  },
  {
    label: 'Facility Partnerships',
    href: '/facilities',
    description: 'A psychiatric care partner for your residents and your team.',
    children: facilityNavigation,
  },
  {
    label: 'Patient Information',
    href: '/patient-info',
    description: 'A little clarity before your first appointment.',
    children: patientNavigation,
  },
  { label: 'Blog', href: '/blog' },
]

export const photographs = {
  olderCouplePortrait:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-rodry-fotografias-584981069-20320648-kV0j7ijPHqKZkYxcn5KwL9Z6jx7yZB.jpg',
  olderCoupleAtHome:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-shvets-production-7545219-Kctso59PzphjkMPl7e9LUxAIAN0Hab.jpg',
  olderAdultCommunity:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-centre-for-ageing-better-55954677-11674389-3FHgvu9YxRRYdptgfcVCjD5CZnykqn.jpg',
  mindfulness:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-a-darmel-6643392-47yRxU1knQciP5WJKnyYrxgNnnGgEp.jpg',
  family:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-emma-bauso-1183828-2833394-T4wOLWidSFjjF7GsZmXJqgcmL8gGoC.jpg',
  reflection:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-keira-burton-6624303-7nY184HPh16ng8YaNvd2el1Og8keDr.jpg',
  meditation:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-gabby-k-5384536-yucEAF4vxgMJfaxSQqK2yxOoWOj4b6.jpg',
  support:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-karola-g-5979734-UBmIHyH4qSYPZNcL9GdMmsG63ND6sB.jpg',
  resilience:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-polina-tankilevitch-5386251-0VlSAEoz3akqUYLB0X6Gxw3xO1qsuX.jpg',
  joy:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-rdne-5544127-ZtkQHe1tS2WflnhkinTPHxaXKFEMHQ.jpg',
  movement:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-rethaferguson-3618721-RYigDFQ6drTOgDcFauCokjlHWDjp8z.jpg',
}

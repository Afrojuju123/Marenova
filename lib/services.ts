import {
  Brain,
  ClipboardList,
  HeartHandshake,
  Pill,
  Sprout,
  Video,
} from 'lucide-react'

export const adhdDisclaimer =
  'An ADHD evaluation does not guarantee a diagnosis or a prescription for stimulant medication. Medication is prescribed only when clinically appropriate, legally permitted, and in compliance with telehealth regulations.'

export const careServices = [
  {
    slug: 'psychiatric-evaluation',
    title: 'Psychiatric Evaluation',
    icon: ClipboardList,
    summary: 'A thoughtful conversation about your history, your experiences, and what you hope to change.',
    description: 'Your story is the starting point. We take time to understand your symptoms, physical health, sleep, relationships, and daily life before discussing clinical impressions and next steps.',
    points: [
      'A review of mental health, medical history, and current medications',
      'Individualized assessment of symptoms, functioning, and safety',
      'Clear recommendations, including referrals or further testing when needed',
    ],
    note: null,
  },
  {
    slug: 'medication-management',
    title: 'Medication Management',
    icon: Pill,
    summary: 'Evidence-based guidance to help you make informed, confident decisions about your treatment.',
    description: 'Medication is a shared decision, not an automatic next step. When appropriate, we discuss benefits, risks, alternatives, and how a treatment may fit with your health and your goals.',
    points: [
      'Review of interactions, side effects, and overall medication burden',
      'Follow-up to monitor response and make thoughtful adjustments',
      'Coordination with your other prescribers, with your permission',
    ],
    note: null,
  },
  {
    slug: 'adhd-evaluation-treatment',
    title: 'ADHD Evaluation & Treatment',
    icon: Brain,
    summary: 'Clarity around attention, organization, and everyday challenges through a careful adult assessment.',
    description: 'Difficulty focusing can have more than one explanation. Adult ADHD assessment considers your developmental history, symptoms across settings, and other possible contributors before a care plan is recommended.',
    points: [
      'Review of childhood history, current functioning, and available records',
      'Consideration of sleep, anxiety, mood, medical, and substance-related factors',
      'Practical supports, therapy referrals, and medication when appropriate',
    ],
    note: adhdDisclaimer,
  },
  {
    slug: 'depression-anxiety-treatment',
    title: 'Depression & Anxiety Treatment',
    icon: HeartHandshake,
    summary: 'Personalized support for persistent worry, low mood, and the ways they affect your life.',
    description: 'You deserve more than being told to push through. We explore the pattern and impact of your symptoms, consider medical and life circumstances, and work together on achievable goals for recovery.',
    points: [
      'Evaluation of mood, worry, panic, sleep, and day-to-day functioning',
      'A collaborative plan that may include medication and psychotherapy referrals',
      'Ongoing symptom monitoring, supportive education, and safety planning',
    ],
    note: null,
  },
  {
    slug: 'geriatric-psychiatry',
    title: 'Geriatric Psychiatry',
    icon: Sprout,
    summary: 'Thoughtful psychiatric care for older adults, with dignity and the whole person in mind.',
    description: 'Later-life mental health deserves careful attention. We consider mood, memory concerns, sleep, loss, medical complexity, and medication safety while supporting your preferences and independence.',
    points: [
      'Assessment of mood, anxiety, cognitive concerns, and behavioral changes',
      'Attention to medication interactions, fall risk, and medical contributors',
      'Collaboration with primary care and authorized family or caregivers',
    ],
    note: null,
  },
  {
    slug: 'telepsychiatry',
    title: 'Telepsychiatry',
    icon: Video,
    summary: 'Connect with your provider by secure video from a comfortable, private space.',
    description: 'A familiar provider, without the commute. When clinically suitable, video appointments make room for thoughtful assessment and follow-up while respecting your privacy and location eligibility.',
    points: [
      'A private setting and a device with a camera, microphone, and internet access',
      'Location and licensure eligibility confirmed for every appointment',
      'In-person care or a higher level of support recommended when needed',
    ],
    note: null,
  },
]

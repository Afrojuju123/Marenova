import {
  Brain,
  CloudSun,
  HeartHandshake,
  Moon,
  Puzzle,
  UsersRound,
  Waves,
  Wind,
  type LucideIcon,
} from 'lucide-react'

export const educationalDisclaimer =
  'This information is provided for educational purposes only and does not replace an individualized psychiatric evaluation, diagnosis, or professional treatment plan.'

export interface Condition {
  slug: string
  title: string
  icon: LucideIcon
  summary: string
  introduction: string
  symptoms: string[]
  impact: string
  evaluation: string[]
  support: string
  warningSigns: string
  service: { slug: string; label: string }
  relatedSlugs: string[]
  resource: { label: string; url: string }
}

export const conditions: Condition[] = [
  {
    slug: 'depression',
    title: 'Depression',
    icon: CloudSun,
    summary: 'Support when low mood, loss of interest, or low energy makes everyday life feel heavier.',
    introduction: 'Depression can affect how you feel, think, sleep, and connect with others. It is not a personal weakness, and it does not always look like sadness. A thoughtful assessment can help make sense of what you are experiencing and identify a path forward.',
    symptoms: [
      'Persistent sadness, emptiness, irritability, or a sense of hopelessness',
      'Less interest or pleasure in activities and relationships that usually matter to you',
      'Changes in sleep, appetite, energy, or the ability to concentrate',
      'Feelings of worthlessness, excessive guilt, or thoughts about death or self-harm',
    ],
    impact: 'Depression may make work, household tasks, relationships, and personal care harder to manage. In older adults, withdrawal, low motivation, or cognitive concerns may be more noticeable than sadness. These changes deserve attention rather than being dismissed as an inevitable part of aging.',
    evaluation: [
      'Discuss when symptoms began, how long they last, and how they affect your daily functioning and safety.',
      'Review previous episodes, past treatment, family history, and any periods of unusually elevated mood or energy.',
      'Consider sleep, grief, medications, substance use, and physical conditions that can contribute to similar symptoms; coordinate medical evaluation when indicated.',
    ],
    support: 'Care may include medication when appropriate, referral for evidence-based psychotherapy, practical support for routines, and a collaborative safety plan. Follow-up considers both symptom changes and what is becoming more manageable in your daily life.',
    warningSigns: 'Thoughts of suicide, planning self-harm, feeling unable to stay safe, or severe difficulty meeting basic needs require prompt help. Do not wait for a routine appointment if you or someone you care about may be in danger.',
    service: { slug: 'depression-anxiety-treatment', label: 'Depression & Anxiety Treatment' },
    relatedSlugs: ['generalized-anxiety', 'grief-adjustment-disorders'],
    resource: { label: 'National Institute of Mental Health: Depression', url: 'https://www.nimh.nih.gov/health/topics/depression' },
  },
  {
    slug: 'generalized-anxiety',
    title: 'Generalized Anxiety',
    icon: Wind,
    summary: 'A thoughtful approach to persistent worry, tension, and difficulty switching off.',
    introduction: 'Some worry is part of life. When worry feels difficult to control, spans many areas of life, and repeatedly interferes with rest or daily activities, it may be time to seek support. Care begins by understanding the pattern, not by asking you to simply relax.',
    symptoms: [
      'Frequent worry about everyday responsibilities, health, family, or the future',
      'Feeling restless, on edge, easily fatigued, or irritable',
      'Muscle tension, trouble concentrating, or a mind that feels difficult to quiet',
      'Difficulty falling asleep or staying asleep because of worry',
    ],
    impact: 'Persistent anxiety can consume time and energy, affect decision-making, and strain relationships. Repeated checking, reassurance-seeking, or avoiding uncertainty may make everyday responsibilities more difficult. Physical discomfort and poor sleep can add to the burden.',
    evaluation: [
      'Explore the duration and range of worries, physical symptoms, coping patterns, and effects on everyday life.',
      'Assess for other concerns, including depression, panic, trauma-related symptoms, and sleep difficulties.',
      'Review medications, caffeine and other substances, and possible medical contributors, such as thyroid or cardiovascular problems, when clinically indicated.',
    ],
    support: 'A personalized plan may include referral for cognitive behavioral therapy, medication when appropriate, education about the anxiety cycle, and practical strategies for sleep and daily routines. Together, we monitor what is helping and adjust care over time.',
    warningSigns: 'New or severe chest pain, fainting, or significant breathing difficulty should not be assumed to be anxiety and may be a medical emergency. Seek urgent support if anxiety is accompanied by thoughts of self-harm or an inability to stay safe.',
    service: { slug: 'depression-anxiety-treatment', label: 'Depression & Anxiety Treatment' },
    relatedSlugs: ['social-anxiety-panic', 'insomnia'],
    resource: { label: 'National Institute of Mental Health: Anxiety Disorders', url: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders' },
  },
  {
    slug: 'social-anxiety-panic',
    title: 'Social Anxiety / Panic',
    icon: UsersRound,
    summary: 'Understanding fear of judgment, sudden surges of panic, and the urge to avoid.',
    introduction: 'Social anxiety and panic are distinct experiences that can sometimes overlap. Social anxiety centers on fear of scrutiny or judgment, while panic attacks involve a sudden surge of intense fear and physical symptoms. Having a panic attack alone does not establish a diagnosis of panic disorder.',
    symptoms: [
      'Strong fear of being judged, embarrassed, or negatively evaluated in social situations',
      'Avoiding conversations, meetings, public speaking, or other situations because of fear',
      'Sudden episodes of a racing heart, trembling, sweating, dizziness, or breathlessness',
      'Ongoing worry about another panic attack or changing activities to avoid one',
    ],
    impact: 'Social fear or concern about panic can narrow your world. Work, friendships, appointments, travel, and ordinary errands may start to feel out of reach. An evaluation helps distinguish different causes and supports a plan to gradually rebuild confidence and participation.',
    evaluation: [
      'Discuss the timing, triggers, and physical features of episodes, along with avoidance and effects on daily life.',
      'Clarify whether panic occurs unexpectedly, in feared social situations, or alongside another condition.',
      'Consider medical causes, medication effects, caffeine, substance use, and the need for in-person assessment of physical symptoms.',
    ],
    support: 'Evidence-based psychotherapy, including cognitive behavioral and appropriately guided exposure-based approaches, may be recommended through referral. Medication may also be considered based on your symptoms, preferences, and medical history. Treatment is collaborative and proceeds at a clinically appropriate pace.',
    warningSigns: 'Call 911 for new or severe chest pain, serious breathing difficulty, fainting, or possible stroke symptoms. Do not assume a new physical symptom is a panic attack. Thoughts of suicide or feeling unable to remain safe also require immediate support.',
    service: { slug: 'depression-anxiety-treatment', label: 'Depression & Anxiety Treatment' },
    relatedSlugs: ['generalized-anxiety', 'depression'],
    resource: { label: 'National Institute of Mental Health: Anxiety Disorders', url: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders' },
  },
  {
    slug: 'adhd',
    title: 'ADHD',
    icon: Brain,
    summary: 'Clarity around adult attention, organization, impulsivity, and follow-through.',
    introduction: 'Attention-deficit/hyperactivity disorder is a neurodevelopmental condition with symptoms that begin in childhood and may continue into adulthood. An adult evaluation looks beyond a moment of distraction to understand longstanding patterns, their impact, and other possible explanations.',
    symptoms: [
      'Persistent difficulty organizing tasks, managing time, or following through',
      'Frequently losing items, missing details, or becoming easily distracted',
      'Restlessness, difficulty remaining still, or a feeling of being constantly on the go',
      'Interrupting, acting before considering consequences, or difficulty waiting',
    ],
    impact: 'When persistent across settings, these difficulties can affect work, finances, home responsibilities, and relationships. Some adults have developed extensive coping strategies that mask the effort involved. Similar challenges can also arise from sleep problems, anxiety, depression, or medical conditions.',
    evaluation: [
      'Review developmental and childhood history, current symptoms, and impairment across settings such as home and work.',
      'Use structured assessment and, when appropriate and with permission, available school records or input from someone who knows you well; a screening score alone is not a diagnosis.',
      'Consider mood, anxiety, sleep, trauma, substances, medications, and medical contributors before discussing treatment options.',
    ],
    support: 'A care plan may include organizational strategies, therapy or skills-based referrals, accommodations guidance, and medication when appropriate. Prescribing decisions account for medical history, safety, monitoring needs, and applicable regulations. A particular diagnosis or medication is never guaranteed.',
    warningSigns: 'Sudden confusion or an abrupt, severe change in attention is not typical of a longstanding ADHD pattern and needs prompt medical evaluation. Seek urgent help for dangerous impulsive behavior, severe mood changes, or thoughts of self-harm.',
    service: { slug: 'adhd-evaluation-treatment', label: 'ADHD Evaluation & Treatment' },
    relatedSlugs: ['generalized-anxiety', 'insomnia'],
    resource: { label: 'National Institute of Mental Health: ADHD', url: 'https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd' },
  },
  {
    slug: 'bipolar-disorder',
    title: 'Bipolar Disorder',
    icon: Waves,
    summary: 'Careful assessment of changes in mood, energy, sleep, and activity over time.',
    introduction: 'Bipolar disorders involve episodes of depression and periods of elevated or unusually irritable mood with changes in energy and activity. These episodes are different from ordinary shifts in mood. Understanding the full history is essential to making an informed diagnosis and treatment plan.',
    symptoms: [
      'Episodes of unusually elevated or irritable mood and increased energy or activity',
      'Needing much less sleep without feeling tired, along with racing thoughts or faster speech',
      'Uncharacteristically impulsive decisions, overspending, or other risky behavior',
      'Periods of low mood, loss of interest, low energy, or hopelessness',
    ],
    impact: 'Mood episodes can disrupt sleep, relationships, work, judgment, and financial or physical safety. Changes may initially feel productive or go unnoticed by the person experiencing them. A trusted support person may provide helpful perspective when you consent to their involvement.',
    evaluation: [
      'Build a timeline of changes in mood, energy, sleep, and functioning, including episode duration and severity.',
      'Review family history, previous diagnoses and medications, substance use, and any hospitalizations or psychotic symptoms.',
      'Assess current safety and determine whether outpatient care is appropriate or a more urgent or intensive level of care is needed.',
    ],
    support: 'Care may include appropriate mood-stabilizing treatment, ongoing monitoring, psychotherapy referral, and support for consistent sleep and routines. Early warning signs and a response plan are discussed together. Medication choices require careful assessment and should not be changed without your treating clinician.',
    warningSigns: 'Little or no sleep with escalating energy, severe agitation, dangerous behavior, paranoia, hallucinations, or suicidal thinking requires urgent assessment. If there is immediate danger, call 911 or go to an emergency department rather than waiting for an outpatient appointment.',
    service: { slug: 'medication-management', label: 'Medication Management' },
    relatedSlugs: ['depression', 'insomnia'],
    resource: { label: 'National Institute of Mental Health: Bipolar Disorder', url: 'https://www.nimh.nih.gov/health/topics/bipolar-disorder' },
  },
  {
    slug: 'insomnia',
    title: 'Insomnia',
    icon: Moon,
    summary: 'A closer look at sleep difficulties and how they affect your days.',
    introduction: 'Insomnia involves difficulty falling asleep, staying asleep, or getting restorative sleep despite having the opportunity to sleep. It can be closely connected with stress, mood, physical health, and daily routines. Understanding those connections is an important first step.',
    symptoms: [
      'Taking a long time to fall asleep or waking frequently during the night',
      'Waking earlier than intended and being unable to return to sleep',
      'Daytime fatigue, irritability, or difficulty with concentration and memory',
      'Increasing worry or frustration about sleep and its effect on the next day',
    ],
    impact: 'Poor sleep can affect energy, patience, attention, and safety during the day. It may make existing mood or anxiety symptoms harder to manage. In older adults, medication effects, pain, breathing-related sleep problems, and changes in routine deserve particular attention.',
    evaluation: [
      'Review your sleep schedule, nighttime symptoms, daytime functioning, and a sleep diary when helpful.',
      'Consider mood, anxiety, pain, medical conditions, caffeine, alcohol, and medications that may influence sleep.',
      'Screen for concerns that may need primary care or sleep-specialist evaluation, including possible sleep apnea or other sleep disorders.',
    ],
    support: 'A plan may include referral for cognitive behavioral therapy for insomnia (CBT-I), attention to sleep routines, and treatment of contributing conditions. Medication is considered individually, with attention to sedation, interactions, and fall risk. The goal is safer, more sustainable sleep, not simply sedation.',
    warningSigns: 'Several nights with very little sleep accompanied by unusually high energy, risky behavior, hallucinations, or confusion needs urgent assessment. Severe daytime sleepiness also creates safety risks; do not drive or operate machinery when sleepy. Seek emergency help for serious breathing problems.',
    service: { slug: 'psychiatric-evaluation', label: 'Psychiatric Evaluation' },
    relatedSlugs: ['generalized-anxiety', 'bipolar-disorder'],
    resource: { label: 'National Heart, Lung, and Blood Institute: Insomnia', url: 'https://www.nhlbi.nih.gov/health/insomnia' },
  },
  {
    slug: 'grief-adjustment-disorders',
    title: 'Grief / Adjustment Disorders',
    icon: HeartHandshake,
    summary: 'Space for loss, transitions, and the emotional weight of a changing life.',
    introduction: 'Grief is a natural response to loss, not automatically a psychiatric disorder. Significant life changes can also bring distress that feels difficult to manage. Care respects your personal and cultural experience while considering when additional support or treatment may be helpful.',
    symptoms: [
      'Sadness, longing, tearfulness, anger, or waves of emotion after a loss',
      'Feeling overwhelmed or persistently worried after a major life change',
      'Changes in sleep, appetite, concentration, or interest in usual activities',
      'Withdrawing from support or having difficulty managing everyday responsibilities',
    ],
    impact: 'Bereavement, retirement, illness, caregiving changes, relocation, and relationship transitions can affect identity, connection, and routine. The experience and pace of grieving differ widely. Support is about understanding your needs, not imposing a deadline for feeling better.',
    evaluation: [
      'Explore the loss or stressor, its timing, your cultural context, available supports, and what feels most difficult.',
      'Assess daily functioning, sleep, coping, and safety without treating normal grief as a diagnosis by default.',
      'Consider whether depression, an adjustment disorder, prolonged grief, or another condition may be present and whether therapy or other support is indicated.',
    ],
    support: 'Recommendations may include grief counseling, psychotherapy referrals, support groups, and practical help rebuilding routines and connection. Medication is not a treatment for ordinary grief itself, but may be considered for a co-occurring condition when clinically appropriate.',
    warningSigns: 'Thoughts of suicide, feeling unable to stay safe, escalating substance use, or severe difficulty eating, drinking, or meeting essential needs call for prompt support. You do not have to wait for distress to reach a crisis before asking for help.',
    service: { slug: 'psychiatric-evaluation', label: 'Psychiatric Evaluation' },
    relatedSlugs: ['depression', 'generalized-anxiety'],
    resource: { label: 'MedlinePlus: Adjustment Disorder', url: 'https://medlineplus.gov/ency/article/000932.htm' },
  },
  {
    slug: 'cognitive-behavioral-symptoms',
    title: 'Cognitive & Behavioral Symptoms',
    icon: Puzzle,
    summary: 'Thoughtful evaluation of changes in memory, thinking, mood, or behavior.',
    introduction: 'Changes in memory or behavior can be concerning for you and those who care about you. They can have many causes, including sleep difficulties, depression, medication effects, medical illness, or a neurocognitive condition. A symptom is not the same as a dementia diagnosis.',
    symptoms: [
      'Increasing forgetfulness or difficulty following conversations and familiar tasks',
      'Changes in attention, planning, judgment, or managing medications and finances',
      'New withdrawal, irritability, agitation, or other changes from usual behavior',
      'Changes in sleep, mood, or everyday independence noticed by you or a caregiver',
    ],
    impact: 'Cognitive or behavioral changes may affect confidence, relationships, safety, and independent living. They can also increase caregiver strain. Understanding what has changed from your usual level of functioning helps identify appropriate supports while protecting dignity and personal preferences.',
    evaluation: [
      'Review onset, pace of change, daily functioning, medical history, and current medications; include an authorized caregiver when appropriate.',
      'Use cognitive and mental health screening when indicated, recognizing that a screening result alone cannot establish a diagnosis.',
      'Coordinate with primary care, neurology, or other specialists for medical evaluation, testing, and assessment of potentially reversible contributors.',
    ],
    support: 'Psychiatric care can address contributing mood, anxiety, sleep, or behavioral concerns alongside appropriate medical assessment. Care may include medication review, supportive routines, caregiver education, and coordinated referrals. Psychiatric evaluation does not replace a comprehensive medical or neurological workup when needed.',
    warningSigns: 'Sudden or rapidly worsening confusion is not a normal part of aging and requires urgent medical evaluation. Call 911 for possible stroke signs such as facial drooping, arm weakness, or speech difficulty, or for a serious injury or immediate danger. Do not wait for a routine psychiatric visit.',
    service: { slug: 'geriatric-psychiatry', label: 'Geriatric Psychiatry' },
    relatedSlugs: ['depression', 'insomnia'],
    resource: { label: 'MedlinePlus: Understanding Dementia', url: 'https://medlineplus.gov/dementia.html' },
  },
]

export function getCondition(slug: string) {
  return conditions.find((condition) => condition.slug === slug)
}

export interface SelfPayService {
  name: string
  description: string
  amount: number | null
}

export const selfPayServices: SelfPayService[] = [
  {
    name: 'Initial psychiatric evaluation',
    description: 'A conversation about your concerns, health history, and goals, followed by individualized recommendations.',
    amount: null,
  },
  {
    name: 'Follow-up appointment',
    description: 'An ongoing review of symptoms, treatment response, medication safety, and the next steps in your care.',
    amount: null,
  },
]

export const newPatientSteps = [
  {
    title: 'Check Eligibility',
    description: 'Care is for adults 18+ who are physically located in Florida during each telehealth visit. Review clinical fit, availability, insurance participation, and expected fees before arranging care.',
    link: { label: 'Review insurance & fees', href: '#insurance-fees' },
  },
  {
    title: 'Contact the Practice',
    description: 'Discuss an appointment with Kizito L. Mbaekwe, MSN, APRN, PMHNP-BC, the practice’s sole provider. Follow the instructions supplied directly by the practice or your referring clinician; appointments are confirmed by the practice.',
    link: { label: 'Review how to get started', href: '/contact#booking' },
  },
  {
    title: 'Complete Intake',
    description: 'Use the practice’s designated secure intake system to complete your health history, consent documents, and any requested screening questionnaires. Do not upload or email these through the public website.',
    link: { label: 'Find forms & portal guidance', href: '#forms-portal' },
  },
  {
    title: 'Attend Appointment',
    description: 'Join from a quiet, private location using the video link in your appointment instructions. Have your medication list and questions ready. Your provider will confirm your identity and physical location.',
    link: { label: 'Prepare for a video visit', href: '#telehealth-information' },
  },
  {
    title: 'Receive Plan',
    description: 'Discuss the assessment and decide on appropriate next steps together. Your plan may include medication, therapy referrals, practical supports, or additional evaluation. An appointment does not guarantee a prescription.',
    link: { label: 'Explore our approach to care', href: '/services' },
  },
]

export const patientQuestions = [
  {
    id: 'telehealth',
    question: 'Can I attend a telehealth visit from anywhere?',
    answer: 'You must be physically located in Florida at the time of each appointment. Travel can affect eligibility, even if your home address has not changed. Confirm your location before booking or traveling. Telehealth may not be appropriate for every concern, and an in-person assessment or referral may be recommended.',
  },
  {
    id: 'prescriptions',
    question: 'Will an appointment guarantee a prescription?',
    answer: 'No. Prescribing depends on a clinical assessment, your medical history, safety considerations, and applicable law. Neither a specific diagnosis nor a particular medication, including a controlled medication, is guaranteed. Your provider will discuss options, potential benefits, risks, and appropriate monitoring with you.',
  },
  {
    id: 'refills',
    question: 'How should I request a medication refill?',
    answer: 'Existing patients must use the secure patient portal and follow the refill instructions provided by the practice. Request refills before you run out; some medications require a follow-up appointment or additional monitoring. Do not send medication names or refill requests through unsecured channels. A request is not a prescription approval.',
  },
  {
    id: 'cancellations',
    question: 'How do I cancel or reschedule an appointment?',
    answer: 'Use the secure portal or the verified instructions in your appointment confirmation. This informational website cannot cancel or change a visit. Review the practice’s written cancellation and rescheduling policy, including any deadlines or fees, before arranging care.',
  },
  {
    id: 'caregiver',
    question: 'May a family member or caregiver join my visit?',
    answer: 'A trusted person may participate when clinically appropriate and with your consent or lawful authorization. Discuss this with the practice in advance. Your provider may also need time to speak with you privately. For older adults, caregiver observations can help clarify medication use and changes in daily functioning.',
  },
  {
    id: 'technical',
    question: 'What if the video connection stops working?',
    answer: 'Try reopening the verified appointment link and check your camera, microphone, and internet connection. If you cannot reconnect, follow the contact instructions in your appointment confirmation. A phone-only visit is not automatically available; your provider will determine a safe, appropriate next step.',
  },
  {
    id: 'urgent',
    question: 'What if I need urgent help between appointments?',
    answer: 'The practice and its routine communication channels are not emergency services and are not continuously monitored. In immediate danger, call 911 or go to the nearest emergency department. In the United States, call or text 988 for mental health crisis support. Do not wait for an online reply in a crisis.',
  },
]

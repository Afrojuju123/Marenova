import { practice } from '@/lib/practice'

export interface PracticePolicy {
  slug: string
  title: string
  summary: string
  sections: { title: string; paragraphs: string[] }[]
}

export const policies: PracticePolicy[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    summary: `Your privacy matters to ${practice.name}. This policy describes our informational website, not the separate systems used to provide clinical care.`,
    sections: [
      {
        title: 'Information on this website',
        paragraphs: [
          'This website does not offer medical intake forms, accept appointment requests, or collect patient portal credentials. Please do not send medical records, medication details, or other sensitive health information through unsecured channels.',
          'The site’s hosting and image-delivery providers may process technical information necessary to deliver pages, such as IP addresses, browser details, and request logs. No advertising pixels or client-side analytics are intentionally enabled by this website.',
        ],
      },
      {
        title: 'Clinical information is handled separately',
        paragraphs: [
          'Clinical information should be shared only through the secure systems designated by the practice. The practice’s official Notice of Privacy Practices explains how protected health information is used, disclosed, and safeguarded in the course of care.',
          'Do not submit passwords or confidential health information on this informational website. Verify any scheduling or portal link against the instructions provided directly by the practice.',
        ],
      },
      {
        title: 'Questions and changes',
        paragraphs: [
          'For questions about information held as part of your care, use your established practice contact method and request the applicable privacy notice. This website policy should be reviewed if new forms, analytics, or third-party services are introduced.',
        ],
      },
    ],
  },
  {
    slug: 'notice-of-privacy-practices',
    title: 'Notice of Privacy Practices',
    summary: `An overview of health information privacy at ${practice.name}. This page does not replace the practice’s formal Notice of Privacy Practices.`,
    sections: [
      {
        title: 'Request the official notice',
        paragraphs: [
          'Before establishing care, request the practice’s current Notice of Privacy Practices through its official intake or contact process. That document should identify the responsible privacy contact, effective date, permitted uses and disclosures, patient rights, and complaint procedures.',
          'Review the official, practice-specific notice through the practice’s intake process. This educational summary is not a replacement for that document.',
        ],
      },
      {
        title: 'Your health information rights',
        paragraphs: [
          'Depending on applicable law and exceptions, HIPAA gives patients rights that may include accessing or obtaining a copy of health records, requesting corrections, asking for confidential communications or certain restrictions, and receiving an accounting of some disclosures.',
          'The official notice explains how to exercise these rights, applicable limits, and how to make a privacy complaint without retaliation.',
        ],
      },
      {
        title: 'Share information securely',
        paragraphs: [
          'Use only the secure communication methods provided by the practice for clinical information. This public website does not provide clinical messaging and does not accept protected health information.',
        ],
      },
    ],
  },
  {
    slug: 'terms-of-use',
    title: 'Terms of Use',
    summary: `These terms apply to the informational website of ${practice.name}. Use it as a source of general information about the practice and its approach to care.`,
    sections: [
      {
        title: 'Informational use',
        paragraphs: [
          'Website content is provided for general education and practice information. It is not personalized medical advice, a diagnosis, or a treatment recommendation. Reading this website or opening an information dialog does not create a patient–provider relationship.',
        ],
      },
      {
        title: 'Service eligibility',
        paragraphs: [
          'Care is for adults 18+ who are physically located in Florida at the time of each telehealth visit. Availability depends on provider capacity, clinical appropriateness, and applicable telehealth rules. No appointment, diagnosis, prescription, insurance coverage, or clinical outcome is guaranteed by this website.',
          'Practice-specific consent documents and service terms must be reviewed through the official intake process before care is established.',
        ],
      },
      {
        title: 'Responsible use and external links',
        paragraphs: [
          'Do not attempt to disrupt this website, access information without permission, or submit sensitive information through channels not designated for clinical use.',
          'External websites, including any future scheduling or portal service, have their own terms and privacy practices. Verify that you are visiting the correct service before sharing personal information.',
        ],
      },
    ],
  },
  {
    slug: 'medical-disclaimer',
    title: 'Medical Disclaimer',
    summary: 'General information can help you ask informed questions. It cannot replace an individual clinical assessment.',
    sections: [
      {
        title: 'Not personal medical advice',
        paragraphs: [
          'The information on this website is educational. Do not use it to diagnose yourself, start or stop medication, or delay appropriate medical care. Discuss personal health questions with a qualified healthcare professional.',
          'Images are illustrative lifestyle photographs. They do not depict the practice’s patients, establish a diagnosis, represent a clinical outcome, or serve as provider portraits.',
        ],
      },
      {
        title: 'Assessment and treatment',
        paragraphs: [
          'Symptoms may have more than one explanation. Recommendations depend on a full assessment and may include additional medical evaluation, psychotherapy, medication, or referral to a different level of care. Telehealth is not appropriate for every situation.',
          'Prescribing follows clinical judgment, safety considerations, licensure requirements, and applicable law. A particular medication or treatment outcome is never guaranteed.',
        ],
      },
      {
        title: 'Emergencies and crisis support',
        paragraphs: [
          `${practice.name} is not an emergency or crisis service. If you are in immediate danger, call 911 or go to the nearest emergency department. For mental health crisis support in the United States, call or text 988.`,
        ],
      },
    ],
  },
  {
    slug: 'financial-policies',
    title: 'Financial Policies',
    summary: 'Clear expectations about cost are an important part of informed care. Confirm your individual financial arrangements before booking.',
    sections: [
      {
        title: 'Fees and insurance',
        paragraphs: [
          'Review appointment fees and participating insurance plans directly with the practice. Do not assume that a particular insurance plan is accepted or that a service will be covered.',
          'Before booking, confirm the appointment fee, payment timing, insurance eligibility, and any expected copay, coinsurance, deductible, or self-pay responsibility with the practice and your insurer as appropriate.',
        ],
      },
      {
        title: 'Cancellations and other charges',
        paragraphs: [
          'Request the practice’s written cancellation, rescheduling, late-arrival, missed-appointment, refund, and administrative-fee policies before agreeing to services. This website does not publish or impose a specific cancellation deadline or fee.',
        ],
      },
      {
        title: 'Good Faith Estimates',
        paragraphs: [
          'If you are uninsured or do not plan to use insurance, you generally have a right under federal law to receive a Good Faith Estimate of expected charges for scheduled non-emergency care. Ask the practice whether these rules apply to your appointment and how to request an estimate.',
          'No payments or billing details are collected on this website.',
        ],
      },
    ],
  },
  {
    slug: 'accessibility',
    title: 'Accessibility',
    summary: 'Mental health information should be accessible. This website aims to support the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA.',
    sections: [
      {
        title: 'Our accessibility approach',
        paragraphs: [
          'The site uses semantic headings and landmarks, descriptive image text, keyboard-operable navigation and dialogs, visible focus indicators, and responsive layouts. Motion is reduced when your device requests it, and text can be enlarged using browser controls.',
          'Accessibility is an ongoing effort. A design target is not a certification, and a complete independent WCAG 2.2 AA audit has not been performed.',
        ],
      },
      {
        title: 'Using the website',
        paragraphs: [
          'Use the “Skip to content” link to move past navigation. Dialogs can be closed with Escape or their Close button. Frequently asked questions can be opened using the keyboard. The website does not require motion, hover, or a mouse to access essential information.',
        ],
      },
      {
        title: 'If something is difficult to use',
        paragraphs: [
          'Please let the practice know through your established contact method. Describe the page, the barrier you encountered, and the browser or assistive technology you used, without including unnecessary medical information.',
          'If you need assistance accessing care, discuss accommodations directly with the practice. Third-party services may have separate accessibility features and limitations.',
        ],
      },
    ],
  },
]

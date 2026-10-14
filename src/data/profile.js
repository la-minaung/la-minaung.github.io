// Single source of truth for portfolio content (site and resume).
// `years` is derived from the career start date, so it never goes stale.
// Update `lastUpdated` whenever you review the content below.

export const lastUpdated = 'October 2026';

const careerStart = { year: 2022, month: 10 }; // joined Infolog Pte Ltd

/** Whole years since `careerStart`, e.g. 4 for Oct 2026. */
export function yearsOfExperience(now = new Date()) {
  const months = (now.getFullYear() - careerStart.year) * 12 + (now.getMonth() + 1 - careerStart.month);
  return Math.max(0, Math.floor(months / 12));
}

export const years = yearsOfExperience();

export const languages = [
  { name: 'Burmese', level: 'native' },
  { name: 'English', level: 'conversational' },
];

export const profile = {
  name: 'La Min Aung',
  title: '.NET Developer',
  headline: 'Backend .NET Developer · C# · ASP.NET · MS SQL Server · System Integration',
  location: 'Da Nang, Vietnam',
  timezone: 'UTC+7',
  email: 'laminaung.dev@gmail.com',
  phone: '+959776966554',
  phoneDisplay: '+95 9 776 966 554',
  site: 'la-minaung.github.io',
  github: 'https://github.com/la-minaung',
  linkedin: 'https://www.linkedin.com/in/laminaung-dev',
  resume: '/La-Min-Aung-NET-Developer-Resume.pdf',
};

// Named in the resume profile and project list; shown as "delivered for".
export const clients = [
  'Samsung SDS',
  'Schneider Electric',
  'Charles & Keith',
  'Makino Inc',
  'Storefriendly',
  'Soon Aik Global',
  'Singapore MOE',
  'Hai Sia Seafood',
];

// Hero "proof" strip.
export const metrics = [
  { value: `${years}+`, label: 'Years in production', note: 'Backend .NET at Infolog Pte Ltd' },
  { value: '890', label: 'Daily order capacity', note: 'Up to 890 a day, 210 an hour · Samsung SDS 3D sorting' },
  { value: '200+', label: 'Robotic shelves', note: 'Across 4 customer terminals · Storefriendly' },
  { value: '8', label: 'Client projects', note: 'Logistics, retail, manufacturing, government' },
];

// One-line numbers under the resume profile.
export const highlights = [
  { strong: 'Up to 890 orders/day, 210/hour', rest: '(Samsung SDS 3D sorting)' },
  { strong: '200+ robotic shelves', rest: 'across 4 customer terminals (Storefriendly)' },
  { strong: '8 client projects', rest: 'across logistics, retail, manufacturing and government' },
];

// Simplified from the Schneider Electric project (see `projects`).
export const sortingFlow = [
  { icon: 'scan', label: 'Scan & weigh', by: 'PLC · Modbus TCP', text: 'Carton weight and barcode captured in real time.' },
  { icon: 'database', label: 'Validate', by: 'MS SQL Server', text: 'Order and packaging data validated before routing.' },
  { icon: 'cpu', label: 'Decide', by: 'C# service', text: 'Sorting lane chosen in real time.' },
  { icon: 'split', label: 'Route', by: 'Conveyor', text: 'Carton routed to its lane, with a reject lane for exceptions.' },
];

export const about = {
  paragraphs: [
    `I'm a .NET developer who likes problems where software has to meet the physical world. For the past ${years}+ years at Infolog Pte Ltd, I've built the backend that sits between warehouse management systems and the equipment on the floor: PLCs, sorting robots, forklifts and label printers. My clients are in Singapore and across Asia.`,
    'Most of my work is C#, ASP.NET and SQL Server: real-time services and Windows services that talk to hardware, REST APIs that connect platforms, and the reports and dashboards operators use to see what is happening. I support projects through UAT, go-live and handover, and write the technical documentation.',
  ],
  principles: [
    { icon: 'cpu', title: 'Hardware-aware backend', text: 'Real-time services for PLCs, robots, forklifts and label printers.' },
    { icon: 'database', title: 'Data-first', text: 'T-SQL workflows, validation logic, reports and live dashboards.' },
    { icon: 'check', title: 'Delivery-minded', text: 'UAT, go-live, technical documentation and project handover.' },
  ],
  facts: [
    { label: 'Based in', value: `${profile.location} (${profile.timezone})` },
    { label: 'Languages', value: languages.map((l) => `${l.name} (${l.level})`).join(', ') },
    { label: 'Focus', value: '.NET, MS SQL Server, system integration' },
    { label: 'Status', value: 'Open to opportunities' },
  ],
};

export const experience = [
  {
    role: 'Full Stack / Backend .NET Developer',
    company: 'Infolog Pte Ltd',
    type: 'Full-time',
    start: 'Oct 2022',
    end: 'Present',
    location: 'Remote · Asia-Pacific projects',
    summary:
      'Backend-focused warehouse automation, robotics integration, WMS customization and enterprise logistics systems for global clients and government agencies.',
    highlights: [
      'Develop C#/.NET real-time services, Windows services and REST APIs that connect WMS platforms to PLCs, robots, forklifts and Zebra printers.',
      'Design MS SQL Server workflows and validation logic, plus Crystal Reports and dashboards for operations teams.',
      'Integrate third-party platforms, robots and device SDKs: Samsung Cello, Libiao Robotics, Hikrobot and HuarayTech MVSDK.',
      'Support UAT, go-live deployment, technical documentation and project handover.',
    ],
    tech: ['C#', 'ASP.NET', 'MS SQL Server', 'T-SQL', 'REST APIs', 'Windows Services', 'Angular', 'Crystal Reports', 'ZPL', 'Modbus TCP'],
  },
  {
    role: 'Software Development Intern',
    company: 'Irrahub Co. Ltd',
    type: 'Internship',
    start: 'Jul 2020',
    end: 'Aug 2020',
    location: 'Myanmar',
    summary: 'Built an election information web platform with React.js and Node.js for candidate, voter-list and election-package search.',
    highlights: [],
    tech: ['React.js', 'Node.js', 'JavaScript'],
  },
];

export const projects = [
  {
    client: 'Schneider Electric',
    title: 'Warehouse automation',
    period: '2025 – 2026',
    domain: 'PLC · Vision · Sorting',
    impact: 'Real-time PLC sorting',
    bullets: [
      'Real-time C# service talks to PLCs over Modbus TCP, captures carton weight and barcode, and decides the sorting lane.',
      'Integrated HuarayTech MVSDK image capture with conveyor routing through asynchronous, database-driven triggers.',
      'REST APIs and SQL Server validation logic keep order and packaging data in sync.',
      'Outbound dashboards for exception handling, shipment tracing and reject-lane resolution.',
    ],
    flow: ['PLC', 'C# service', 'SQL Server', 'Sorting lane'],
    tech: ['C#', 'ASP.NET', 'MS SQL Server', 'REST APIs', 'Modbus TCP', 'HuarayTech MVSDK'],
  },
  {
    client: 'Samsung SDS Asia Pacific',
    title: '3D sorting automation',
    period: '2025 – 2026',
    domain: 'Robotics · B2B / B2C packing',
    impact: 'Up to 890 orders/day',
    bullets: [
      'Backend logic for 3D sorting and B2B / B2C packing workflows, supporting up to 890 orders a day and 210 an hour.',
      'Integrated the Samsung Cello logistics platform with the Libiao Robotics system for automated sorting.',
      'Real-time dashboards for daily and weekly packing and sorting visibility.',
      'Supported UAT, go-live deployment, technical documentation and project handover.',
    ],
    flow: ['Samsung Cello', 'Backend logic', 'Libiao Robotics', 'Sorted & packed orders'],
    tech: ['C#', 'ASP.NET', 'MS SQL Server', 'REST APIs', 'Libiao Robotics', 'ZPL'],
  },
  {
    client: 'Makino Inc',
    title: 'Warehouse automation',
    period: '2024 – 2025',
    domain: 'Forklift automation · Labeling',
    impact: 'Forklift automation',
    bullets: [
      'Forklift automation integration for receiving, pallet transfer, picking and Zebra label printing.',
      'REST APIs for order processing, from creation through delivery status updates.',
      'SQL Server workflows, Crystal Reports and dashboards for warehouse performance monitoring.',
    ],
    flow: ['Order processing', 'REST APIs', 'Forklift automation', 'Zebra labels'],
    tech: ['C#', 'ASP.NET', 'MS SQL Server', 'REST APIs', 'Crystal Reports', 'Zebra/ZPL'],
  },
  {
    client: 'Storefriendly Self Storage',
    title: 'Robotic storage system',
    period: '2024 – 2025',
    domain: 'Robotics · Windows services',
    impact: '200+ robotic shelves',
    bullets: [
      'Robotic storage management system for 200+ automated shelves across 4 customer terminals.',
      'Hikrobot workflows for concurrent shelf retrieval and return, task-queue management and shelf assignment.',
      'Windows service for automated door control, synchronized with robot arrival and departure events.',
    ],
    flow: ['Customer terminal', 'Task queue', 'Hikrobot', 'Shelf & door control'],
    tech: ['C#', 'ASP.NET', 'MS SQL Server', 'Hikrobot', 'Windows Services', 'REST APIs'],
  },
];

export const moreWork = [
  {
    client: 'Charles & Keith',
    kind: 'WMS · Hikrobot',
    text: 'WMS customizations and backend automation services for ASN receiving, inventory enquiry, shipment confirmation and Hikrobot transfer workflows.',
  },
  {
    client: 'Soon Aik Global',
    kind: 'Warehouse automation',
    text: 'Warehouse automation modules and Crystal Reports for CTU transfer, cycle count, putaway and Hikrobot shelf operations.',
  },
  {
    client: 'Singapore MOE',
    kind: 'Android · API',
    text: 'Android asset-management app with photo capture, Base64 image upload, SQLite storage and API integration.',
  },
  {
    client: 'Hai Sia Seafood',
    kind: 'Android · POS',
    text: 'Android point-of-sale app covering sales, checkout, receipt printing, receiving and transfer, with SQLite and Zebra Printer SDK integration.',
  },
];

export const coreStack = [
  { icon: 'braces', title: 'C# / ASP.NET', text: 'Real-time services, REST APIs and Windows services behind the warehouse and robotics projects above.' },
  { icon: 'database', title: 'MS SQL Server / T-SQL', text: 'Validation logic, asynchronous triggers, workflows and Crystal Reports.' },
  { icon: 'network', title: 'System integration', text: 'Connecting WMS platforms with Samsung Cello, Libiao, Hikrobot, forklift automation and Zebra printing.' },
  { icon: 'cpu', title: 'Hardware integration', text: 'PLCs over Modbus TCP, camera SDKs, robots and label printers.' },
];

export const skillGroups = [
  { category: 'Backend & data', skills: ['C#', 'ASP.NET', 'MS SQL Server', 'T-SQL', 'REST APIs', 'Windows Services', 'Crystal Reports'] },
  { category: 'Hardware & integration', skills: ['Modbus TCP', 'Hikrobot', 'Libiao Robotics', 'HuarayTech MVSDK', 'Zebra / ZPL', 'API integration'] },
  { category: 'Frontend & mobile', skills: ['Angular', 'JavaScript', 'Java (Android)', 'Kotlin', 'SQLite'] },
  { category: 'Tools & concepts', skills: ['SSMS', 'Git', 'Docker', 'Firebase', 'Microservices fundamentals'] },
];

export const education = {
  degree: 'Computer Science',
  school: 'University of Computer Studies (Taungoo)',
  location: 'Taungoo, Myanmar',
  period: '2015 – 2020',
  note: 'Attended through the final year of the 5-year program.',
};

export const award = {
  title: '1st Prize, Myanmar National Cloud & AI Contest',
  year: '2019',
  text: 'Led the team that built a paddy pest detection mobile app using image classification and computer vision.',
};

export const certificates = [
  { title: 'Intermediate SQL Server', issuer: 'Ginger Grant' },
  { title: 'Hierarchical and Recursive Queries in SQL Server', issuer: 'Jasmin Ludolf' },
  { title: 'Android Native Course', issuer: 'Fusion Lab Co. Ltd' },
];

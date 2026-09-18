/**
 * Single source of truth for Salinash Studio.
 * Every claim here is traceable to Ali Siddique's CV — keep it that way.
 */

export const studio = {
  name: 'Salinash Studio',
  principal: 'Ali Siddique',
  role: 'Full-Stack & Product Engineer',
  founded: 2023,
  location: 'London, UK',
  email: 'hi@salinash.studio',
  personalEmail: 'alisiddique10@hotmail.com',
  phone: '+44 7479 865538',
  phoneHref: '+447479865538',
  domain: 'salinash.studio',
  url: 'https://salinash.studio',
  github: 'https://github.com/AliSiddique',
  linkedin: 'https://www.linkedin.com/in/alihsiddique/',
  /** Short bio — used in the intro block and meta descriptions. */
  bio:
    'Salinash Studio is the product engineering practice of Ali Siddique — designing, building and operating production software end to end, from ML inference infrastructure and GPU rendering to iOS apps and real-time web interfaces.',
  /** One-line positioning for the header/hero. */
  positioning:
    'A one-person product studio that ships whole products — architecture, infrastructure, interface, launch and growth.',
} as const;

/** Headline proof points. Each maps directly to a line on the CV. */
export const metrics = [
  { value: '1', label: 'Exit', detail: 'AI product built, scaled and sold via Acquire.com' },
  { value: '£50K+', label: 'Revenue', detail: 'Generated across a six-app iOS portfolio' },
  { value: '20,000+', label: 'Downloads', detail: 'Across shipped iOS applications' },
  { value: '4,500+', label: 'Users', detail: 'Reached across launched products' },
  { value: '6', label: 'iOS apps shipped', detail: 'Architected, launched and maintained solo' },
  { value: '3+ yrs', label: 'Operating', detail: 'Independent practice, founded 2023' },
] as const;

/** Secondary proof — outcomes rather than volume. */
export const outcomes = [
  { value: '+35%', label: 'Retention lift', detail: 'Data-driven UI/UX changes and A/B testing' },
  { value: '−70%', label: 'Deploy time', detail: 'CI/CD pipeline rebuilt on GitHub Actions' },
  { value: '1M+', label: 'Content views', detail: 'Social and content marketing driving installs' },
  { value: 'AWS', label: 'Certified Solutions Architect', detail: 'Associate-level certification' },
] as const;

export type Capability = {
  number: string;
  title: string;
  icon: 'data' | 'interaction' | 'print' | 'identity';
  summary: string;
  items: string[];
};

/** The four disciplines the studio actually sells, drawn from the CV's skills and projects. */
export const capabilities: Capability[] = [
  {
    number: '001',
    title: 'ML & GPU Infrastructure',
    icon: 'data',
    summary:
      'Serving models in production — separating ML compute from the web tier so GPU capacity scales with demand instead of sitting idle.',
    items: [
      'Serverless GPU inference on Modal',
      'Motion-generation model deployment',
      'Elixir / Phoenix orchestration',
      'Queue-backed job pipelines',
    ],
  },
  {
    number: '002',
    title: 'iOS & Real-Time Graphics',
    icon: 'interaction',
    summary:
      'Native apps with custom rendering underneath — six shipped, £50K+ in revenue, 20,000+ downloads.',
    items: [
      'SwiftUI, Combine, SwiftData',
      'Custom Metal GPU pipelines',
      'MVVM architecture at scale',
      'App Store launch & Search Ads',
    ],
  },
  {
    number: '003',
    title: 'Product & Web Engineering',
    icon: 'print',
    summary:
      'TypeScript front ends that stay responsive under load, including 3D and live-processing interfaces.',
    items: [
      'React, Next.js, TanStack Query',
      'Three.js / WebGL rendering',
      'Supabase auth & vector search',
      'Tailwind, shadcn/ui design systems',
    ],
  },
  {
    number: '004',
    title: 'Cloud & Platform Engineering',
    icon: 'identity',
    summary:
      'The infrastructure under the product — provisioned, observable and cheap to deploy to.',
    items: [
      'AWS, Hetzner, Docker, Kubernetes',
      'GitHub Actions CI/CD',
      'Prometheus & Grafana monitoring',
      'Redis caching, RabbitMQ queues',
    ],
  },
];

/** How an engagement runs — studio credibility, not a sales pitch. */
export const process = [
  {
    number: '01',
    title: 'Scope the system',
    body:
      'Start from the architecture, not the screens. Map the data, the compute, the third parties and the failure modes before a line of product code gets written.',
  },
  {
    number: '02',
    title: 'Build the vertical slice',
    body:
      'Ship one path end to end — request intake through to rendered output — so the hard parts are proven early rather than discovered late.',
  },
  {
    number: '03',
    title: 'Harden and instrument',
    body:
      'Tests with Jest and Playwright, monitoring with Prometheus and Grafana, and a CI/CD pipeline that makes deploying boring.',
  },
  {
    number: '04',
    title: 'Launch and iterate',
    body:
      'Get it in front of users, then move the numbers — the retention, acquisition and content work that took past products to 4,000 users and an exit.',
  },
];

export type StackGroup = { label: string; items: string[] };

/** Verbatim from the CV's technical skills section. */
export const stack: StackGroup[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Swift', 'Python', 'Elixir', 'Go', 'SQL', 'Java', 'C++'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Redux', 'TanStack Query', 'Tailwind', 'shadcn/ui', 'Three.js', 'Vite'],
  },
  {
    label: 'iOS & Graphics',
    items: ['SwiftUI', 'Metal', 'Combine', 'SwiftData', 'MVVM', 'Firebase'],
  },
  {
    label: 'Backend & ML Infra',
    items: ['Phoenix', 'Supabase', 'Postgres', 'Vector search', 'Modal serverless GPUs', 'Redis', 'RabbitMQ', 'OAuth2'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'Hetzner', 'Docker', 'Kubernetes', 'GitHub Actions', 'Prometheus', 'Grafana', 'Jest', 'Playwright'],
  },
];

export type Project = {
  slug: string;
  number: string;
  title: string;
  /** Short descriptor shown under the title on a case study. */
  subtitle: string;
  type: string;
  context: string;
  date: string;
  role: string;
  status: string;
  visual: VisualVariant;
  /** Meta description + card blurb. */
  summary: string;
  /** Large pull-quote headline at the top of the case study. */
  headline: string;
  overview: string[];
  challenge: string[];
  approach: { title: string; body: string }[];
  results: { value: string; label: string }[];
  deliverables: string[];
  stack: string[];
  featured: boolean;
};

export type VisualVariant =
  | 'motion'
  | 'imaging'
  | 'geometry'
  | 'landscape'
  | 'assessment'
  | 'portfolio'
  | 'audio'
  | 'platform';

export const projects: Project[] = [
  {
    slug: 'npcmotion',
    number: '001',
    title: 'NPCMotion',
    subtitle: 'AI motion generation for Roblox',
    type: 'ML Infrastructure',
    context: 'Salinash Studio',
    date: '2025 — Present',
    role: 'Architecture, ML Infra, Full-Stack',
    status: 'In development',
    visual: 'motion',
    summary:
      'An end-to-end pipeline that turns text and video into rig-ready animations for Roblox characters, served by motion-generation models running on serverless GPUs.',
    headline:
      'Text and video in, rig-ready animation out — with the GPU tier scaling independently of the web app.',
    overview: [
      'NPCMotion turns a text prompt or a reference video into an animation that drops straight onto Roblox’s R15 character rig. The whole path is owned in-house: request intake, model inference, retargeting, and rig-ready output.',
      'The hard constraint is economics. Motion-generation models need GPUs; a web app does not. Putting both on the same machine means paying for idle accelerators, so the architecture splits them from the start.',
    ],
    challenge: [
      'Motion models are expensive to keep warm and bursty in demand. A naive deployment either burns money on idle GPU time or leaves users queueing behind a single worker.',
      'Generated motion also has to land on a specific target — Roblox’s R15 skeleton — which means raw model output is only ever the middle of the pipeline, not the end of it.',
    ],
    approach: [
      {
        title: 'Serverless GPU inference',
        body:
          'The HY-Motion and Kimodo motion-generation models are deployed as serverless GPU inference on Modal. ML compute is separated from the web tier entirely, so GPU capacity scales with demand rather than with traffic to the marketing site.',
      },
      {
        title: 'Elixir orchestration layer',
        body:
          'A Phoenix/Elixir backend brokers generation requests between the web app and the GPU workers — the BEAM’s concurrency model fits a workload that is mostly waiting on long-running jobs.',
      },
      {
        title: 'Rig-aware output pipeline',
        body:
          'Model output is processed into animation that targets Roblox’s R15 rig, so what users download is usable in-engine instead of a generic motion file they have to retarget themselves.',
      },
      {
        title: 'Frontend and identity',
        body:
          'A Next.js front end built with shadcn/ui and Tailwind, deployed on Hetzner, with multi-provider OAuth across Discord, Google and Roblox — the three accounts this audience already has.',
      },
    ],
    results: [
      { value: '2', label: 'Motion models in production' },
      { value: '3', label: 'OAuth providers integrated' },
      { value: 'R15', label: 'Roblox rig supported end to end' },
    ],
    deliverables: [
      'ML inference architecture',
      'Phoenix/Elixir orchestration API',
      'Next.js application',
      'Multi-provider OAuth',
      'Hetzner deployment',
    ],
    stack: ['Next.js', 'Elixir', 'Phoenix', 'Python', 'Modal', 'shadcn/ui', 'Tailwind', 'Hetzner', 'OAuth2'],
    featured: true,
  },
  {
    slug: 'dicom-viewer-pro',
    number: '002',
    title: 'DICOM Viewer Pro',
    subtitle: 'iOS medical imaging',
    type: 'iOS & Graphics',
    context: 'Salinash Studio',
    date: '2024',
    role: 'Engineering, Rendering, Growth',
    status: 'Shipped — App Store',
    visual: 'imaging',
    summary:
      'A native iOS viewer that parses DICOM medical imaging files and renders scan data through a custom GPU pipeline built on Metal.',
    headline:
      'Medical scan data, parsed on device and rendered through a hand-built Metal pipeline.',
    overview: [
      'DICOM Viewer Pro reads the file format hospitals actually export — DICOM — and renders the scan data it contains on an iPhone or iPad, with an interface built for moving through an image series rather than looking at a single frame.',
      'Rendering runs on a custom GPU pipeline written against Metal, because medical imaging data is too large and too precision-sensitive to push through a general-purpose image view.',
    ],
    challenge: [
      'DICOM is a dense, decades-old format carrying both pixel data and clinical metadata. Parsing it correctly is a prerequisite before anything can be drawn at all.',
      'Once parsed, a scan series is a stack of high-bit-depth images. Scrubbing through it has to stay smooth on mobile hardware, which rules out naive per-frame CPU conversion.',
    ],
    approach: [
      {
        title: 'Native DICOM parsing',
        body:
          'A Swift parser reads DICOM files directly, extracting the image data needed for display rather than depending on a server round trip.',
      },
      {
        title: 'Custom Metal render pipeline',
        body:
          'Scan data is rendered through a GPU pipeline built on Metal, keeping display of high-bit-depth imaging responsive on device.',
      },
      {
        title: 'Series-first interface',
        body:
          'The SwiftUI interface is designed around navigating an image series — moving through slices is the primary interaction, not an afterthought.',
      },
      {
        title: 'Paid acquisition',
        body:
          'Growth was driven through Apple Search Ads campaigns, targeting the specific professional intent that brings people looking for a DICOM viewer.',
      },
    ],
    results: [
      { value: 'Metal', label: 'Custom GPU render pipeline' },
      { value: 'On-device', label: 'DICOM parsing, no server round trip' },
      { value: 'ASA', label: 'Apple Search Ads acquisition' },
    ],
    deliverables: [
      'DICOM file parser',
      'Metal rendering pipeline',
      'SwiftUI series navigation',
      'App Store listing & assets',
      'Search Ads campaign setup',
    ],
    stack: ['Swift', 'SwiftUI', 'Metal', 'Apple Search Ads'],
    featured: true,
  },
  {
    slug: 'convertpoly',
    number: '003',
    title: 'ConvertPoly',
    subtitle: '3D model viewer, converter and renderer',
    type: 'Web & Graphics',
    context: 'Salinash Studio',
    date: '2024',
    role: 'Engineering, Geometry Processing',
    status: 'Shipped — Live',
    visual: 'geometry',
    summary:
      'A browser-based 3D tool that parses and converts models between OBJ, FBX, glTF and STL, and renders them interactively in real time.',
    headline:
      'Four interchange formats, converted and rendered in the browser — no install, no upload-and-wait.',
    overview: [
      'ConvertPoly is a browser-based tool for 3D model files: open one, look at it properly, and convert it to the format you actually need. It handles OBJ, FBX, glTF and STL — the four formats that account for most real interchange work.',
      'Everything renders interactively in real time through Three.js and WebGL, so inspecting a model is part of the conversion step rather than something you do afterwards in another application.',
    ],
    challenge: [
      'Each 3D interchange format encodes geometry, materials and scene structure differently. Converting between them is a geometry-processing problem, not a file rename.',
      'Doing it in a browser adds a second constraint: parsing and rendering have to stay responsive in a single-threaded environment with a hard memory ceiling.',
    ],
    approach: [
      {
        title: 'Format-agnostic parsing',
        body:
          'Models are parsed into a common internal representation, which is what makes conversion between OBJ, FBX, glTF and STL a matter of reading in and writing out rather than N×N special cases.',
      },
      {
        title: 'Real-time WebGL rendering',
        body:
          'Three.js and WebGL drive interactive rendering so a model can be orbited and inspected the moment it loads.',
      },
      {
        title: 'Client-side by default',
        body:
          'Processing in the browser means no upload queue and no server bill that scales with file size — the user’s own hardware does the work.',
      },
    ],
    results: [
      { value: '4', label: 'Interchange formats supported' },
      { value: 'Real-time', label: 'Interactive WebGL rendering' },
      { value: '0', label: 'Install steps for the user' },
    ],
    deliverables: [
      'Multi-format 3D parser',
      'Conversion engine',
      'Three.js / WebGL viewer',
      'Browser-based UI',
    ],
    stack: ['TypeScript', 'Three.js', 'WebGL', 'Vite'],
    featured: true,
  },
  {
    slug: 'ai-landscape-designer',
    number: '004',
    title: 'AI Landscape Designer',
    subtitle: 'Built, scaled and sold via Acquire.com',
    type: 'AI Product — Acquired',
    context: 'Salinash Studio',
    date: '2023',
    role: 'Founder, Engineering, Growth, Exit',
    status: 'Acquired',
    visual: 'landscape',
    summary:
      'An AI-powered landscape design product taken from first commit to 4,000 users and sold through Acquire.com — full lifecycle, including the handover.',
    headline:
      'Built it, grew it to 4,000 users, and ran the sale through to handover.',
    overview: [
      'AI Landscape Designer was an AI-powered product for designing outdoor spaces. It went from build to launch to 4,000 users, and then to an acquisition through Acquire.com.',
      'The growth came from Reddit community marketing and SEO rather than paid acquisition — finding the people already discussing the problem and being useful in those threads.',
    ],
    challenge: [
      'A new AI product has no distribution. Paid acquisition against an unproven retention curve is the fastest way to spend money on nothing.',
      'Selling a software business is its own project: diligence, transfer of infrastructure and accounts, and a handover the acquirer can actually operate.',
    ],
    approach: [
      {
        title: 'Community-first distribution',
        body:
          'Growth ran through Reddit communities where the problem was already being discussed, compounded by SEO — channels that keep returning traffic after the work stops.',
      },
      {
        title: 'Owned the full lifecycle',
        body:
          'Build, launch, growth and exit were all in-house. No handoffs meant the product could be changed the same week a growth experiment said it should be.',
      },
      {
        title: 'Ran the sale and handover',
        body:
          'The sale was run through Acquire.com, including diligence and a handover that left the acquirer able to operate the product independently.',
      },
    ],
    results: [
      { value: '4,000', label: 'Users reached' },
      { value: 'Acquired', label: 'Sold via Acquire.com' },
      { value: 'Build → exit', label: 'Full lifecycle owned solo' },
    ],
    deliverables: [
      'AI product build & launch',
      'SEO and community growth',
      'Acquisition diligence',
      'Infrastructure handover',
    ],
    stack: ['TypeScript', 'React', 'AI/ML APIs', 'SEO', 'Acquire.com'],
    featured: false,
  },
  {
    slug: 'ios-app-portfolio',
    number: '005',
    title: 'iOS App Portfolio',
    subtitle: 'Six apps, £50K+ revenue',
    type: 'iOS Development',
    context: 'Salinash Studio',
    date: '2023 — Present',
    role: 'Architecture, Engineering, Growth',
    status: 'Shipped — App Store',
    visual: 'portfolio',
    summary:
      'Six SwiftUI applications architected, launched and grown solo — 20,000+ downloads, £50K+ in revenue and a 35% retention improvement.',
    headline:
      'Six apps, 20,000+ downloads and £50K+ in revenue — architecture through to acquisition, run by one engineer.',
    overview: [
      'A portfolio of six iOS applications, each architected with MVVM and Combine, with offline persistence through SwiftData, Firebase push notifications and OAuth2 sign-in.',
      'Together they have passed 20,000 downloads and generated over £50,000 in revenue — shipped, marketed and maintained without a team.',
    ],
    challenge: [
      'Running six apps solo means the marginal cost of each new one has to stay low. Six bespoke architectures would have been unmaintainable by the second year.',
      'Downloads on their own do not pay. Revenue depends on users coming back, which makes retention the metric that matters rather than install count.',
    ],
    approach: [
      {
        title: 'One architecture, reused',
        body:
          'MVVM with Combine across the portfolio, so patterns — and fixes — transfer between apps instead of being re-solved each time.',
      },
      {
        title: 'Offline-first persistence',
        body:
          'SwiftData handles local persistence so apps stay usable without a connection, with Firebase push notifications and OAuth2 covering re-engagement and sign-in.',
      },
      {
        title: 'Retention as the target metric',
        body:
          'Data-driven UI/UX changes validated through A/B testing improved retention by 35% — the change that moved revenue more than any acquisition spend.',
      },
      {
        title: 'Content-led acquisition',
        body:
          'Social and content marketing drove more than 1M views, feeding installs without a paid acquisition budget.',
      },
    ],
    results: [
      { value: '£50K+', label: 'Revenue generated' },
      { value: '20,000+', label: 'Downloads' },
      { value: '+35%', label: 'Retention improvement' },
      { value: '1M+', label: 'Marketing views' },
    ],
    deliverables: [
      'Six shipped iOS apps',
      'Shared MVVM architecture',
      'SwiftData offline layer',
      'Firebase push & OAuth2',
      'A/B testing programme',
    ],
    stack: ['Swift', 'SwiftUI', 'Combine', 'SwiftData', 'MVVM', 'Firebase', 'OAuth2'],
    featured: true,
  },
  {
    slug: 'gametestprep',
    number: '006',
    title: 'GameTestPrep',
    subtitle: 'Practice platform for game-based assessments',
    type: 'Web Product',
    context: 'Salinash Studio',
    date: '2024',
    role: 'Product, Engineering',
    status: 'Shipped — Live',
    visual: 'assessment',
    summary:
      'A practice platform for the game-based hiring assessments used by employers — HireVue and pymetrics style — grown to 500 users.',
    headline:
      'Practice for the assessments candidates cannot otherwise rehearse — 500 users and counting.',
    overview: [
      'Employers increasingly screen candidates with game-based assessments — the HireVue and pymetrics style tests that measure reaction, risk and pattern recognition. Candidates get no practice run.',
      'GameTestPrep provides one. It has grown to 500 users, with authentication handled through Supabase including Sign in with Apple.',
    ],
    challenge: [
      'The assessments being practised for are timing-sensitive and interactive, so the practice versions have to behave consistently rather than approximately.',
      'The audience is job candidates — a group that will abandon a sign-up flow instantly. Authentication friction is a direct conversion cost.',
    ],
    approach: [
      {
        title: 'Faithful assessment mechanics',
        body:
          'Practice exercises mirror the mechanics of the employer assessments they prepare for, so the rehearsal transfers to the real thing.',
      },
      {
        title: 'Low-friction authentication',
        body:
          'Supabase auth with Sign in with Apple removes the password step entirely for the platform most of this audience is already signed into.',
      },
      {
        title: 'Managed backend',
        body:
          'Supabase covers Postgres, auth and access control, keeping the operational surface small enough for one engineer to run alongside other products.',
      },
    ],
    results: [
      { value: '500', label: 'Users on the platform' },
      { value: 'Sign in with Apple', label: 'Frictionless auth' },
      { value: '2', label: 'Assessment styles covered' },
    ],
    deliverables: [
      'Assessment practice engine',
      'Supabase auth & database',
      'Sign in with Apple',
      'Web application',
    ],
    stack: ['TypeScript', 'React', 'Supabase', 'Postgres'],
    featured: false,
  },
  {
    slug: 'ai-audio-transcriber',
    number: '007',
    title: 'AI Audio Transcriber',
    subtitle: 'Real-time transcription with semantic search',
    type: 'AI Product',
    context: 'Salinash Studio',
    date: 'Feb 2025',
    role: 'Engineering',
    status: 'Shipped',
    visual: 'audio',
    summary:
      'A real-time transcription interface with embedding-based semantic search across transcripts and AI-generated quizzes, tuned to stay smooth during live processing.',
    headline:
      'Transcribe live, then search the meaning rather than the words.',
    overview: [
      'A transcription tool that does two things keyword search cannot: it finds passages by meaning using embedding-based semantic search, and it generates quizzes from what was said.',
      'The engineering emphasis was on the interface staying smooth while transcription runs — live processing is exactly when a UI is most likely to stutter and most likely to be watched.',
    ],
    challenge: [
      'Live transcription produces a continuous stream of updates. Naively re-rendering on each one degrades the interface at precisely the moment the user is watching it.',
      'Keyword search over a transcript misses paraphrase. Finding "the part about pricing" requires searching semantics, not strings.',
    ],
    approach: [
      {
        title: 'Vector search over transcripts',
        body:
          'Transcript segments are embedded and stored in Supabase vector search, so queries match on meaning and surface the right passage even when the wording differs.',
      },
      {
        title: 'UX tuned for live processing',
        body:
          'The React interface is specifically tuned for smooth behaviour while transcription is streaming in, rather than only when processing has finished.',
      },
      {
        title: 'Generated comprehension quizzes',
        body:
          'AI-generated quizzes turn a passive transcript into something that can be studied from — useful for lectures, interviews and long recordings.',
      },
    ],
    results: [
      { value: 'Real-time', label: 'Live transcription interface' },
      { value: 'Semantic', label: 'Embedding-based transcript search' },
      { value: 'Auto', label: 'AI-generated quizzes' },
    ],
    deliverables: [
      'Real-time transcription UI',
      'Embedding & vector search',
      'Quiz generation',
      'Supabase backend',
    ],
    stack: ['React', 'TypeScript', 'Supabase', 'Vector search', 'OpenAI'],
    featured: false,
  },
  {
    slug: 'inventory-cloud-platform',
    number: '008',
    title: 'Inventory Cloud Platform',
    subtitle: 'Go microservices on Kubernetes',
    type: 'Cloud Engineering',
    context: 'Salinash Studio',
    date: 'Feb 2024',
    role: 'Platform Engineering, DevOps',
    status: 'Shipped',
    visual: 'platform',
    summary:
      'A Go microservice platform on Kubernetes with Redis caching, RabbitMQ queues, Prometheus/Grafana monitoring and a CI/CD pipeline that cut deploy time by 70%.',
    headline:
      'Microservices, queues and monitoring — with a pipeline that cut deploy time by 70%.',
    overview: [
      'An inventory platform built as Go microservices running on Kubernetes, backed by Redis for caching and RabbitMQ for asynchronous work.',
      'The operational layer got equal weight: Prometheus and Grafana for monitoring, and a GitHub Actions CI/CD pipeline that reduced deploy time by 70%.',
    ],
    challenge: [
      'Splitting a system into services multiplies the number of things that can fail silently. Without monitoring in place from the start, a distributed system is harder to operate than the monolith it replaced.',
      'Slow deploys discourage small changes, which is how large risky ones accumulate.',
    ],
    approach: [
      {
        title: 'Go services on Kubernetes',
        body:
          'Services are written in Go and orchestrated on Kubernetes, so each scales on its own resource profile rather than the whole system scaling together.',
      },
      {
        title: 'Caching and async queues',
        body:
          'Redis absorbs read-heavy traffic and RabbitMQ moves slow work off the request path, keeping the synchronous surface fast.',
      },
      {
        title: 'Monitoring as a first-class concern',
        body:
          'Prometheus metrics and Grafana dashboards were built alongside the services, not retrofitted after the first outage.',
      },
      {
        title: 'Fast, boring deploys',
        body:
          'A GitHub Actions CI/CD pipeline cut deploy time by 70%, making small and frequent releases the path of least resistance.',
      },
    ],
    results: [
      { value: '−70%', label: 'Deploy time reduction' },
      { value: 'K8s', label: 'Orchestrated microservices' },
      { value: 'Full', label: 'Prometheus + Grafana observability' },
    ],
    deliverables: [
      'Go microservices',
      'Kubernetes orchestration',
      'Redis & RabbitMQ layer',
      'Prometheus/Grafana monitoring',
      'GitHub Actions CI/CD',
    ],
    stack: ['Go', 'Kubernetes', 'Docker', 'AWS', 'Redis', 'RabbitMQ', 'Prometheus', 'Grafana', 'GitHub Actions'],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const moreProjects = projects.filter((p) => !p.featured);

/** Next-project link, wrapping around the full list. */
export function nextProject(slug: string): { title: string; href: string } {
  const i = projects.findIndex((p) => p.slug === slug);
  const next = projects[(i + 1) % projects.length];
  return { title: next.title, href: `/work/${next.slug}` };
}

export type TimelineEntry = {
  period: string;
  entries: { company: string; role: string; detail?: string }[];
};

/** Mirrors the experience section of the CV. */
export const timeline: TimelineEntry[] = [
  {
    period: '2023 — now',
    entries: [
      {
        company: 'Salinash Studio',
        role: 'Founder — Independent Software Engineer',
        detail:
          'Sole engineer across web, iOS and ML products, owning architecture, infrastructure, deployment and growth.',
      },
    ],
  },
  {
    period: '2025 — now',
    entries: [
      {
        company: 'NPCMotion',
        role: 'AI motion generation for Roblox',
        detail: 'Serverless GPU inference on Modal, orchestrated by an Elixir/Phoenix backend.',
      },
    ],
  },
  {
    period: '2024',
    entries: [
      {
        company: 'DICOM Viewer Pro',
        role: 'iOS medical imaging',
        detail: 'Custom Metal GPU rendering pipeline for DICOM scan data.',
      },
      {
        company: 'ConvertPoly',
        role: '3D viewer, converter & renderer',
        detail: 'OBJ, FBX, glTF and STL conversion with real-time Three.js rendering.',
      },
      {
        company: 'Inventory Cloud Platform',
        role: 'Go microservices on Kubernetes',
        detail: 'CI/CD pipeline cut deploy time by 70%.',
      },
    ],
  },
  {
    period: '2023',
    entries: [
      {
        company: 'AI Landscape Designer',
        role: 'Built, scaled & sold via Acquire.com',
        detail: 'Grew to 4,000 users through Reddit community marketing and SEO, then ran the exit.',
      },
    ],
  },
  {
    period: '2022 — now',
    entries: [
      {
        company: 'Computer Science Tutor',
        role: 'Python, algorithms & system design',
        detail: 'Tutored 15+ students, averaging a 2-grade improvement; 8 achieved A/A*.',
      },
    ],
  },
  {
    period: '2021 — 2024',
    entries: [
      {
        company: 'City, University of London',
        role: 'BSc Computer Science (2:1)',
        detail: 'CS Best Student Prize, Years 1 & 2. Cloud Computing, Computer Vision, Networks.',
      },
    ],
  },
];

export const credentials = [
  {
    label: 'Certification',
    title: 'AWS Certified Solutions Architect',
    detail: 'Cloud architecture, and the practice behind the AWS, Docker and Kubernetes work.',
  },
  {
    label: 'Education',
    title: 'BSc Computer Science (2:1)',
    detail: 'City, University of London — 2021 to 2024.',
  },
  {
    label: 'Recognition',
    title: 'CS Best Student Prize',
    detail: 'Awarded in Years 1 and 2 of the degree.',
  },
  {
    label: 'Coursework',
    title: 'Cloud Computing · Computer Vision · Networks',
    detail: 'The foundation under the GPU rendering and infrastructure work.',
  },
];

/** Engagement models offered by the studio. */
export const services = [
  {
    number: '01',
    title: 'Product build',
    tagline: 'Zero to launched',
    body:
      'A complete product taken from architecture to App Store or production URL. This is what the studio does most: NPCMotion, ConvertPoly and six shipped iOS apps all started here.',
    includes: [
      'System & data architecture',
      'Full-stack or native implementation',
      'Infrastructure and deployment',
      'Launch, analytics and iteration',
    ],
  },
  {
    number: '02',
    title: 'ML & GPU infrastructure',
    tagline: 'Get the model into production',
    body:
      'Taking a model that works in a notebook and putting it behind a real product — serverless GPU inference, job orchestration, and a cost profile that survives contact with traffic.',
    includes: [
      'Serverless GPU deployment (Modal)',
      'Inference pipeline design',
      'Queue-backed job orchestration',
      'Scaling and cost separation',
    ],
  },
  {
    number: '03',
    title: 'iOS & graphics engineering',
    tagline: 'Native apps with real rendering',
    body:
      'SwiftUI applications, including the ones that need a custom Metal pipeline underneath because a standard image view will not do the job.',
    includes: [
      'SwiftUI app architecture (MVVM)',
      'Custom Metal render pipelines',
      'Offline persistence with SwiftData',
      'App Store submission & Search Ads',
    ],
  },
  {
    number: '04',
    title: 'Cloud & platform engineering',
    tagline: 'Infrastructure that stays boring',
    body:
      'The layer under the product: containerised services, observability from day one, and a deploy pipeline fast enough that shipping small changes is the default.',
    includes: [
      'AWS / Hetzner infrastructure',
      'Docker & Kubernetes',
      'Prometheus & Grafana monitoring',
      'GitHub Actions CI/CD',
    ],
  },
];

/**
 * ------------------------------------------------------------------
 *  EDIT THIS FILE to update anything on your portfolio.
 *  All content below comes from your resume. Fields left as '' are
 *  placeholders: the matching button/icon is hidden or disabled until
 *  you fill them in.
 * ------------------------------------------------------------------
 */

// Helper for images placed in /public (e.g. public/screenshots/quickbite.png)
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const personal = {
  name: 'Zeba Praveen',
  title: 'MCA Student | Aspiring Full Stack Developer',
  tagline:
    'Passionate about building user-friendly web applications, solving problems through technology, and continuously learning new skills.',
  email: 'zebapraveen256@gmail.com',
  linkedin: 'https://www.linkedin.com/in/zebapraveen',
  github: 'https://github.com/zebashaikh21', // TODO: add your GitHub profile, e.g. 'https://github.com/your-username'
  location: 'Vaishali, Bihar, India',
  resumeFile: asset('Zeba_Praveen_Resume.pdf'), // file lives in /public
  resumeDownloadName: 'Zeba_Praveen_Resume.pdf',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const roles = ['Full Stack Developer', 'Java Programmer', 'Web Developer']

export const about = {
  paragraphs: [
    "I'm a motivated, detail-oriented MCA student at Technocrats Institute of Technology (RGPV), Bhopal. I came to the MCA after completing my BCA at Laxmi Narayan College, BRABU University, where I finished with 79.68%.",
    'I enjoy software development and emerging technologies, with a growing interest in full-stack web development, artificial intelligence and basic cyber security concepts. I learn best by building, so I turn what I study into practical projects like a food ordering platform and a cloth shopping management system.',
    'I bring strong problem-solving, communication and teamwork skills to everything I work on. My goal is to grow into a successful Full Stack Developer who builds reliable, useful products in a professional team.',
  ],
  highlights: [
    { icon: 'GraduationCap', label: 'Currently pursuing', value: 'MCA, 2025 – Present' },
    { icon: 'Award', label: 'Student of the Year', value: '2024' },
    { icon: 'Code2', label: 'Practice', value: 'CodeChef 100+ and LeetCode 100+' },
    { icon: 'Briefcase', label: 'Internship', value: 'Java Development at CodeAlpha' },
  ],
}

export const skillGroups = [
  {
    title: 'Programming Languages',
    icon: 'Terminal',
    skills: ['Java', 'C', 'C++', 'Python', 'PHP'],
  },
  {
    title: 'Frontend / Backend',
    icon: 'Globe',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Node.js',
      'Express.js',
      'REST APIs',
      'JWT Authentication',
      'Responsive Web Design',
    ],
  },
  {
    title: 'AI / Integration',
    icon: 'Sparkles',
    skills: ['OpenAI API', 'Prompt Engineering', 'API Integration'],
  },
  {
    title: 'Databases',
    icon: 'Database',
    skills: ['MySQL', 'PL/SQL', 'MongoDB'],
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Cursor AI'],
  },
  {
    title: 'Core Subjects',
    icon: 'BookOpen',
    skills: [
      'Object Oriented Programming',
      'Data Structures and Algorithms',
      'Computer Networks',
      'Operating Systems',
    ],
  },
]

export const softSkills = [
  'Communication and teamwork',
  'Problem solving',
  'Quick learner',
  'Time management',
  'Adaptability',
]

/**
 * Projects
 *  - repo / live: add real URLs when ready. Empty = button shown as disabled.
 *  - image: optional screenshot, e.g. asset('screenshots/quickbite.png').
 *    Without one, a designed cover is shown (no broken images).
 */
export const projects = [
  {
    id: 'quick-bite',
    title: 'Quick Bite – Smart Food Ordering Platform',
    status: 'Ongoing',
    icon: 'UtensilsCrossed',
    gradient: 'from-violet-600/60 via-fuchsia-500/30 to-blue-600/50',
    image: '/screenshots/quickbite.png',
    description:
      'A responsive food ordering web application inspired by Swiggy and Zomato, with AI-powered recommendations and a chatbot.',
    tech: ['HTML', 'CSS', 'JavaScript', 'SQL', 'AI Integration'],
    features: [
      'Responsive frontend, UI design and database integration using HTML, CSS, JavaScript and SQL',
      'AI-powered recommendation engine that suggests dishes based on user order history and trending items',
      'AI chatbot for real-time order tracking, query resolution and personalized food suggestions',
      'Spice level customization and a monthly tiffin subscription option',
    ],
    repo: '', // TODO: GitHub repository URL
    live: '', // TODO: live demo URL (optional)
  },
  {
    id: 'cloth-shopping',
    title: 'Online Cloth Shopping Management System',
    status: 'Completed',
    icon: 'Shirt',
    gradient: 'from-blue-600/60 via-indigo-500/30 to-violet-600/50',
    image: '/screenshots/onlineclothsshopping.png',
    description:
      'A web-based cloth management system for managing products and inventory records efficiently, with AI-assisted search and forecasting.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'AI'],
    features: [
      'Responsive interfaces with a MySQL database for product and inventory data management',
      'AI-based demand forecasting to predict stock requirements and reduce overstocking',
      'AI smart search with autosuggestions',
      'Image-based cloth similarity matching for a better user experience',
    ],
    repo: '',
    live: '',
  },
  {
    id: 'student-feedback',
    title: 'Student Feedback and Faculty Evaluation System',
    status: 'MCA college project',
    icon: 'ClipboardCheck',
    gradient: 'from-indigo-600/60 via-sky-500/30 to-violet-600/50',
    image: '/screenshots/studentfeedbacksystem.png',
    description:
      'A role-based web application where students submit feedback and faculty review it anonymously, managed by an administrator.',
    tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Three user roles (admin, student, faculty) with role-based dashboards',
      'Login with sessions and role-based redirects',
      'Students submit feedback; faculty see it anonymously',
      'Built with PHP (PDO) and MySQL, running on XAMPP',
    ],
    repo: '',
    live: '',
  },
]

export const experience = [
  {
    organization: 'CodeAlpha',
    role: 'Java Programming Intern',
    type: 'Internship',
    duration: 'May 2026 – June 2026',
    summary: 'Ongoing internship in Java development.',
    // TODO: add 2-4 short points about what you built or learned, e.g.
    // 'Built a ... using Java'. They appear automatically once added.
    points: ['Developed and implemented Java-based applications, improving core programming and problem-solving skills.',
  'Created console and GUI-based mini-projects to understand object-oriented concepts.',
  'Learned about software development lifecycles and debugging techniques in Java.'],
  },
  {
    organization: 'Deloitte',
    role: 'Technology Job Simulation',
    type: 'Virtual job simulation (not employment)',
    duration: 'June 2025 – March 2026',
    summary:
      'Completed a technology job simulation and earned a certificate of completion.',
      
    points: ['Completed a virtual job simulation focusing on technology consulting and system design.',
  'Analyzed business requirements to propose effective technical architectures.',
  'Gained practical insights into cloud computing concepts and modern enterprise technology stacks.'],
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Technocrats Institute of Technology, RGPV University',
    place: 'Bhopal, Madhya Pradesh',
    years: '2025 – Present',
    result: 'Pursuing',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Laxmi Narayan College, BRABU University Muzaffarpur',
    place: 'Bhagwanpur, Bihar',
    years: '2022 – 2025',
    result: '79.68%',
  },
  {
    degree: 'Intermediate of Science',
    institution: 'Laxmi Narayan College, BSEB (State Board) Patna',
    place: 'Bhagwanpur, Vaishali, Bihar',
    years: '2020 – 2022',
    result: '69.2%',
  },
  {
    degree: 'High School',
    institution: 'G.A High School, BSEB (State Board) Patna',
    place: 'Prataptand, Vaishali, Bihar',
    years: '2019 – 2020',
    result: '62.2%',
  },
]

export const certifications = [
  {
    title: 'Java Development Internship',
    issuer: 'CodeAlpha',
    date: 'May 2026 – Present',
    icon: 'Coffee',
    note: 'In progress',
  },
  {
    title: 'Artificial Intelligence Fundamentals & Prompt Engineering',
    issuer: '7-day workshop',
    date: 'January 2026',
    icon: 'Sparkles',
    note: 'Workshop',
  },
  {
    title: 'Technology Job Simulation',
    issuer: 'Deloitte',
    date: 'June 2025 – March 2026',
    icon: 'Building2',
    note: 'Certificate',
  },
  {
    title: 'TCS iON Career Edge – Young Professional',
    issuer: 'TCS iON',
    date: 'June 2025 – July 2025',
    icon: 'GraduationCap',
    note: 'Course',
  },
]

export const achievements = [
  { title: 'Student of the Year 2024', icon: 'Trophy' },
  { title: 'CodeChef 100+', icon: 'Code2' },
  { title: 'LeetCode 100+', icon: 'Code2' },
]

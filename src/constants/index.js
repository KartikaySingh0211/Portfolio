import {
	mobile,
	// backend,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	nextjs,
	tailwind,
	nodejs,
	mongodb,
	git,
	// figma,
	// docker,
	// meta,
	// starbucks,
	// tesla,
	// shopify,
	vitrendz,
	apple,
	signature,
	threejs,
	nextPort,
	// wild,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "experience",
		title: "Experience",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Developer",
		icon: mobile,
	},
	{
		title: "NextJS Developer",
		icon: nextjs,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Next JS",
		icon: nextjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	// {
	// 	name: "figma",
	// 	icon: figma,
	// },
	// {
	// 	name: "docker",
	// 	icon: docker,
	// },
];

const experiences = [
	{
		title: "NextJS Developer",
		company_name: "VITrendz",
		icon: vitrendz,
		iconBg: "#383E56",
		date: "November 2024 - February 2025",
		points: [
			"Developed the official VITrendz Homepage using Next.js, with responsive design, SEO optimization, and clean code architecture.",
			"Built the initial UI and routing for the Hostel Review Platform using Next.js, focused on dynamic content and user interactions.",
			"Contributed core components to the FFCS Planner in React.js, enhancing UX for course selection and modular functionality.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Technical Head",
		company_name: "VITrendz",
		icon: vitrendz,
		iconBg: "#271E56",
		date: "February 2025 - Present",
		points: [
			"Leading a team of frontend developers to scale and enhance the VITrendz ecosystem, including the Homepage, Hostel Review Platform, and FFCS Planner.",
			"Overseeing architecture decisions, code reviews, and feature planning while mentoring junior developers and ensuring timely deliveries.",
			"Initiating and managing new projects, aligning technical direction with product goals and student needs.",
		],
	},
];

const projects = [
	{
		name: "Apple UI Clone",
		description:
			"UI clone of Apple's website built using React.js, Tailwind CSS, THREEjs and GSAP.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "threejs",
				color: "green-text-gradient",
			},
			{
				name: "gsap",
				color: "orange-text-gradient",
			},
		],
		image: apple,
		source_code_link:
			"https://github.com/KartikaySingh0211/AppleWebsiteUI_clone",
		website_link: "https://apple-website-ui-clone-sigma.vercel.app/",
	},
	{
		name: "NextJS portfolio website",
		description:
			"Portfolio website built using NextJS, Tailwind CSS, Typescript and AceternityUI.",
		tags: [
			{
				name: "nextJS",
				color: "green-text-gradient",
			},
			{
				name: "tailwindcss",
				color: "blue-text-gradient",
			},
			{
				name: "typescript",
				color: "pink-text-gradient",
			},
			{
				name: "aceternityUI",
				color: "orange-text-gradient",
			},
		],
		image: nextPort,
		source_code_link: "https://github.com/KartikaySingh0211/nextJS-portfolio",
		website_link: "https://extraordinary-centaur-4feb1f.netlify.app/",
	},
	// {
	// 	name: "The Wild Oasis Website",
	// 	description:
	// 		"An online cabin booking website built using NextJS, Tailwind CSS and Supabase.",
	// 	tags: [
	// 		{
	// 			name: "NextJS",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "Supabase",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "tailwind",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: wild,
	// 	source_code_link: "https://github.com/KartikaySingh0211/the-wild-oasis",
	// },
	{
		name: "Signature Asia's Website",
		description:
			"Made a new landing page for a client along with SEO optimization, reusable components, and responsive design using Next.js, Typescript and Tailwind CSS.",
		tags: [
			{
				name: "nextjs",
				color: "pink-text-gradient",
			},
			{
				name: "typescript",
				color: "blue-text-gradient",
			},
			{
				name: "Tailwindcss",
				color: "green-text-gradient",
			},
		],
		image: signature,
		source_code_link: "https://github.com/KartikaySingh0211/signature_asia",
		website_link: "https://www.signatureasias.com/",
	},
];

export const socialMedia = [
	{
		id: 1,
		img: "/git.svg",
		link: "https://github.com/KartikaySingh0211",
	},
	{
		id: 2,
		img: "/link.svg",
		link: "www.linkedin.com/in/kartikaysingh0211",
	},
];

export { services, technologies, experiences, projects };

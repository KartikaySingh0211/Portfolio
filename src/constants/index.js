import {
	mobile,
	// backend,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	// redux,
	tailwind,
	// nodejs,
	// mongodb,
	git,
	// figma,
	// docker,
	meta,
	starbucks,
	tesla,
	shopify,
	movierating,
	quiz,
	tailwindcss,
	threejs,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
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
	// {
	// 	title: "Backend Developer",
	// 	icon: backend,
	// },
	// {
	// 	title: "Content Creator",
	// 	icon: creator,
	// },
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
	// {
	// 	name: "Redux Toolkit",
	// 	icon: redux,
	// },
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	// {
	// 	name: "Node JS",
	// 	icon: nodejs,
	// },
	// {
	// 	name: "MongoDB",
	// 	icon: mongodb,
	// },
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
		title: "React.js Developer",
		company_name: "Starbucks",
		icon: starbucks,
		iconBg: "#383E56",
		date: "March 2020 - April 2021",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "React Native Developer",
		company_name: "Tesla",
		icon: tesla,
		iconBg: "#E6DEDD",
		date: "Jan 2021 - Feb 2022",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Web Developer",
		company_name: "Shopify",
		icon: shopify,
		iconBg: "#383E56",
		date: "Jan 2022 - Jan 2023",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Full stack Developer",
		company_name: "Meta",
		icon: meta,
		iconBg: "#E6DEDD",
		date: "Jan 2023 - Present",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

const projects = [
	{
		name: "Movie Rating App",
		description:
			"Web-based application that allows users to search for movies, view details about them, and rate them based on their personal preferences.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			// {
			// 	name: "mongodb",
			// 	color: "green-text-gradient",
			// },
			// {
			// 	name: "tailwind",
			// 	color: "pink-text-gradient",
			// },
		],
		image: movierating,
		source_code_link: "https://github.com/KartikaySingh0211/MovieRating",
	},
	{
		name: "React Quiz App",
		description:
			"Web-based quiz application that allows users to take quizzes on thier decided topics and view their scores.",
		tags: [
			{
				name: "react",
				color: "green-text-gradient",
			},
			// {
			// 	name: "restapi",
			// 	color: "green-text-gradient",
			// },
			// {
			// 	name: "scss",
			// 	color: "pink-text-gradient",
			// },
		],
		image: quiz,
		source_code_link: "https://github.com/KartikaySingh0211/React-Quiz",
	},
	{
		name: "Responsive Tailwindcss Website",
		description:
			"Responsive website built using Tailwind CSS that showcases various features of the framework.",
		tags: [
			// {
			// 	name: "nextjs",
			// 	color: "blue-text-gradient",
			// },
			// {
			// 	name: "supabase",
			// 	color: "green-text-gradient",
			// },
			{
				name: "Tailwindcss",
				color: "pink-text-gradient",
			},
		],
		image: tailwindcss,
		source_code_link:
			"https://github.com/KartikaySingh0211/Responsive_Tailwind",
	},
];

export { services, technologies, experiences, projects };

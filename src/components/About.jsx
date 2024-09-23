/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import ServiceCard from "./ServiceCard";

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				Hello! I&apos;m Kartikay, a passionate student pursuing Software
				Engineering at VIT Vellore. I excel as a frontend web developer with
				excellent understanding in languages and technologies like React JS,
				Tailwindcss, Java. I&apos;m currently learning more web technologies
				like Next JS, ThreeJS and MERN stack.
			</motion.p>
			<div className="mt-20 flex flex-wrap gap-10 justify-center">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");

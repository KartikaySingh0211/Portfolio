import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import PropTypes from "prop-types";
import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ exp }) => {
	ExperienceCard.propTypes = {
		exp: PropTypes.shape({
			date: PropTypes.string,
			iconBg: PropTypes.string,
			icon: PropTypes.string,
			company_name: PropTypes.string,
			title: PropTypes.string,
			points: PropTypes.arrayOf(PropTypes.string),
		}).isRequired,
	};

	return (
		<VerticalTimelineElement
			contentStyle={{ background: "#1d1836", color: "#fff" }}
			contentArrowStyle={{ borderRight: "7px solid  #232631" }}
			date={exp.date}
			iconStyle={{ background: exp.iconBg }}
			icon={
				<img
					src={exp.icon}
					alt={exp.company_name}
					className="w-[100%] h-[100%] object-contain"
				/>
			}
		>
			<div>
				<h3 className="text-white text-[24px] font-bold">{exp.title}</h3>
				<p
					className="text-secondary text-[16px] font-semibold"
					style={{ margin: 0 }}
				></p>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{exp.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="text-white-100 text-[14px] pl-1 tracking-wider"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What I have done so far</p>
				<h2 className={styles.sectionHeadText}>Work Experience.</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((exp, index) => (
						<ExperienceCard key={index} exp={exp} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, "work");

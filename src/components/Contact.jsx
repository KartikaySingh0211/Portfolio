import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { socialMedia } from "../constants";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				"service_ejp1l2r",
				"template_n9n3yot",
				{
					from_name: form.name,
					to_name: "Kartikay Singh",
					from_email: form.email,
					to_email: "kartikay.singh.0211@gmail.com",
					message: form.message,
				},
				"CwV6Ym6ezywCOCw2V"
			)
			.then(
				() => {
					setLoading(false);
					alert("Thank you. I will get back to you as soon as possible.");

					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);

					alert("Ahh, something went wrong. Please try again.");
				}
			);
	};

	return (
		<>
			<div
				className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
			>
				<motion.div
					variants={slideIn("left", "tween", 0.2, 1)}
					className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
				>
					<p className={styles.sectionSubText}>Get in touch</p>
					<h3 className={styles.sectionHeadText}>Contact.</h3>

					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="mt-12 flex flex-col gap-8"
					>
						<label className="flex flex-col">
							<span className="text-white font-medium mb-4">Your Name</span>
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								placeholder="What's your name?"
								className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
								required
							/>
						</label>
						<label className="flex flex-col">
							<span className="text-white font-medium mb-4">Your email</span>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								placeholder="What's your email?"
								className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
								required
							/>
						</label>
						<label className="flex flex-col">
							<span className="text-white font-medium mb-4">Your Message</span>
							<textarea
								rows={7}
								name="message"
								value={form.message}
								onChange={handleChange}
								placeholder="What you want to say?"
								className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
								required
							/>
						</label>

						<button
							type="submit"
							className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
						>
							{loading ? "Sending..." : "Send"}
						</button>
					</form>
				</motion.div>

				<motion.div
					variants={slideIn("right", "tween", 0.2, 1)}
					className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
				>
					<EarthCanvas />
				</motion.div>
			</div>
			<div className="flex mt-16 md:flex-row flex-col justify-between items-center">
				<p className="md:text-base text-sm md:font-normal font-light">
					Copyright © 2024 Kartikay Singh
				</p>

				<div className="flex items-center md:gap-3 gap-6">
					{socialMedia.map((info) => (
						<a
							key={info.id}
							href={info.link}
							target={"_blank"}
							title="Social Media"
							className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
						>
							<img src={info.img} alt="icons" width={20} height={20} />
						</a>
					))}
				</div>
			</div>
		</>
	);
};

export default SectionWrapper(Contact, "contact");

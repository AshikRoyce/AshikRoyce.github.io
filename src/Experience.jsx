import React from "react";
import styled from "styled-components";

const Text = styled.h4`
	margin: 0;
	margin-top: 12px;
	font-weight: 300;
`;

const Bold = styled.span`
	font-weight: 500;
`;

export const experienceFn = () => {
	return {
		skills: {
			// API
			stripe: {
				name: "Stripe",
				key: "stripe",
				level: 4,
				description: (
					<Text>
						Stripe is an American financial services and software as a service
						(SaaS) company headquartered in San Francisco, California, United
						States. The company primarily offers payment processing software and
						application programming interfaces (APIs) for e-commerce websites
						and mobile applications.
					</Text>
				),
				category: "API & Services",

				light: true,
				theme: "#ffffff",
				image: "stripe.png",
			},

			// DATABASE PART
			sql: {
				name: "SQL",
				key: "sql",
				level: 3,
				description: (
					<Text>
						SQL (Structured Query Language) is a domain-specific language used
						in programming and designed for managing data held in a relational
						database management system (RDBMS), or for stream processing in a
						relational data stream management system (RDSMS). It is particularly
						useful in handling structured data, i.e. data incorporating
						relations among entities and variables.
					</Text>
				),
				category: "Database",

				theme: "#639CD0",
				image: "sql.png",
			},
			postgresql: {
				name: "PostgreSQL",
				key: "postgresql",
				level: 3,
				description: (
					<Text>
						PostgreSQL, also known as Postgres, is a free and open-source
						relational database management system emphasizing extensibility and
						SQL compliance. It was originally named POSTGRES, referring to its
						origins as a successor to the Ingres database developed at the
						University of California, Berkeley
					</Text>
				),
				category: "Database",

				theme: "#639CD0",
				image: "sql.png",
			},

			// FRAME WORKS
			react: {
				name: "React",
				key: "react",
				level: 4,
				description: (
					<Text>
						React makes it painless to create interactive UIs. Design simple
						views for each state in your application, and React will efficiently
						update and render just the right components when your data changes.
						Declarative views make your code more predictable and easier to
						debug.
					</Text>
				),
				category: "Framework & Libraries",
				theme: "#367586",
				image: "react.png",
				createdBy: "Facebook",
				usedBy: ["Facebook", "Airbnb", "Uber", "Netflix", "Instagram"],
			},
			nodejs: {
				name: "Node.js",
				key: "nodejs",
				level: 4,
				description: (
					<Text>
						Node.js is an open-source, cross-platform, JavaScript runtime
						environment (Framework) that executes JavaScript code outside a web
						browser. Node.js lets developers use JavaScript to write command
						line tools and for server-side scripting—running scripts server-side
						to produce dynamic web page content before the page is sent to the
						user's web browser.
						<br />
						<br />
						Consequently, Node.js represents a "JavaScript everywhere" paradigm,
						unifying web-application development around a single programming
						language, rather than different languages for server- and
						client-side scripts.
					</Text>
				),
				createdBy: "OpenJS Foundation",
				category: "Framework & Libraries",
				theme: "#4E6E25",
				image: "nodejs.png",
			},
			typescript: {
				name: "Typescript",
				key: "typescript",
				level: 4,
				description: (
					<Text>
						TypeScript is an open-source language which builds on JavaScript,
						one of the world’s most used tools, by adding static type
						definitions.
						<br />
						<br />
						Types provide a way to describe the shape of an object, providing
						better documentation, and allowing TypeScript to validate that your
						code is working correctly.
						<br />
						<br />
						Writing types can be optional in TypeScript, because type inference
						allows you to get a lot of power without writing additional code.
					</Text>
				),
				category: "Framework & Libraries",
				theme: "#277ACC",
				image: "typescript.png",
				createdBy: "Microsoft",
			},
			nestjs: {
				name: "NestJS",
				key: "nestjs",
				level: 4,
				description: (
					<Text>
						NestJS is a framework for building efficient, scalable Node.js
						server-side applications. It uses progressive JavaScript, is built
						with and fully supports TypeScript (yet still enables developers to
						code in pure JavaScript) and combines elements of OOP (Object
						Oriented Programming), FP (Functional Programming), and FRP
						(Functional Reactive Programming).
						<br />
						<br />
						Under the hood, Nest makes use of robust HTTP Server frameworks like
						Express (the default) and optionally can be configured to use
						Fastify as well!
						<br />
						<br />
						Nest provides a level of abstraction above these common Node.js
						frameworks (Express/Fastify), but also exposes their APIs directly
						to the developer. This gives developers the freedom to use the
						myriad of third-party modules which are available for the underlying
						platform.
					</Text>
				),
				category: "Framework & Libraries",

				theme: "#831730",
				image: "nestjs.png",
			},
			redux: {
				name: "Redux",
				key: "redux",
				level: 4,
				description: (
					<Text>
						Redux is an open-source JavaScript library for managing application
						state. It is most commonly used with libraries such as React or
						Angular for building user interfaces. Similar to (and inspired by)
						Facebook's Flux architecture, it was created by Dan Abramov and
						Andrew Clark.
					</Text>
				),
				category: "Framework & Libraries",

				theme: "#A690C6",
				image: "redux.png",
			},
			storybook: {
				name: "Storybook",
				key: "storybook",
				level: 4,
				description: (
					<Text>
						Storybook is a tool for UI development. It makes development faster
						and easier by isolating components. This allows you to work on one
						component at a time. You can develop entire UIs without needing to
						start up a complex dev stack, force certain data into your database,
						or navigate around your application.
					</Text>
				),
				category: "Framework & Libraries",

				theme: "#A33F62",
				image: "storybook.png",
			},

			struts2: {
				name: "Struts 2",
				key: "struts2",
				level: 3,
				description: (
					<Text>
						Apache Struts 2 is an open-source web application framework for
						developing Java EE web applications. It uses and extends the Java
						Servlet API to encourage developers to adopt a model–view–controller
						(MVC) architecture. The WebWork framework spun off from Apache
						Struts 1 aiming to offer enhancements and refinements while
						retaining the same general architecture of the original Struts
						framework. In December 2005, it was announced that WebWork 2.2 was
						adopted as Apache Struts 2, which reached its first full release in
						February 2007.
					</Text>
				),
				category: "Framework & Libraries",

				theme: "#A33F62",
				image: "storybook.png",
			},

			chakraui: {
				name: "Chakra UI",
				key: "chakraui",
				level: 3,
				description: (
					<Text>
						Chakra UI provides a set of accessible, reusable, and composable
						React components that make it super easy to create websites and
						apps.
					</Text>
				),
				category: "Framework & Libraries",

				theme: "#A33F62",
				image: "storybook.png",
			},

			// INFRASTRUCTURES
			docker: {
				name: "Docker",
				key: "docker",
				level: 4,
				description: (
					<Text>
						Docker is a set of platform as a service (PaaS) products that use
						OS-level virtualization to deliver software in packages called
						containers. Containers are isolated from one another and bundle
						their own software, libraries and configuration files; they can
						communicate with each other through well-defined channels. All
						containers are run by a single operating system kernel and therefore
						use fewer resources than virtual machines.
						<br />
						<br />
						The service has both free and premium tiers. The software that hosts
						the containers is called Docker Engine. It was first started in 2013
						and is developed by Docker, Inc.
					</Text>
				),
				category: "Infrastructure & Cloud",

				theme: "#3096ED",
				image: "docker.png",
			},

			// PRICIPLES
			projectmanagement: {
				name: "Project Management",
				key: "projectmanagement",
				level: 4,
				description: (
					<Text>
						Project management is the process of leading the work of a team to
						achieve goals and meet success criteria at a specified time. The
						primary challenge of project management is to achieve all of the
						project goals within the given constraints. This information is
						usually described in project documentation, created at the beginning
						of the development process. The primary constraints are scope, time,
						quality and budget. The secondary challenge is to optimize the
						allocation of necessary inputs and apply them to meet pre-defined
						objectives.
					</Text>
				),
				category: "Principles",

				theme: "#565650",
				image: "projectmanagement.png",
			},
			entrepreneurship: {
				name: "Entrepreneurship",
				key: "entrepreneurship",
				level: 4,
				description: (
					<Text>
						Entrepreneurship is the creation or extraction of value. With this
						definition, entrepreneurship is viewed as change, which may include
						other values than simply economic ones.
						<br />
						<br />
						More narrow definitions have described entrepreneurship as the
						process of designing, launching and running a new business, which i
						s often initially a small business, or as the "capacity and
						willingness to develop, organize and manage a business venture along
						with any of its risks to make a profit."
					</Text>
				),
				category: "Principles",

				light: true,
				theme: "#FCDB66",
				image: "entrepreneurship.png",
			},
			technicallead: {
				name: "Technical Lead",
				key: "technicallead",
				level: 3,
				description: (
					<Text>
						Technical Lead as the name states is solely responsible for leading
						a development team. The task of Technical Leader is not easy. They
						have to lead a team. Technical Lead is the one who actually creates
						a technical vision in order to turn it into reality with the help of
						the team. Technical Lead at times also has to take up the role of
						Software Architect, Team Lead or Software Engineer Manager. Along
						with all this Technical Lead also have to maintain the relation with
						everyone on board.
					</Text>
				),
				category: "Principles",

				light: true,
				theme: "#FCDB66",
				image: "technicallead.png",
			},
			// cicd: {
			// 	name: "CI/CD",
			// 	key: "cicd",
			// 	level: 4,
			// 	description: (
			// 		<Text>
			// 			In software engineering, CI/CD or CICD generally refers to the
			// 			combined practices of continuous integration and either continuous
			// 			delivery or continuous deployment.
			// 			<br />
			// 			<br />
			// 			CI/CD bridges the gaps between development and operation activities
			// 			and teams by enforcing automation in building, testing and
			// 			deployment of applications. Modern day DevOps practices involve
			// 			continuous development, continuous testing, continuous integration,
			// 			continuous deployment and continuous monitoring of software
			// 			applications throughout its development life cycle. The CI/CD
			// 			practice or CI/CD pipeline forms the backbone of modern day DevOps
			// 			operations.
			// 		</Text>
			// 	),
			// 	category: "Principles",

			// 	theme: "#656565",
			// 	image: "cicd.png",
			// },

			// PROGRAMMING LANGUAGES
			html: {
				name: "HTML",
				key: "html",
				level: 5,
				description: (
					<Text>
					</Text>
				),
				light: true,
				category: "Programming Languages",
				theme: "#F8E321",
				image: "javascript.png",
				// createdBy: "Netscape",
			},
			css: {
				name: "CSS",
				key: "css",
				level: 5,
				description: (
					<Text>
					</Text>
				),
				light: true,
				category: "Programming Languages",
				theme: "#F8E321",
				image: "javascript.png",
				// createdBy: "Netscape",
			},
			javascript: {
				name: "Javascript",
				key: "javascript",
				level: 5,
				description: (
					<Text>
						JavaScript (JS) is a lightweight, interpreted, or just-in-time
						compiled programming language with first-class functions.
						<br />
						<br />
						While it is most well-known as the scripting language for Web pages,
						many non-browser environments also use it, such as Node.js, Apache
						CouchDB and Adobe Acrobat.
						<br />
						<br />
						JavaScript is a prototype-based, multi-paradigm, single-threaded,
						dynamic language, supporting object-oriented, imperative, and
						declarative (e.g. functional programming) styles. Read more about
						JavaScript.
					</Text>
				),
				light: true,
				category: "Programming Languages",
				theme: "#F8E321",
				image: "javascript.png",
				createdBy: "Netscape",
			},
			java: {
				name: "Java",
				key: "java",
				level: 4,
				description: (
					<Text>
						Java is a class-based, object-oriented programming language that is
						designed to have as few implementation dependencies as possible.
					</Text>
				),
				light: true,
				category: "Programming Languages",
				theme: "#F8E321",
				image: "javascript.png",
				createdBy: "Oracle Corporation",
			},
			python: {
				name: "Python",
				key: "python",
				level: 5,
				description: (
					<Text>
					</Text>
				),
				light: true,
				category: "Programming Languages",
				theme: "#F8E321",
				image: "javascript.png",
				// createdBy: "Netscape",
			},

			// SYSTEM
			unix: {
				name: "UNIX",
				key: "unix",
				level: 3,
				description: (
					<Text>
						Unix is a family of multitasking, multiuser computer operating
						systems that derive from the original AT&T Unix, development
						starting in the 1970s.
					</Text>
				),
				category: "Systems",

				theme: "#000000",
				image: "unix.png",
			},
			networking: {
				name: "Networking",
				key: "networking",
				level: 3,
				description: (
					<Text>
						A computer network is a group of computers that use a set of common
						communication protocols over digital interconnections for the
						purpose of sharing resources located on or provided by the network
						nodes. The interconnections between nodes are formed from a broad
						spectrum of telecommunication network technologies, based on
						physically wired, optical, and wireless radio-frequency methods that
						may be arranged in a variety of network topologies.
					</Text>
				),
				category: "Systems",

				theme: "#373788",
				image: "networking.png",
			},
		},
		challenges: [
			{
				name: "GUVI",
				image: "poc.jpg",
				subtitle: "Lead Software Engineer",
				description: <Text></Text>,
				start: new Date(Date.parse("27 March 2020")),
				link: "https://guvi.in",
				theme: "#000000",
				skills: ["typescript", "technicallead", "entrepreneurship"],
			},
			{
				name: "Workativ",
				image: "poc.jpg",
				subtitle: "Development Engineer",
				description: (
					<Text>
						The Career changing phase.
						<br />	<br />
						Workativ, marks a drastic change in my career and transformed me from developer to product person.
						<br />	<br />
						Entered in to Workatvi's small nest as first single technical engineer.Workativ assistant, a workplace support automation SaaS platform designed to transform the way companies provide IT & HR support to employees.
						<br />	<br />
						The primary goal of the product is to  reduce helpdesk and IT & HR support costs, automation capabilities to help employees self resolve repetitive IT and HR issues and service requests autonomously without the need to contact Helpdesk or HR teams.
						<br />	<br />
						Workativ is an emerging start up where we were only 5 employees in total and I was a single technical engineer.
						<br />	<br />
						I started experimenting with getting only 5-6 hours of sleep so that I could get better knowledge of the product.I built each and every piece of core technical team providing an end to end solution. I also played an extensive role in recruiting team,product road map design. This place showed me how the business runs,market demands, product lifecycle and accelerated  to craft products on my own.
					</Text>
				),
				start: new Date(Date.parse("18 Jul 2018")),
				end: new Date(Date.parse("26 March 2020")),
				link: "https://workativ.com",
				theme: "#000000",
				skills: ["typescript", "technicallead", "entrepreneurship"],
			},
			{
				name: "Facilio",
				image: "poc.jpg",
				subtitle: "Software Engineer",
				description: (
					<Text>
						As quotes say, Change is constant.I shifted my career from Zoho to Facilio. I took up the responsibility of full stack engineer and developing backend API's ,frontend system using Vue js for Facilio products. The system was designed having user experience as target.Facilio products visualize the power/energy consumed in charts for analysis, Also has a live tracking system.I travelled along with Facilio only for 5 months, Because destiny had a bigger milestone in my career to explore the different version of me. Stay tuned for the most interesting phase of my career.Despite of short duration i thoroughly enjoyed working with Facilio.
					</Text>
				),
				start: new Date(Date.parse("01 March 2018")),
				end: new Date(Date.parse("17 Jul 2018")),
				link: "https://facilio.com/",
				theme: "#000000",
				skills: ["typescript", "technicallead", "entrepreneurship"],
			},
			{
				name: "Zoho Corp",
				image: "poc.jpg",
				subtitle: "Associate Software Engineer",
				description: (
					<Text>
						Continued from Zoho university,
						<br />	<br />
						Well, After skilling up from Zoho University stepped in to real time projects. The path to developer starts here.
						<br />	<br />
						I was ready for my first project Zoho people, A time tracking application for Zoho employees. Production source code seemed to be Greek and Latin for newbie me and first two weeks were pretty chaotic. I do things without exploring on how it happened and assume to be magical. Thankfully I had good mentors in team who motivated me to overcome fear of failures and push myself beyond extent. I poured my ideas in designing and development using Java and JSP. In short span collaborated with product manger to design user flow, UI/UX design. I look back and cherish initial days memories.
						<br />	<br />
						After five months of hardship, Zoho people evolved out to be the most entailed time tracking app.
						<br />	<br />
						As we heard, The life is so magical and future is unforeseeable. The next challenge awaits for sculpting me in different dimension
						<br />	<br />
						Few days later, I was assigned to migrate Zoho desk, A substantial ticket management tool from JSP to React application.
						<br />	<br />
						There were times I wished to know on React and the documentation petrified me. I used to thrive in self paced conditions and started experimenting React in Zoho desk.
						<br />	<br />
						This enlightened me that a good developer is not who writes million lines of code but should be able to effectively maintain the performance.Collaborated in a team focused environment to achieve performance improvement to reduce initial loading page from 3.6 seconds to 2.5 seconds. I still thank each and everyone who stood by beside me.

						<br />	<br />
						Struggle did not stop here.. To be continued!
					</Text>
				),
				start: new Date(Date.parse("01 Dec 2016")),
				end: new Date(Date.parse("28 Feb 2018")),
				link: "https://zoho.com/", 
				theme: "#000000",
				skills: ["typescript", "technicallead", "entrepreneurship"],
			},
			{
				name: "Zoho University",
				image: "poc.jpg",
				subtitle: "Software Development Intern",
				description: (
					<Text>
						What I cracked?
						<br />	<br />
						The journey of my dream from scratch without a bachelor degree kickstarted at Zoho university. Just after graduating from high school, jumped in at ZU where i quickly grasped underlying basics of web development. HTML, CSS, Bootstrap, Javascript, Jquery, Java, MySQL, PostgreSQL, HTTP protocol.
						<br />	<br />
						I have to say, I was thrilled to get my hands dirty in cloning UI of Book my Show, Amazon,Reddit as mini projects exclusively with HTML and Bootstrap. I believe in "learn and let learn" and spread the acquired knowledge to my fellow buddies.<br />
						Zoho university flipped a neophyte into a moderate coder. Learning is a lifelong process, No end. To be continued!
					</Text>
				),
				start: new Date(Date.parse("15 Jun 2016")),
				end: new Date(Date.parse("30 Nov 2016")),
				link: "https://www.zohoschools.com/",
				theme: "#000000",
				skills: [
					"java",
					"postgresql",
					"sql",
					"javascript",
					"unix",
					"networking",
				],
			},
		],
		selectChallenge: () => { },
		selectedChallenge: null,
		selectSkill: () => { },
		selectedSkill: null,
	};
};

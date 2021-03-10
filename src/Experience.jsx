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
			javascript: {
				name: "Javascript",
				key: "javascript",
				level: 4,
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
						Collaborated with cross-functional development team members to
						analyze the potential system solutions based on evolving client
						requirements. Worked with project managers, developers, quality
						assurance and customers to resolve technical issues. Gathered data
						on integration issues and vulnerabilities and reported all findings
						to Project Manager with improvement recommendations. Trained and
						mentored junior developers and engineers, teaching skills in Node,
						React, Functional Programming and working to improve overall team
						performance. Suggested improvements to team and project workflow.
						Estimated work hours and tracked progress using Agile/SCRUM
						methodology.
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
						Specify power supply requirements and configuration. Develop testing
						programs that address areas such as database impacts, software
						scenarios, regression testing, negative testing, error or bug
						retest, or usability. Analyze user needs and software requirements
						to determine feasibility of design within time and cost constraints.
						Design, develop and modify software systems, using scientific
						analysis and mathematical models to predict and measure outcome and
						consequences of design. Train users to use new or modified
						equipment. Store, retrieve, and manipulate data for analysis of
						system capabilities and requirements.
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
						Debugged code and located root causes of problems by reviewing
						configuration files and logs. Fixed Core issues effectively using
						React and Java, increasing productivity and boosting workflows.
						Authored and maintained well-organized, efficient and successful
						manual test cases for entire team. Evaluated function, performance
						and design compliance of every product against design standards and
						customer needs. Collaborated with developers and product owners to
						stay current on product features and intended functionality.
					</Text>
				),
				start: new Date(Date.parse("01 Feb 2017")),
				end: new Date(Date.parse("28 Feb 2018")),
				link: "https://zoho.com/",
				theme: "#000000",
				skills: ["typescript", "technicallead", "entrepreneurship"],
			},
			{
				name: "Zoho Schools",
				image: "poc.jpg",
				subtitle: "Software Development Intern",
				description: (
					<Text>
						Getting deep understanding about computer software working
						principals. Learn about what is software as a service products. how
						they can improve customers productivity. Constant understanding
						about client server architecture. Handling highly scalable databases
					</Text>
				),
				start: new Date(Date.parse("15 Jun 2016")),
				end: new Date(Date.parse("31 Jan 2017")),
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
		selectChallenge: () => {},
		selectedChallenge: null,
		selectSkill: () => {},
		selectedSkill: null,
	};
};

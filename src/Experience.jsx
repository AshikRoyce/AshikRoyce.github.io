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
				category: "Programming Languages",
				theme: "#277ACC",
				image: "typescript.png",
				createdBy: "Microsoft",
			},
		},
		challenges: [
			{
				name: "Founder @ Ticket721",
				image: "ticket721.png",
				subtitle: "CTO on a modern ticketing platform",
				description: (
					<Text>
						<Bold>Ticket721</Bold> is a ticketing platform focusing on security
						and user experience. Security is enhanced with 100% digital tickets,
						created as unique and 100% owned by the user on the{" "}
						<Bold>Ethereum blockchain</Bold>. The tickets can be sold freely on
						a secured marketplace, lowering fraud drastically.
						<br />
						<br />
						I'm in charge of all the technical development of Ticket721, its
						products, infrastructure, tech recruitment and training.{" "}
						<Bold>Follow the link to access the platform !</Bold>
					</Text>
				),
				start: new Date(Date.parse("01 May 2018")),
				link: "https://app.ticket721.com",
				theme: "#000000",
				skills: ["typescript", "technicallead", "entrepreneurship"],
			},
		],
		selectChallenge: () => {},
		selectedChallenge: null,
		selectSkill: () => {},
		selectedSkill: null,
	};
};

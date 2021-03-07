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
				description: <Text></Text>,
				category: "Programming Languages",
				theme: "#277ACC",
				image: "typescript.png",
				createdBy: "Microsoft",
			},
		},
		challenges: [
			{
				name: "Tech Lead @ GUVI",
				image: "guvi.png",
				subtitle: "Hello Test",
				description: <Text></Text>,
				start: new Date(Date.parse("27 March 2020")),
				link: "https://guvi.in",
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

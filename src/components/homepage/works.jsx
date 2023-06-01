import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Currently on"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./nyu.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Undergraduate Summer Research Program</div>
							<div className="work-subtitle">
								Research Assistant
							</div>
							<div className="work-duration">Jun - August 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

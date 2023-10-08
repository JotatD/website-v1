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
							<div className="work-title">Junior Fall Semester (NYU New York)</div>
							<div className="work-subtitle">
								Math and CS
							</div>
							<div className="work-duration">August - December 2023</div>
						</div>
						<div className="work">
							<img
								src="./nyu.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Student Research (NYU New York)</div>
							<div className="work-subtitle">
								Transformers and RCSL
							</div>
							<div className="work-duration">June - December TBD</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

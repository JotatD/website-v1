import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./styles/article.css";

const Article = (props) => {
	const { title, description, header, link, github} = props;

	return (
		<React.Fragment>
			<div className="homepage-article">
				<div className="homepage-article-content">
					<div className="homepage-article-date">
						{header}
						<a className="homepage-article-logo"
								href={github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
						</a>
					</div> 
					<div className="homepage-article-title">{title}</div>
					<div className="homepage-article-description">
						{description}
					</div>
					{/* <div className="homepage-article-link">
						<Link to={link}>
							Read article{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div> */}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;

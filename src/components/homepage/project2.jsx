import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

//oijo
import "./styles/article.css";

const Article = (props) => {
	const { title, description, header, link } = props;

	return (
		<React.Fragment>
			<div className="homepage-project">
				<div className="homepage-project-content">
					<div className="homepage-project-date">
						{header}
					</div>
					<div className="homepage-project-title">{title}</div>
					<div className="homepage-project-description">
						{description}
					</div>
					<div className="homepage-project-link">
						<Link to={link}>
							Read project{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;

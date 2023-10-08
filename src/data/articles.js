import React from "react";

function article_1() {
	return {
		header: "Summer 2023 - Undergraduate Research Program (side project)",
		date: "7 May 2023",
		title: "Transformer Hacks",
		description:
			"Transformers for applications to single agent reinforcement learning and time series foerecasting with Pytorch and Pandas.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		github: 'https://github.com/JotatD/transformer_hacks',
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		header: "Fall 2023 - Fundamentals of Machine Learning",
		date: "7 May 2023",
		title: "Click-Through Rate Predictor",
		description:
			"Good old data processing and multiple classifications techniques (XGBoost, Random Forests, Perceptrons, and Regression) to predict whether costumers click on ads with Sklearn, Pytorch, Pandas and Seaborn used",
		style: ``,
		github: "https://github.com/JotatD/machine_learning/blob/main/ctr.ipynb",
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		header: "Summer 2022 - Hackathon",
		date: "7 May 2023",
		title: "Volatility and Return Calculator of Cryptoassets",
		description:
			"Volatility and return calculator of cryptoasset portfolio with Pandas and Streamlit. Winner of the third Jury's choice in the Daisi hackathon ",
		style: ``,
		github: "https://github.com/JotatD/hackathon",
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		header: "Fall 2022 - ",
		date: "7 May 2023",
		title: "Click-Through Rate Predictor",
		description:
			"Volatility and risk calculator of cryptoassets with Pandas and Streamlit. Winner of the third Jury's choice in the Daisi hackathon ",
		style: ``,
		github: "https://ieeextreme.org/ieeextreme-16-0-ranking/",
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3];

export default myArticles;

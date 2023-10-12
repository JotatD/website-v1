import React from "react";

function article_1() {
	return {
		arxiv: false,
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
		arxiv: false,
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
		arxiv: false,
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
	  arxiv: "https://arxiv.org/abs/2310.04579", // Change the value to true to display the logo
	  header: "Summer 2023",
	  date: "7 May 2023",
	  title: "Self-Confirming transformer",
	  description:
		"Offline transformer trained to address online nonstationarity, motivated by the self-confirming equilibrium (SCE) in game theory",
	  style: ``,
	  github: "https://github.com/JotatD/Self-Confirming-Transformer",
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
  

const myArticles = [article_4, article_1, article_2, article_3];

export default myArticles;

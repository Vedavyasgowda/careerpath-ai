// =============================================================================
// CAREERPATH AI — ROADMAP INTELLIGENCE ENGINE v2.0
// =============================================================================

// =============================================================================
// INDUSTRY-LEVEL ROADMAP DATA — Rich structured skill objects
// =============================================================================
const roadmaps = {

  fullstack: {
    beginner: [
      { skill:"Internet Basics", importance:"Every web dev must understand how data travels online", realWorldUse:"Diagnosing network issues, explaining API calls to teams", project:"Draw the HTTP request-response cycle diagram", prereqs:[], next:["HTML","HTTP/HTTPS"], time:3, resume:true },
      { skill:"HTTP/HTTPS", importance:"Foundation of all web communication and API calls", realWorldUse:"Used in every REST API, form submission, and browser request", project:"Use DevTools Network tab to trace a full page load", prereqs:["Internet Basics"], next:["REST APIs"], time:3, resume:true },
      { skill:"HTML", importance:"Skeleton of every web page — no web exists without it", realWorldUse:"Building page structure in every frontend project", project:"Build a fully structured personal portfolio HTML page", prereqs:["Internet Basics"], next:["CSS Basics","Semantic HTML"], time:7, resume:true },
      { skill:"Semantic HTML", importance:"Boosts SEO and accessibility — demanded by employers", realWorldUse:"Screen readers, SEO indexing, accessible web apps", project:"Rebuild a blog with proper article/nav/section tags", prereqs:["HTML"], next:["Accessibility"], time:3, resume:true },
      { skill:"CSS Basics", importance:"Controls everything visual on the web", realWorldUse:"Styling every UI component in production apps", project:"Style your portfolio with colors, fonts, spacing", prereqs:["HTML"], next:["Flexbox","CSS Grid"], time:7, resume:true },
      { skill:"Flexbox", importance:"Industry-standard layout system used in 90% of projects", realWorldUse:"Navigation bars, card grids, responsive containers", project:"Build a responsive navbar and card layout", prereqs:["CSS Basics"], next:["CSS Grid"], time:5, resume:true },
      { skill:"CSS Grid", importance:"Most powerful 2D layout system in CSS", realWorldUse:"Dashboards, magazine layouts, complex UI grids", project:"Build a CSS Grid photo gallery with responsive breakpoints", prereqs:["Flexbox"], next:["Responsive Design"], time:5, resume:false },
      { skill:"JavaScript Basics", importance:"Only programming language of the browser — mandatory", realWorldUse:"Adding interactivity to every web page", project:"Build a to-do list with add/delete/complete functionality", prereqs:["HTML","CSS Basics"], next:["DOM Manipulation","ES6+"], time:14, resume:true },
      { skill:"DOM Manipulation", importance:"Lets JS interact with HTML — core of frontend development", realWorldUse:"Dynamic UI updates without page reloads", project:"Build a real-time character counter for a textarea", prereqs:["JavaScript Basics"], next:["Events","Fetch API"], time:7, resume:true },
      { skill:"Git & GitHub", importance:"Non-negotiable for every developer in any team", realWorldUse:"Version control, collaboration, code review in every company", project:"Push your portfolio to GitHub with proper commit messages", prereqs:[], next:["GitHub Actions"], time:5, resume:true },
      { skill:"Responsive Design", importance:"Mobile-first web is the standard — not optional", realWorldUse:"Every production site must work on all screen sizes", project:"Make your portfolio fully responsive using media queries", prereqs:["CSS Grid","Flexbox"], next:["CSS Animations"], time:5, resume:true },
    ],
    intermediate: [
      { skill:"ES6+ JavaScript", importance:"Modern JS syntax used in every React/Node codebase", realWorldUse:"Destructuring, spread, arrow functions in daily dev work", project:"Refactor your to-do app using ES6 features fully", prereqs:["JavaScript Basics"], next:["Promises","React.js"], time:7, resume:true },
      { skill:"Promises & Async/Await", importance:"Handling asynchronous operations is critical for APIs", realWorldUse:"Fetching data from APIs, file operations, database calls", project:"Build a weather app consuming a public API", prereqs:["ES6+ JavaScript"], next:["REST APIs"], time:7, resume:true },
      { skill:"REST APIs", importance:"How frontends talk to backends — used everywhere", realWorldUse:"Integrating payment gateways, auth services, data APIs", project:"Build a CRUD app connected to a public REST API", prereqs:["Promises & Async/Await","HTTP/HTTPS"], next:["Node.js"], time:7, resume:true },
      { skill:"React.js", importance:"#1 frontend framework — required in 60% of frontend jobs", realWorldUse:"Building interactive UIs at companies like Meta, Netflix, Airbnb", project:"Build a full expense tracker app with React", prereqs:["ES6+ JavaScript","DOM Manipulation"], next:["React Hooks","State Management"], time:21, resume:true },
      { skill:"React Hooks", importance:"Modern React — class components are legacy, hooks are standard", realWorldUse:"useState, useEffect, useContext used in every React project", project:"Convert a class-based component app to functional + hooks", prereqs:["React.js"], next:["State Management","Custom Hooks"], time:10, resume:true },
      { skill:"Node.js", importance:"JavaScript on the server — enables full stack JS development", realWorldUse:"Building scalable APIs, microservices, real-time servers", project:"Build a REST API with Node.js serving JSON data", prereqs:["ES6+ JavaScript"], next:["Express.js"], time:14, resume:true },
      { skill:"Express.js", importance:"Most popular Node.js framework — used in majority of backends", realWorldUse:"Building RESTful APIs, middleware pipelines, routing systems", project:"Build a full CRUD REST API with Express and test with Postman", prereqs:["Node.js"], next:["MongoDB","Authentication"], time:10, resume:true },
      { skill:"MongoDB", importance:"NoSQL database — flexible and fast for modern web apps", realWorldUse:"Storing user data, posts, products in startups and scale-ups", project:"Connect Express API to MongoDB — full CRUD with Mongoose", prereqs:["Express.js"], next:["Mongoose ODM","MySQL"], time:10, resume:true },
      { skill:"Authentication (JWT)", importance:"Securing APIs is mandatory in any production application", realWorldUse:"Login systems, protected routes, token refresh logic", project:"Build a full auth system: register, login, protected route", prereqs:["Express.js","MongoDB"], next:["Authorization","OAuth"], time:7, resume:true },
      { skill:"MVC Architecture", importance:"Standard pattern that every backend developer is expected to know", realWorldUse:"Organizing large codebases — Models, Views, Controllers", project:"Refactor your Express app into a clean MVC structure", prereqs:["Express.js"], next:["System Design"], time:5, resume:true },
    ],
    advanced: [
      { skill:"System Design Basics", importance:"Senior interviews always include system design — start early", realWorldUse:"Designing scalable services at companies like Google, Amazon", project:"Design the architecture of a URL shortener system", prereqs:["MVC Architecture","REST APIs"], next:["Microservices","Caching"], time:14, resume:true },
      { skill:"Microservices", importance:"How large companies break monoliths into scalable services", realWorldUse:"Netflix, Uber, Airbnb — all run on microservice architecture", project:"Split a monolith into 2 microservices communicating via REST", prereqs:["System Design Basics"], next:["Docker","API Gateway"], time:14, resume:true },
      { skill:"Docker", importance:"Containerization is standard in every DevOps pipeline", realWorldUse:"Packaging apps for consistent deployment across environments", project:"Dockerize your MERN app and run it with docker-compose", prereqs:["Node.js"], next:["Kubernetes","CI/CD"], time:10, resume:true },
      { skill:"Redis & Caching", importance:"Performance optimization — reduces database load by 80%+", realWorldUse:"Caching API responses, session storage, leaderboards", project:"Add Redis caching to your Express API for top-accessed routes", prereqs:["System Design Basics"], next:["Load Balancing"], time:7, resume:true },
      { skill:"WebSockets", importance:"Real-time communication — chats, live dashboards, games", realWorldUse:"Slack, Notion live collab, multiplayer apps use WebSockets", project:"Build a real-time chat app using Socket.io", prereqs:["Node.js"], next:["GraphQL"], time:7, resume:false },
      { skill:"GraphQL", importance:"Alternative to REST — adopted by GitHub, Shopify, Twitter", realWorldUse:"Efficient querying, single endpoint, typed schema", project:"Migrate a REST API endpoint to GraphQL", prereqs:["REST APIs"], next:["Apollo Client"], time:10, resume:true },
      { skill:"CI/CD Pipelines", importance:"Automating deployments is expected in senior roles", realWorldUse:"GitHub Actions, Jenkins — automated test and deploy pipelines", project:"Set up a GitHub Actions workflow to deploy your app on push", prereqs:["Docker","Git & GitHub"], next:["Kubernetes"], time:7, resume:true },
      { skill:"Security (XSS/CSRF/SQLi)", importance:"Security vulnerabilities are the #1 reason apps get hacked", realWorldUse:"Every production app must be hardened against common attacks", project:"Audit your app for XSS, CSRF, and SQL injection vulnerabilities", prereqs:["Authentication (JWT)"], next:["OWASP Top 10"], time:7, resume:true },
      { skill:"Performance Optimization", importance:"Slow apps lose users — 1s delay = 7% less conversions", realWorldUse:"Code splitting, lazy loading, CDN usage in production apps", project:"Audit and optimize your React app using Lighthouse", prereqs:["React.js"], next:["Web Vitals"], time:7, resume:false },
      { skill:"Cloud Deployment (AWS/Vercel)", importance:"Every app needs to be deployed — cloud is the standard", realWorldUse:"Deploying to EC2, S3, Lambda, or Vercel in production", project:"Deploy your full stack app live with a custom domain", prereqs:["Docker","CI/CD Pipelines"], next:["Serverless"], time:10, resume:true },
    ]
  },

  datascience: {
    beginner: [
      { skill:"Python Fundamentals", importance:"Primary language of data science — non-negotiable", realWorldUse:"Scripting, automation, data pipelines at every DS role", project:"Build a Python script that reads and analyzes a CSV file", prereqs:[], next:["NumPy","Pandas"], time:14, resume:true },
      { skill:"NumPy", importance:"Backbone of numerical computing in Python", realWorldUse:"Matrix operations, vectorized computations in ML models", project:"Implement matrix multiplication and statistical analysis with NumPy", prereqs:["Python Fundamentals"], next:["Pandas"], time:7, resume:true },
      { skill:"Pandas", importance:"Industry-standard for data manipulation — used daily by DS engineers", realWorldUse:"Cleaning messy data, aggregation, merging datasets", project:"Clean and analyze a real Kaggle dataset with Pandas", prereqs:["NumPy"], next:["Data Cleaning","EDA"], time:10, resume:true },
      { skill:"Data Cleaning", importance:"80% of a data scientist's time is spent cleaning data", realWorldUse:"Handling nulls, outliers, encoding categoricals in pipelines", project:"Clean a raw dataset with missing values and inconsistent types", prereqs:["Pandas"], next:["Feature Engineering"], time:7, resume:true },
      { skill:"Statistics & Probability", importance:"Foundation of all ML models — without this you're guessing", realWorldUse:"Hypothesis testing, confidence intervals in A/B tests", project:"Perform a full statistical analysis on sales data", prereqs:["Python Fundamentals"], next:["Regression"], time:10, resume:true },
      { skill:"Matplotlib & Seaborn", importance:"Visualization communicates insights to non-technical stakeholders", realWorldUse:"Creating charts for reports, dashboards, presentations", project:"Create a full EDA report with 10+ visualizations", prereqs:["Pandas"], next:["Plotly","EDA"], time:7, resume:true },
    ],
    intermediate: [
      { skill:"Exploratory Data Analysis (EDA)", importance:"Understand data before modeling — prevents wasted effort", realWorldUse:"Discovering patterns, correlations, anomalies in business data", project:"Full EDA report on a real-world dataset with actionable insights", prereqs:["Matplotlib & Seaborn","Data Cleaning"], next:["Feature Engineering"], time:7, resume:true },
      { skill:"Feature Engineering", importance:"Better features = better models — most impactful skill in DS", realWorldUse:"Creating lag features, encodings, interaction terms for ML", project:"Engineer features that improve model accuracy by 10%+", prereqs:["EDA","Data Cleaning"], next:["Scikit-learn"], time:10, resume:true },
      { skill:"Scikit-learn", importance:"Standard ML library — every DS engineer knows it", realWorldUse:"Training, evaluating, and deploying ML models in production", project:"Build a complete ML pipeline: preprocess → train → evaluate → save", prereqs:["Feature Engineering"], next:["Model Evaluation","XGBoost"], time:14, resume:true },
      { skill:"Model Evaluation", importance:"Knowing your model sucks before it goes live saves careers", realWorldUse:"Cross-validation, ROC-AUC, confusion matrices in every ML project", project:"Compare 5 models with proper CV and select the best one", prereqs:["Scikit-learn"], next:["Hyperparameter Tuning"], time:7, resume:true },
      { skill:"SQL for Data Science", importance:"Every DS role requires querying databases — no exceptions", realWorldUse:"Extracting data from company databases, writing analytical queries", project:"Answer 10 business questions using SQL on a real dataset", prereqs:["Python Fundamentals"], next:["Big Data"], time:10, resume:true },
    ],
    advanced: [
      { skill:"Deep Learning (TensorFlow/Keras)", importance:"Powers image recognition, NLP, recommendation systems", realWorldUse:"Netflix recommendations, Google Search, self-driving cars", project:"Build an image classifier with CNN achieving 90%+ accuracy", prereqs:["Scikit-learn"], next:["NLP","Computer Vision"], time:21, resume:true },
      { skill:"NLP & Text Analysis", importance:"Fastest growing DS specialization — massive job market", realWorldUse:"Sentiment analysis, chatbots, document classification", project:"Build a sentiment analyzer for product reviews", prereqs:["Deep Learning (TensorFlow/Keras)"], next:["Transformers"], time:14, resume:true },
      { skill:"MLOps & Model Deployment", importance:"Models in notebooks are useless — deployment is where value is created", realWorldUse:"Serving models as APIs, monitoring drift, retraining pipelines", project:"Deploy your ML model as a Flask/FastAPI REST endpoint", prereqs:["Scikit-learn","Docker"], next:["MLflow","Kubeflow"], time:14, resume:true },
      { skill:"Big Data (PySpark)", importance:"Real companies deal with billions of rows — Spark is the tool", realWorldUse:"Processing large datasets at companies like Netflix, LinkedIn", project:"Process a 10M row dataset with PySpark vs Pandas — compare speed", prereqs:["SQL for Data Science"], next:["Databricks","Kafka"], time:14, resume:true },
    ]
  },

  cybersecurity: {
    beginner: [
      { skill:"Networking Fundamentals", importance:"You can't hack or defend what you don't understand", realWorldUse:"Network analysis, firewall configuration, VPN setup", project:"Map your home network using Nmap", prereqs:[], next:["TCP/IP","OSI Model"], time:10, resume:true },
      { skill:"TCP/IP & OSI Model", importance:"Core protocol knowledge tested in every security interview", realWorldUse:"Understanding packet flow, troubleshooting network attacks", project:"Capture and analyze packets with Wireshark on your network", prereqs:["Networking Fundamentals"], next:["Linux for Security"], time:7, resume:true },
      { skill:"Linux for Security", importance:"90% of servers run Linux — security tools are Linux-first", realWorldUse:"Running penetration testing tools, server hardening", project:"Set up a Kali Linux VM and navigate using only terminal", prereqs:[], next:["Bash Scripting","File Permissions"], time:10, resume:true },
      { skill:"Cryptography Basics", importance:"Encryption is the backbone of all secure communication", realWorldUse:"SSL/TLS, JWT tokens, password hashing in real systems", project:"Implement RSA encryption from scratch in Python", prereqs:["Python Fundamentals"], next:["PKI","Hash Functions"], time:7, resume:true },
    ],
    intermediate: [
      { skill:"Ethical Hacking Methodology", importance:"Structured approach separates professionals from script kiddies", realWorldUse:"Performing authorized penetration tests for companies", project:"Complete a full pentest on a HackTheBox Easy machine", prereqs:["Networking Fundamentals","Linux for Security"], next:["Web Security","Exploitation"], time:14, resume:true },
      { skill:"Web Application Security (OWASP)", importance:"80% of breaches are web app attacks — this is where the money is", realWorldUse:"Finding SQLi, XSS, IDOR in bug bounty and pentest engagements", project:"Exploit all OWASP Top 10 on DVWA (test environment)", prereqs:["Ethical Hacking Methodology"], next:["Burp Suite"], time:14, resume:true },
      { skill:"Burp Suite", importance:"The #1 tool for web app penetration testing worldwide", realWorldUse:"Intercepting requests, fuzzing, scanning in professional pentests", project:"Find and exploit a SQL injection on a practice target using Burp", prereqs:["Web Application Security (OWASP)"], next:["Bug Bounty"], time:10, resume:true },
      { skill:"Vulnerability Assessment", importance:"Before exploitation comes discovery — systematic scanning is key", realWorldUse:"Running Nessus/OpenVAS scans as part of security audits", project:"Perform a full vulnerability assessment on a test VM", prereqs:["Ethical Hacking Methodology"], next:["Penetration Testing"], time:7, resume:true },
    ],
    advanced: [
      { skill:"Penetration Testing (Full)", importance:"The ultimate cybersecurity skill — highest-paid specialty", realWorldUse:"Simulating real attacks for Fortune 500 companies", project:"Complete a full pentest report on TryHackMe Advanced machine", prereqs:["Burp Suite","Vulnerability Assessment"], next:["Red Teaming"], time:21, resume:true },
      { skill:"Reverse Engineering", importance:"Understanding malware requires reading what it does", realWorldUse:"Malware analysis, CTF challenges, vulnerability research", project:"Reverse engineer a simple binary using Ghidra", prereqs:["Penetration Testing (Full)"], next:["Malware Analysis"], time:14, resume:true },
      { skill:"Bug Bounty Hunting", importance:"Earn real money finding real vulnerabilities in real systems", realWorldUse:"HackerOne, Bugcrowd — companies pay $50 to $1M+ per bug", project:"Submit a valid bug report to a public bug bounty program", prereqs:["Web Application Security (OWASP)","Burp Suite"], next:["Advanced Exploitation"], time:21, resume:true },
      { skill:"Security Automation (Python)", importance:"Scale your security work — manual is too slow at enterprise level", realWorldUse:"Writing custom scanners, exploit scripts, automation tools", project:"Write a Python script to automate subdomain enumeration", prereqs:["Penetration Testing (Full)","Python Fundamentals"], next:["SIEM","SOC Skills"], time:10, resume:true },
    ]
  },

  ai: {
    beginner: [
      { skill:"Python for AI", importance:"All major AI frameworks (TF, PyTorch, Hugging Face) are Python", realWorldUse:"Writing AI scripts, experiments, prototypes daily", project:"Build a Python script implementing a simple decision tree from scratch", prereqs:[], next:["Linear Algebra for AI","NumPy"], time:14, resume:true },
      { skill:"Linear Algebra for AI", importance:"Matrix math is how neural networks work internally", realWorldUse:"Understanding weight matrices, embeddings, PCA", project:"Implement dot products, matrix multiplication for a neural network layer", prereqs:["Python for AI"], next:["Calculus & Optimization"], time:10, resume:true },
      { skill:"Probability & Statistics for AI", importance:"AI models are fundamentally probabilistic systems", realWorldUse:"Bayesian reasoning, model uncertainty, A/B testing", project:"Build a Naive Bayes spam classifier from scratch", prereqs:["Python for AI"], next:["Machine Learning Basics"], time:10, resume:true },
    ],
    intermediate: [
      { skill:"Machine Learning Fundamentals", importance:"AI is built on ML — this is the foundation layer", realWorldUse:"Regression, classification, clustering in every AI product", project:"Build 5 different ML models and compare their performance on a dataset", prereqs:["Probability & Statistics for AI"], next:["Neural Networks","Deep Learning"], time:14, resume:true },
      { skill:"Neural Networks from Scratch", importance:"Building before using frameworks reveals true understanding", realWorldUse:"Impresses in AI interviews — shows deep understanding", project:"Implement a 2-layer neural network in pure NumPy for digit recognition", prereqs:["Machine Learning Fundamentals","Linear Algebra for AI"], next:["Deep Learning Frameworks"], time:14, resume:true },
      { skill:"Deep Learning Frameworks (PyTorch)", importance:"PyTorch is the dominant research and production AI framework", realWorldUse:"Meta, Tesla, OpenAI — all use PyTorch for AI development", project:"Train a CNN for image classification with 95%+ accuracy", prereqs:["Neural Networks from Scratch"], next:["Computer Vision","NLP"], time:21, resume:true },
    ],
    advanced: [
      { skill:"Large Language Models (LLMs)", importance:"The most in-demand AI skill of 2024-2026 — ChatGPT era", realWorldUse:"Building AI assistants, code generators, content systems", project:"Fine-tune a small LLM on a custom dataset using HuggingFace", prereqs:["Deep Learning Frameworks (PyTorch)"], next:["RAG","LangChain"], time:21, resume:true },
      { skill:"RAG (Retrieval Augmented Generation)", importance:"Production AI apps need factual accuracy — RAG solves this", realWorldUse:"AI chatbots, document Q&A systems in enterprises", project:"Build a PDF Q&A bot using RAG with LangChain and OpenAI", prereqs:["Large Language Models (LLMs)"], next:["Vector Databases"], time:14, resume:true },
      { skill:"AI Deployment & MLOps", importance:"AI that isn't deployed creates zero value", realWorldUse:"Serving models with FastAPI, Triton, SageMaker", project:"Deploy an LLM API endpoint with rate limiting and monitoring", prereqs:["Large Language Models (LLMs)"], next:["Kubernetes for AI"], time:14, resume:true },
    ]
  },

  ml: {
    beginner: [
      { skill:"Python & Data Libraries", importance:"ML toolkit starts with Python — everything else builds on it", realWorldUse:"Data loading, preprocessing, model training scripts", project:"Complete data analysis pipeline: load → clean → visualize", prereqs:[], next:["Statistics","NumPy"], time:14, resume:true },
      { skill:"Statistics for ML", importance:"Every ML algorithm is applied statistics at its core", realWorldUse:"Understanding why models work or fail in production", project:"Implement mean, variance, correlation, hypothesis test from scratch", prereqs:["Python & Data Libraries"], next:["Linear Regression"], time:10, resume:true },
      { skill:"Linear & Logistic Regression", importance:"Foundation algorithms — always asked in ML interviews", realWorldUse:"Predicting sales, churn, fraud probability in business", project:"Build both models from scratch AND with scikit-learn — compare", prereqs:["Statistics for ML"], next:["Decision Trees"], time:10, resume:true },
    ],
    intermediate: [
      { skill:"Decision Trees & Random Forests", importance:"Most interpretable powerful models — widely used in industry", realWorldUse:"Credit scoring, customer churn, fraud detection", project:"Build a customer churn predictor with feature importance analysis", prereqs:["Linear & Logistic Regression"], next:["XGBoost","Feature Engineering"], time:10, resume:true },
      { skill:"XGBoost & Gradient Boosting", importance:"Top Kaggle algorithm — dominates tabular data competitions", realWorldUse:"Real-time fraud detection, click-through rate prediction", project:"Win a Kaggle starter competition using XGBoost with tuning", prereqs:["Decision Trees & Random Forests"], next:["Hyperparameter Tuning"], time:10, resume:true },
      { skill:"Model Evaluation & Selection", importance:"Choosing the wrong metric can completely mislead your project", realWorldUse:"Selecting models for production based on business constraints", project:"Evaluate 5 models with cross-validation, ROC curves, and business metrics", prereqs:["XGBoost & Gradient Boosting"], next:["MLOps"], time:7, resume:true },
      { skill:"Unsupervised Learning", importance:"Most real-world data has no labels — clustering finds patterns", realWorldUse:"Customer segmentation, anomaly detection, dimensionality reduction", project:"Segment customers into meaningful groups using K-Means + PCA", prereqs:["Model Evaluation & Selection"], next:["NLP basics"], time:10, resume:true },
    ],
    advanced: [
      { skill:"MLOps & Production ML", importance:"ML in Jupyter notebooks creates zero business value", realWorldUse:"Building automated retraining pipelines, monitoring model drift", project:"Deploy an ML model as API and set up monitoring dashboard", prereqs:["Model Evaluation & Selection"], next:["Kubeflow","Airflow"], time:14, resume:true },
      { skill:"Deep Learning for ML", importance:"When tabular methods fail, DL takes over", realWorldUse:"Time series forecasting, recommendation engines, NLP tasks", project:"Build a time series forecasting model with LSTM vs XGBoost", prereqs:["MLOps & Production ML"], next:["Transformers"], time:21, resume:true },
    ]
  },

  deeplearning: {
    beginner: [
      { skill:"Neural Network Math", importance:"Can't debug what you can't understand — math is the debugger", realWorldUse:"Understanding why models fail: vanishing gradients, dead neurons", project:"Implement forward + backward pass in NumPy for a 2-layer network", prereqs:[], next:["Activation Functions","Backpropagation"], time:10, resume:true },
      { skill:"PyTorch Fundamentals", importance:"Industry-dominant DL framework — required for research roles", realWorldUse:"Building, training, saving, and loading neural networks", project:"Train a 3-layer MLP on MNIST achieving 98%+ accuracy", prereqs:["Neural Network Math"], next:["CNN","RNN"], time:14, resume:true },
    ],
    intermediate: [
      { skill:"Convolutional Neural Networks (CNN)", importance:"Foundation of all computer vision — billions of parameters deployed", realWorldUse:"Image recognition in medical imaging, autonomous vehicles, security", project:"Build CNN from scratch → classify CIFAR-10 with 85%+ accuracy", prereqs:["PyTorch Fundamentals"], next:["Transfer Learning","Object Detection"], time:14, resume:true },
      { skill:"Transfer Learning", importance:"Pre-trained models save months of training — industry standard", realWorldUse:"Fine-tuning ResNet/EfficientNet for custom tasks in weeks not months", project:"Fine-tune ResNet50 on a custom 10-class dataset", prereqs:["Convolutional Neural Networks (CNN)"], next:["Object Detection"], time:7, resume:true },
      { skill:"Recurrent Networks (RNN/LSTM)", importance:"Sequential data modeling — time series, text, audio", realWorldUse:"Stock prediction, speech recognition, text generation", project:"Build LSTM for sentiment analysis on tweets", prereqs:["PyTorch Fundamentals"], next:["Transformers","Attention Mechanism"], time:10, resume:true },
      { skill:"Transformers & Attention", importance:"Revolutionized AI — every state-of-the-art model uses attention", realWorldUse:"GPT, BERT, Vision Transformers — the backbone of modern AI", project:"Implement a mini Transformer for sequence prediction from scratch", prereqs:["Recurrent Networks (RNN/LSTM)"], next:["LLMs","ViT"], time:14, resume:true },
    ],
    advanced: [
      { skill:"GANs (Generative Adversarial Networks)", importance:"Generative AI foundation — image synthesis, data augmentation", realWorldUse:"Synthetic data generation, deepfakes detection, image editing", project:"Train a DCGAN to generate realistic faces on CelebA dataset", prereqs:["Convolutional Neural Networks (CNN)"], next:["Diffusion Models"], time:14, resume:true },
      { skill:"Diffusion Models", importance:"DALL-E, Stable Diffusion — hottest DL area in industry right now", realWorldUse:"Image generation, video synthesis, drug discovery", project:"Run and fine-tune Stable Diffusion on a custom style dataset", prereqs:["Transformers & Attention","GANs (Generative Adversarial Networks)"], next:["LoRA","Dreambooth"], time:14, resume:true },
      { skill:"Model Optimization & Quantization", importance:"Production DL must be fast — 10x smaller, 3x faster", realWorldUse:"Deploying models on mobile, edge devices, low-cost inference", project:"Quantize a ResNet model and measure accuracy vs speed tradeoff", prereqs:["Transfer Learning"], next:["ONNX","TensorRT"], time:10, resume:true },
    ]
  },

  cloud: {
    beginner: [
      { skill:"Cloud Fundamentals", importance:"Cloud is where every modern application lives", realWorldUse:"Deploying apps on AWS/Azure/GCP instead of local servers", project:"Host a static website on AWS S3 with CloudFront CDN", prereqs:[], next:["AWS Core Services","Networking in Cloud"], time:7, resume:true },
      { skill:"Linux & Bash for Cloud", importance:"Cloud servers are Linux — bash scripting automates everything", realWorldUse:"Automating deployments, cron jobs, server configuration scripts", project:"Write a bash script that backs up files to S3 automatically", prereqs:["Cloud Fundamentals"], next:["AWS Core Services"], time:7, resume:true },
      { skill:"Networking for Cloud", importance:"VPCs, subnets, security groups — cloud networking is mandatory", realWorldUse:"Designing secure, private cloud infrastructure", project:"Design a 3-tier VPC architecture on AWS with proper security groups", prereqs:["Cloud Fundamentals"], next:["IAM & Security"], time:7, resume:true },
    ],
    intermediate: [
      { skill:"AWS Core Services (EC2, S3, RDS)", importance:"AWS has 67% cloud market share — these services are everywhere", realWorldUse:"Running web servers, storing files, hosting databases in the cloud", project:"Deploy a 3-tier web app on EC2 + RDS + S3 fully", prereqs:["Cloud Fundamentals","Networking for Cloud"], next:["Lambda","ECS"], time:14, resume:true },
      { skill:"IAM & Cloud Security", importance:"Misconfigured IAM causes 75% of cloud security breaches", realWorldUse:"Role-based access control for entire cloud infrastructure", project:"Implement least-privilege IAM roles for a multi-service application", prereqs:["AWS Core Services (EC2, S3, RDS)"], next:["CloudTrail","GuardDuty"], time:7, resume:true },
      { skill:"Serverless (Lambda & API Gateway)", importance:"No servers to manage — event-driven apps at infinite scale", realWorldUse:"Building APIs, data processors without paying for idle servers", project:"Build a serverless REST API with Lambda + API Gateway + DynamoDB", prereqs:["AWS Core Services (EC2, S3, RDS)"], next:["Step Functions"], time:10, resume:true },
    ],
    advanced: [
      { skill:"Kubernetes on Cloud (EKS/GKE)", importance:"Container orchestration is the standard for production at scale", realWorldUse:"Running microservices at scale across hundreds of nodes", project:"Deploy a microservices app on EKS with auto-scaling and monitoring", prereqs:["Docker"], next:["Helm","Service Mesh"], time:14, resume:true },
      { skill:"Cloud Architecture & Design", importance:"Architects are the highest-paid cloud professionals", realWorldUse:"Designing fault-tolerant, cost-optimized systems for enterprises", project:"Design a disaster recovery solution with RTO < 1 hour", prereqs:["Kubernetes on Cloud (EKS/GKE)","IAM & Cloud Security"], next:["Well-Architected Framework"], time:14, resume:true },
    ]
  },

  devops: {
    beginner: [
      { skill:"Linux & Shell Scripting", importance:"DevOps runs on Linux — shell scripting is your daily tool", realWorldUse:"Automating server tasks, log analysis, deployment scripts", project:"Write a bash script to monitor CPU, memory, and alert via Slack", prereqs:[], next:["Git","Networking Basics"], time:10, resume:true },
      { skill:"Git & Version Control", importance:"Source control is the foundation of every software workflow", realWorldUse:"Branching strategies, code review, hotfix deployments", project:"Implement GitFlow branching strategy on a team project", prereqs:["Linux & Shell Scripting"], next:["Docker","CI/CD"], time:7, resume:true },
    ],
    intermediate: [
      { skill:"Docker & Containers", importance:"Containerization made DevOps what it is today", realWorldUse:"Packaging every app for consistent, reproducible deployments", project:"Containerize a multi-service app with docker-compose", prereqs:["Linux & Shell Scripting"], next:["Kubernetes","CI/CD"], time:10, resume:true },
      { skill:"CI/CD (Jenkins / GitHub Actions)", importance:"Automated pipelines are the core of DevOps culture", realWorldUse:"Automatically testing and deploying code on every commit", project:"Build a full CI/CD pipeline: test → build → deploy on push", prereqs:["Docker & Containers","Git & Version Control"], next:["ArgoCD"], time:10, resume:true },
      { skill:"Infrastructure as Code (Terraform)", importance:"Manually clicking cloud consoles is not scalable or reproducible", realWorldUse:"Provisioning AWS infrastructure consistently across environments", project:"Create Terraform code to provision a full AWS VPC with EC2 and RDS", prereqs:["Docker & Containers"], next:["Ansible","Pulumi"], time:14, resume:true },
    ],
    advanced: [
      { skill:"Kubernetes (Production)", importance:"K8s is the gold standard for container orchestration at scale", realWorldUse:"Running thousands of containers reliably at companies like Spotify", project:"Deploy an auto-scaling app on K8s with rolling updates and rollback", prereqs:["Docker & Containers","CI/CD (Jenkins / GitHub Actions)"], next:["Helm","Istio"], time:14, resume:true },
      { skill:"Monitoring & Observability", importance:"You can't fix what you can't see — monitoring is mandatory", realWorldUse:"Prometheus + Grafana dashboards, PagerDuty alerts in every SRE role", project:"Set up full monitoring stack: Prometheus + Grafana for your K8s cluster", prereqs:["Kubernetes (Production)"], next:["OpenTelemetry","ELK Stack"], time:10, resume:true },
    ]
  },

  android: {
    beginner: [
      { skill:"Kotlin Fundamentals", importance:"Kotlin is official Android language — Java is being phased out", realWorldUse:"Writing all Android app logic in modern, concise Kotlin", project:"Build a Kotlin CLI app: student grade calculator", prereqs:[], next:["Android Studio","UI Basics"], time:14, resume:true },
      { skill:"Android Studio & Project Setup", importance:"The only official Android IDE — knowing it saves hours daily", realWorldUse:"Creating projects, managing AVD, debugging apps", project:"Set up a project, run on emulator, fix a crash using logcat", prereqs:["Kotlin Fundamentals"], next:["UI Layouts","Activities"], time:5, resume:true },
      { skill:"Layouts & Jetpack Compose", importance:"Compose is the future of Android UI — legacy XML is dying", realWorldUse:"Building modern, reactive UIs at Google, Samsung, Spotify", project:"Build a responsive profile screen with Jetpack Compose", prereqs:["Android Studio & Project Setup"], next:["Navigation","State Management"], time:14, resume:true },
    ],
    intermediate: [
      { skill:"MVVM Architecture", importance:"Industry-standard Android pattern — expected in every interview", realWorldUse:"Separating UI, business logic, and data in scalable apps", project:"Refactor a basic app into clean MVVM with ViewModel + LiveData", prereqs:["Layouts & Jetpack Compose"], next:["Room DB","Retrofit"], time:10, resume:true },
      { skill:"Retrofit & REST APIs", importance:"Almost every app fetches data from a backend API", realWorldUse:"Consuming REST APIs with type-safe HTTP clients", project:"Build a news app fetching from a real API with Retrofit + Gson", prereqs:["MVVM Architecture"], next:["Coroutines"], time:7, resume:true },
      { skill:"Room Database", importance:"Local offline data is critical for good user experience", realWorldUse:"Offline-first apps, caching, local note/task storage", project:"Build an offline-first to-do app with Room + coroutines", prereqs:["MVVM Architecture"], next:["Firebase"], time:7, resume:true },
      { skill:"Firebase Integration", importance:"BaaS that powers millions of apps — auth, database, push notifications", realWorldUse:"Authentication, Firestore, Cloud Messaging in production apps", project:"Build a real-time chat app with Firebase Firestore and Auth", prereqs:["Room Database","Retrofit & REST APIs"], next:["Analytics","Crashlytics"], time:10, resume:true },
    ],
    advanced: [
      { skill:"Coroutines & Flow", importance:"Async in Android — replaces callbacks and RxJava entirely", realWorldUse:"Background operations, streaming data in modern Android apps", project:"Migrate a callback-based network call to coroutines + StateFlow", prereqs:["Retrofit & REST APIs"], next:["WorkManager"], time:10, resume:true },
      { skill:"App Publishing & Play Store", importance:"A developer who can ship is 10x more valuable", realWorldUse:"Signing, building release APK, Play Console submission", project:"Publish your app to Play Store (internal testing track)", prereqs:["Firebase Integration"], next:["Monetization","ASO"], time:7, resume:true },
    ]
  },

  blockchain: {
    beginner: [
      { skill:"Blockchain Fundamentals", importance:"Understanding the tech before building on it — mandatory base", realWorldUse:"Explaining blockchain architecture in interviews and technical discussions", project:"Implement a simple blockchain in Python with proof of work", prereqs:[], next:["Ethereum","Cryptography Basics"], time:7, resume:true },
      { skill:"Ethereum & Smart Contracts", importance:"Ethereum powers 90% of DeFi and NFT applications", realWorldUse:"Deploying contracts on mainnet/testnets for DeFi protocols", project:"Deploy your first smart contract to Ethereum testnet", prereqs:["Blockchain Fundamentals"], next:["Solidity"], time:10, resume:true },
    ],
    intermediate: [
      { skill:"Solidity Programming", importance:"The language of Ethereum smart contracts — essential for Web3 jobs", realWorldUse:"Writing ERC-20, ERC-721 contracts for tokens and NFTs", project:"Write, test, and deploy an ERC-20 token contract", prereqs:["Ethereum & Smart Contracts"], next:["Hardhat","OpenZeppelin"], time:14, resume:true },
      { skill:"Web3.js / Ethers.js", importance:"Connecting frontend to blockchain — required for DApp development", realWorldUse:"Building wallet connections, contract interactions in DApps", project:"Build a DApp frontend that reads/writes to your smart contract", prereqs:["Solidity Programming"], next:["DeFi protocols"], time:10, resume:true },
      { skill:"Smart Contract Security", importance:"$3B lost to smart contract hacks in 2023 — auditing is critical", realWorldUse:"Auditing contracts for reentrancy, overflow, access control issues", project:"Find and fix 5 vulnerabilities in a test vulnerable contract", prereqs:["Solidity Programming"], next:["Formal Verification"], time:10, resume:true },
    ],
    advanced: [
      { skill:"DeFi Protocol Development", importance:"Highest paying blockchain niche — $50k+ bounties available", realWorldUse:"Building AMMs, lending protocols, yield optimizers", project:"Fork and modify Uniswap V2 — add a custom fee mechanism", prereqs:["Web3.js / Ethers.js","Smart Contract Security"], next:["Layer 2","Cross-chain"], time:21, resume:true },
    ]
  },

  gamedev: {
    beginner: [
      { skill:"C# Fundamentals", importance:"Primary Unity language — strong typing, OOP patterns essential", realWorldUse:"Writing all game logic, AI, physics interactions in Unity", project:"Build a C# console RPG with inventory and combat system", prereqs:[], next:["Unity Basics","OOP"], time:14, resume:true },
      { skill:"Unity Engine Basics", importance:"Unity powers 50% of mobile games and 30% of all games worldwide", realWorldUse:"Building games for PC, mobile, console with one codebase", project:"Create a 2D platformer with movement, collision, and level design", prereqs:["C# Fundamentals"], next:["Physics","Animation"], time:14, resume:true },
    ],
    intermediate: [
      { skill:"Game Physics & Collision", importance:"Satisfying game feel depends entirely on physics implementation", realWorldUse:"Character controllers, rigidbody dynamics, physics puzzles", project:"Build a physics-based marble game with obstacles", prereqs:["Unity Engine Basics"], next:["Animation","AI"], time:10, resume:true },
      { skill:"Game AI (Pathfinding & FSM)", importance:"Enemy AI is what makes games challenging and fun", realWorldUse:"NavMesh pathfinding, finite state machines for enemy behavior", project:"Build enemy AI with patrol, chase, and attack states using NavMesh", prereqs:["Game Physics & Collision"], next:["Multiplayer"], time:10, resume:true },
      { skill:"UI/UX for Games", importance:"Bad game UI kills player retention instantly", realWorldUse:"HUDs, menus, inventory screens, dialog systems", project:"Design and implement a complete game UI: main menu, HUD, pause", prereqs:["Unity Engine Basics"], next:["Audio","Particles"], time:7, resume:false },
    ],
    advanced: [
      { skill:"Multiplayer Networking", importance:"Multiplayer games are the fastest-growing game category", realWorldUse:"Real-time sync, authoritative servers, lag compensation", project:"Build a 2-player real-time game using Mirror Networking", prereqs:["Game AI (Pathfinding & FSM)"], next:["Server Architecture"], time:21, resume:true },
      { skill:"Game Optimization & Profiling", importance:"Unoptimized games get 1-star reviews — performance is a feature", realWorldUse:"Reaching 60fps on mobile through draw call reduction, LOD", project:"Profile your game and reduce draw calls by 50% using profiler", prereqs:["Multiplayer Networking"], next:["Publishing"], time:10, resume:true },
    ]
  },

  uiux: {
    beginner: [
      { skill:"Design Principles (Gestalt)", importance:"Understanding why things look good is the foundation of design", realWorldUse:"Making design decisions defensible with theory in client meetings", project:"Redesign a cluttered UI applying Gestalt and visual hierarchy", prereqs:[], next:["Color Theory","Typography"], time:7, resume:true },
      { skill:"Color Theory & Typography", importance:"90% of design quality comes from color and type decisions", realWorldUse:"Creating brand guidelines, design systems for products", project:"Build a complete design system: colors, type scale, spacing tokens", prereqs:["Design Principles (Gestalt)"], next:["Figma Mastery"], time:7, resume:true },
      { skill:"Figma Mastery", importance:"Industry-standard design tool — required in every UX job posting", realWorldUse:"Designing, prototyping, and handoff in every product team", project:"Design a complete mobile app UI with components and auto-layout", prereqs:["Color Theory & Typography"], next:["Wireframing","Prototyping"], time:14, resume:true },
    ],
    intermediate: [
      { skill:"User Research Methods", importance:"Designing without research is guessing — companies pay for insights", realWorldUse:"User interviews, surveys, A/B tests in product teams", project:"Conduct 5 user interviews and synthesize findings into actionable insights", prereqs:["Figma Mastery"], next:["Usability Testing","Personas"], time:10, resume:true },
      { skill:"Prototyping & Interaction Design", importance:"High-fidelity prototypes sell ideas to stakeholders and clients", realWorldUse:"Interactive prototypes for user testing and developer handoff", project:"Build a fully interactive prototype with micro-animations in Figma", prereqs:["Figma Mastery"], next:["Usability Testing"], time:10, resume:true },
      { skill:"Design Systems", importance:"Scalable design — how product teams maintain consistency at scale", realWorldUse:"Building component libraries used by entire engineering teams", project:"Create a Figma design system with 50+ components and tokens", prereqs:["Prototyping & Interaction Design"], next:["Accessibility Design"], time:14, resume:true },
    ],
    advanced: [
      { skill:"Usability Testing & UX Metrics", importance:"Proving design decisions with data — stakeholders need numbers", realWorldUse:"SUS scores, task completion rates, heat maps to drive decisions", project:"Run a moderated usability test with 5 users and present findings", prereqs:["User Research Methods","Prototyping & Interaction Design"], next:["UX Strategy"], time:10, resume:true },
      { skill:"UX Portfolio Development", importance:"Your portfolio is your CV — without one, you won't get hired", realWorldUse:"Showcasing case studies with problem → research → solution → outcome", project:"Publish 3 detailed UX case studies with process documentation", prereqs:["Usability Testing & UX Metrics"], next:["Job Applications"], time:14, resume:true },
    ]
  },

  webdevelopment: {
    beginner: [
      { skill:"HTML5 & Semantics", importance:"Every website starts here — semantics improve SEO and accessibility", realWorldUse:"Structuring content for all web projects professionally", project:"Build a semantic blog with article, nav, aside, and footer tags", prereqs:[], next:["CSS3","JavaScript"], time:7, resume:true },
      { skill:"CSS3 & Modern Layouts", importance:"Modern CSS is powerful — Flexbox, Grid, custom properties", realWorldUse:"Styling production websites with clean, maintainable CSS", project:"Build a fully responsive multi-page website from scratch", prereqs:["HTML5 & Semantics"], next:["Tailwind CSS","JavaScript"], time:10, resume:true },
      { skill:"JavaScript Essentials", importance:"Makes web pages interactive — every frontend developer's core skill", realWorldUse:"Building dynamic UIs, form validation, API consumption", project:"Build a dynamic quiz app with timer and score tracking", prereqs:["HTML5 & Semantics","CSS3 & Modern Layouts"], next:["React.js","ES6+"], time:14, resume:true },
    ],
    intermediate: [
      { skill:"React.js / Next.js", importance:"Most in-demand frontend skill in web dev job market", realWorldUse:"Building SPAs, SSR apps, e-commerce platforms", project:"Build a full e-commerce frontend with cart, search, and filters", prereqs:["JavaScript Essentials"], next:["TypeScript","State Management"], time:21, resume:true },
      { skill:"TypeScript", importance:"JavaScript at scale — every serious web company uses TypeScript", realWorldUse:"Type-safe codebases, catching errors before runtime", project:"Migrate a React app from JS to TypeScript fully", prereqs:["React.js / Next.js"], next:["Testing","GraphQL"], time:10, resume:true },
      { skill:"API Integration & State", importance:"Real apps are powered by data from APIs", realWorldUse:"Fetching, caching, and managing server state with React Query", project:"Build a dashboard consuming 3 different APIs with loading/error states", prereqs:["React.js / Next.js"], next:["Backend Basics"], time:10, resume:true },
    ],
    advanced: [
      { skill:"Performance & Web Vitals", importance:"Core Web Vitals directly impact Google search ranking", realWorldUse:"Optimizing LCP, FID, CLS on production e-commerce sites", project:"Optimize a React app to score 95+ on Google Lighthouse", prereqs:["React.js / Next.js"], next:["SSR/SSG"], time:10, resume:true },
      { skill:"Testing (Jest + Playwright)", importance:"Untested code is a liability — tested code is an asset", realWorldUse:"Unit tests, E2E tests in every professional web project", project:"Achieve 80%+ test coverage on your React app with Jest + Playwright", prereqs:["TypeScript"], next:["CI/CD"], time:10, resume:true },
    ]
  },

  softwareengineering: {
    beginner: [
      { skill:"Programming Fundamentals (OOP)", importance:"Object-oriented thinking is the lingua franca of software engineering", realWorldUse:"Designing classes, inheritance hierarchies in every codebase", project:"Implement a library management system using OOP principles", prereqs:[], next:["Data Structures","SOLID Principles"], time:14, resume:true },
      { skill:"Data Structures", importance:"Asked in every technical interview — non-negotiable", realWorldUse:"Choosing the right structure reduces app latency by orders of magnitude", project:"Implement Array, LinkedList, Stack, Queue, Hash Map from scratch", prereqs:["Programming Fundamentals (OOP)"], next:["Algorithms"], time:14, resume:true },
    ],
    intermediate: [
      { skill:"Algorithms & Complexity", importance:"Efficient code at scale — O(n²) that works becomes O(n log n) that scales", realWorldUse:"Optimizing database queries, search, and data processing pipelines", project:"Solve 30 LeetCode problems: 10 easy, 15 medium, 5 hard", prereqs:["Data Structures"], next:["Design Patterns"], time:21, resume:true },
      { skill:"Design Patterns (SOLID + GoF)", importance:"Communication language of experienced engineers — patterns = shared vocabulary", realWorldUse:"Factory, Observer, Strategy patterns in real-world production code", project:"Refactor a messy codebase applying at least 4 design patterns", prereqs:["Algorithms & Complexity"], next:["System Design"], time:10, resume:true },
      { skill:"Databases & SQL", importance:"Every application needs persistent data — SQL is 50 years old and still dominant", realWorldUse:"Writing complex queries, indexing strategies, schema design", project:"Design a normalized database schema for a social media platform", prereqs:["Programming Fundamentals (OOP)"], next:["NoSQL","ORM"], time:10, resume:true },
    ],
    advanced: [
      { skill:"System Design", importance:"The final boss of software engineering interviews at FAANG", realWorldUse:"Designing Twitter, YouTube, Uber at scale — senior engineer conversations", project:"Design Twitter's timeline feature handling 1M concurrent users", prereqs:["Design Patterns (SOLID + GoF)","Databases & SQL"], next:["Distributed Systems"], time:21, resume:true },
      { skill:"Distributed Systems", importance:"Modern software is distributed — CAP theorem, consensus, replication", realWorldUse:"Building systems that survive server failures and network partitions", project:"Implement a simple distributed key-value store with replication", prereqs:["System Design"], next:["Microservices Architecture"], time:14, resume:true },
    ]
  }
};

// =============================================================================
// YOUTUBE CHANNELS DATA
// =============================================================================
const ytChannels = {
  fullstack:[
    {name:"Traversy Media",desc:"Full stack crash courses & project builds for all frameworks",url:"https://www.youtube.com/@TraversyMedia",icon:"🎯"},
    {name:"The Net Ninja",desc:"Step-by-step React, Node, MongoDB, GraphQL tutorials",url:"https://www.youtube.com/@NetNinja",icon:"🥷"},
    {name:"Fireship",desc:"100-second tech concepts and in-depth dev tutorials",url:"https://www.youtube.com/@Fireship",icon:"🔥"},
    {name:"Academind",desc:"Deep dives into React, Angular, Node full stack architecture",url:"https://www.youtube.com/@academind",icon:"📚"},
    {name:"Web Dev Simplified",desc:"Clean explanations of web concepts with real project demos",url:"https://www.youtube.com/@WebDevSimplified",icon:"💡"},
  ],
  datascience:[
    {name:"Krish Naik",desc:"End-to-end data science and ML with real industry projects",url:"https://www.youtube.com/@krishnaik06",icon:"🤖"},
    {name:"StatQuest",desc:"Statistics and ML explained with clarity and humor",url:"https://www.youtube.com/@statquest",icon:"📊"},
    {name:"Alex The Analyst",desc:"Data analytics, SQL, Python and Power BI for beginners",url:"https://www.youtube.com/@AlexTheAnalyst",icon:"📈"},
    {name:"Ken Jee",desc:"Data science career advice and portfolio building",url:"https://www.youtube.com/@KenJee_ds",icon:"💼"},
    {name:"Corey Schafer",desc:"Best Python tutorials — clean, professional, thorough",url:"https://www.youtube.com/@coreyms",icon:"🐍"},
  ],
  cybersecurity:[
    {name:"NetworkChuck",desc:"Hacking, networking, Linux explained with energy and clarity",url:"https://www.youtube.com/@NetworkChuck",icon:"🌐"},
    {name:"The Cyber Mentor",desc:"Ethical hacking, pentesting and bug bounty from a pro",url:"https://www.youtube.com/@TCMSecurityAcademy",icon:"🛡️"},
    {name:"John Hammond",desc:"CTF walkthroughs, malware analysis, real hacking challenges",url:"https://www.youtube.com/@_JohnHammond",icon:"🔍"},
    {name:"LiveOverflow",desc:"Binary exploitation, reverse engineering, deep security research",url:"https://www.youtube.com/@LiveOverflow",icon:"⚡"},
    {name:"David Bombal",desc:"Networking, Python scripting, CEH and OSCP prep",url:"https://www.youtube.com/@davidbombal",icon:"💻"},
  ],
  ai:[
    {name:"Andrej Karpathy",desc:"Deep AI insights from ex-Tesla AI Director, OpenAI researcher",url:"https://www.youtube.com/@AndrejKarpathy",icon:"🧠"},
    {name:"Two Minute Papers",desc:"AI research papers summarized in engaging, accessible videos",url:"https://www.youtube.com/@TwoMinutePapers",icon:"📄"},
    {name:"Yannic Kilcher",desc:"AI paper deep dives, ML research explained for practitioners",url:"https://www.youtube.com/@YannicKilcher",icon:"🔬"},
    {name:"Sentdex",desc:"Python ML and AI projects with hands-on practical coding",url:"https://www.youtube.com/@sentdex",icon:"🐍"},
    {name:"3Blue1Brown",desc:"Neural networks visually explained — most beautiful math channel",url:"https://www.youtube.com/@3blue1brown",icon:"🔵"},
  ],
  ml:[
    {name:"Krish Naik",desc:"Complete ML pipelines from EDA to deployment with real projects",url:"https://www.youtube.com/@krishnaik06",icon:"🤖"},
    {name:"StatQuest",desc:"ML algorithms explained visually and with statistical rigor",url:"https://www.youtube.com/@statquest",icon:"📊"},
    {name:"3Blue1Brown",desc:"Gradient descent, neural networks — math made beautiful",url:"https://www.youtube.com/@3blue1brown",icon:"🔵"},
    {name:"Abhishek Thakur",desc:"ML competitions, Kaggle strategies, advanced techniques",url:"https://www.youtube.com/@AbhishekThakurAbhi",icon:"🏆"},
    {name:"Sentdex",desc:"scikit-learn, pandas, real-world ML project tutorials",url:"https://www.youtube.com/@sentdex",icon:"🐍"},
  ],
  deeplearning:[
    {name:"Andrej Karpathy",desc:"Build neural networks from scratch — best DL teacher alive",url:"https://www.youtube.com/@AndrejKarpathy",icon:"🧠"},
    {name:"Aladdin Persson",desc:"PyTorch implementations of all major DL architectures",url:"https://www.youtube.com/@AladdinPersson",icon:"⚡"},
    {name:"Yannic Kilcher",desc:"Transformer papers, attention, cutting-edge DL research",url:"https://www.youtube.com/@YannicKilcher",icon:"🔬"},
    {name:"Two Minute Papers",desc:"Latest DL breakthroughs made digestible",url:"https://www.youtube.com/@TwoMinutePapers",icon:"📄"},
    {name:"3Blue1Brown",desc:"Backpropagation and transformers explained visually",url:"https://www.youtube.com/@3blue1brown",icon:"🔵"},
  ],
  cloud:[
    {name:"TechWorld with Nana",desc:"Docker, Kubernetes, DevOps and cloud — best structured courses",url:"https://www.youtube.com/@TechWorldwithNana",icon:"☁️"},
    {name:"AWS Official",desc:"Official AWS architecture patterns and certification prep",url:"https://www.youtube.com/@amazonwebservices",icon:"🟠"},
    {name:"NetworkChuck",desc:"Cloud basics, AWS, Azure explained for beginners",url:"https://www.youtube.com/@NetworkChuck",icon:"🌐"},
    {name:"Stephane Maarek",desc:"AWS certification deep dives — SAA, DVA, SAP",url:"https://www.youtube.com/@StephaneMaarek",icon:"🏅"},
    {name:"CloudWithRaj",desc:"AWS and Azure real-world projects and architecture",url:"https://www.youtube.com/@CloudWithRaj",icon:"🚀"},
  ],
  devops:[
    {name:"TechWorld with Nana",desc:"Best DevOps channel — Docker, K8s, CI/CD, Terraform all covered",url:"https://www.youtube.com/@TechWorldwithNana",icon:"⚙️"},
    {name:"Kunal Kushwaha",desc:"DevOps bootcamp, Docker, Kubernetes, open source contributions",url:"https://www.youtube.com/@KunalKushwaha",icon:"🎓"},
    {name:"DevOps Directive",desc:"Terraform, CI/CD pipelines, infrastructure as code deep dives",url:"https://www.youtube.com/@DevOpsDirective",icon:"🔧"},
    {name:"That DevOps Guy",desc:"Kubernetes deep dives, Helm, service mesh tutorials",url:"https://www.youtube.com/@MarcelDempers",icon:"👨‍💻"},
    {name:"NetworkChuck",desc:"Linux, Docker, networking made engaging and practical",url:"https://www.youtube.com/@NetworkChuck",icon:"🌐"},
  ],
  android:[
    {name:"Philipp Lackner",desc:"Modern Android with Kotlin, Jetpack Compose, Clean Architecture",url:"https://www.youtube.com/@PhilippLackner",icon:"🤖"},
    {name:"Stevdza-San",desc:"Jetpack Compose, Retrofit, Room DB — modern Android UI",url:"https://www.youtube.com/@StevdzaSan",icon:"💡"},
    {name:"Android Developers",desc:"Official Google Android tutorials and architecture guidance",url:"https://www.youtube.com/@AndroidDevelopers",icon:"🟢"},
    {name:"Coding with Mitch",desc:"Kotlin, MVVM, Firebase — complete Android project builds",url:"https://www.youtube.com/@CodingWithMitch",icon:"📱"},
    {name:"Simplified Coding",desc:"Android beginner-friendly projects and Firebase integration",url:"https://www.youtube.com/@SimplifiedCoding",icon:"🎯"},
  ],
  blockchain:[
    {name:"Patrick Collins",desc:"Solidity, DeFi, smart contracts — gold standard Web3 education",url:"https://www.youtube.com/@PatrickAlphaC",icon:"⛓️"},
    {name:"Dapp University",desc:"Ethereum DApp development and Solidity contract tutorials",url:"https://www.youtube.com/@DappUniversity",icon:"🏛️"},
    {name:"Eat The Blocks",desc:"Solidity smart contracts and DeFi protocol development",url:"https://www.youtube.com/@EatTheBlocks",icon:"🍴"},
    {name:"Whiteboard Crypto",desc:"Blockchain concepts explained visually for all levels",url:"https://www.youtube.com/@WhiteboardCrypto",icon:"📋"},
    {name:"Smart Contract Programmer",desc:"Advanced Solidity patterns and security best practices",url:"https://www.youtube.com/@smartcontractprogrammer",icon:"🔐"},
  ],
  gamedev:[
    {name:"Brackeys",desc:"Unity tutorials and game design — the legendary game dev channel",url:"https://www.youtube.com/@Brackeys",icon:"🎮"},
    {name:"Code Monkey",desc:"Unity C# scripting, game systems, clean architecture tutorials",url:"https://www.youtube.com/@CodeMonkeyUnity",icon:"🐒"},
    {name:"Game Maker's Toolkit",desc:"Game design theory, mechanics — how great games are built",url:"https://www.youtube.com/@GMTK",icon:"🕹️"},
    {name:"GDQuest",desc:"Godot engine tutorials and open-source game dev projects",url:"https://www.youtube.com/@Gdquest",icon:"👾"},
    {name:"Thomas Brush",desc:"Indie dev journey, Steam publishing, game design tips",url:"https://www.youtube.com/@thomasbrush",icon:"🖌️"},
  ],
  uiux:[
    {name:"DesignCourse",desc:"UI/UX design, Figma, web design and brand identity tutorials",url:"https://www.youtube.com/@DesignCourse",icon:"🎨"},
    {name:"Figma Official",desc:"Prototyping, components, variables and design systems in Figma",url:"https://www.youtube.com/@Figma",icon:"🖍️"},
    {name:"AJ&Smart",desc:"Design sprints, UX strategy and product design process",url:"https://www.youtube.com/@AJSmart",icon:"💡"},
    {name:"Flux Academy",desc:"Web design, Figma workflows, freelance UX career advice",url:"https://www.youtube.com/@FluxAcademy",icon:"✨"},
    {name:"Jesse Showalter",desc:"UI walkthroughs, design critiques, portfolio reviews",url:"https://www.youtube.com/@JesseShowalter",icon:"🔍"},
  ],
  webdevelopment:[
    {name:"Traversy Media",desc:"HTML, CSS, JS and all major frameworks — essential channel",url:"https://www.youtube.com/@TraversyMedia",icon:"🎯"},
    {name:"Kevin Powell",desc:"CSS deep dives, modern layouts, responsive design mastery",url:"https://www.youtube.com/@KevinPowell",icon:"👑"},
    {name:"The Net Ninja",desc:"React, Next.js, TypeScript — step-by-step web dev courses",url:"https://www.youtube.com/@NetNinja",icon:"🥷"},
    {name:"Fireship",desc:"Web tech trends, framework comparisons, fast-paced tutorials",url:"https://www.youtube.com/@Fireship",icon:"🔥"},
    {name:"Web Dev Simplified",desc:"Clear tutorials focused on concepts and real projects",url:"https://www.youtube.com/@WebDevSimplified",icon:"💻"},
  ],
  softwareengineering:[
    {name:"NeetCode",desc:"DSA, system design, LeetCode — the best SWE interview prep",url:"https://www.youtube.com/@NeetCode",icon:"💡"},
    {name:"Gaurav Sen",desc:"System design, scalability and distributed systems explained",url:"https://www.youtube.com/@gkcs",icon:"⚡"},
    {name:"Abdul Bari",desc:"Algorithms, data structures, CS fundamentals — top rated",url:"https://www.youtube.com/@abdul_bari",icon:"📚"},
    {name:"Hussein Nasser",desc:"Backend engineering, databases, protocols, software design",url:"https://www.youtube.com/@hnasr",icon:"🔧"},
    {name:"ByteByteGo",desc:"System design visual explanations — used by engineers worldwide",url:"https://www.youtube.com/@ByteByteGo",icon:"📐"},
  ],
};

// =============================================================================
// STATE
// =============================================================================
let currentDomain = localStorage.getItem("selectedDomain") || "";
let currentLevel = "beginner";
let currentFilter = "all";
let bookmarks = JSON.parse(localStorage.getItem("bookmarks_" + currentDomain) || "[]");
const CIRC = 2 * Math.PI * 24; // circumference for rings r=24

// =============================================================================
// DOMAIN DISPLAY NAMES
// =============================================================================
const domainNames = {
  fullstack:"Full Stack Development", datascience:"Data Science",
  cybersecurity:"Cyber Security", ai:"Artificial Intelligence",
  ml:"Machine Learning", deeplearning:"Deep Learning",
  cloud:"Cloud Computing", devops:"DevOps",
  android:"Android Development", blockchain:"Blockchain",
  gamedev:"Game Development", uiux:"UI/UX Design",
  webdevelopment:"Web Development", softwareengineering:"Software Engineering"
};

// =============================================================================
// INIT
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  if (!currentDomain) {
    document.body.innerHTML = `<div style="text-align:center;padding:80px;font-family:'JetBrains Mono',monospace;color:#00f0ff;background:#050505;min-height:100vh"><h2>// NO DOMAIN SELECTED</h2><a href="index.html" style="color:#00f0ff">← Return to Domain Select</a></div>`;
    return;
  }

  // Check login
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html"; return;
  }

  bookmarks = JSON.parse(localStorage.getItem("bookmarks_" + currentDomain) || "[]");

  document.getElementById("domainTitle").textContent = (domainNames[currentDomain] || currentDomain.toUpperCase()) + " ROADMAP";
  document.getElementById("sidebarDomain").textContent = domainNames[currentDomain] || currentDomain.toUpperCase();
  document.getElementById("userBadge").textContent = "👤 " + (localStorage.getItem("userEmail") || "USER");

  updateStreak();
  renderSkills();
  renderAllRings();
  renderYT();
  renderResumeSkills();
  updateDailyGoal();
  estimatePath();
});

// =============================================================================
// STREAK TRACKING
// =============================================================================
function updateStreak() {
  const today = new Date().toDateString();
  const last = localStorage.getItem("lastVisit");
  let streak = parseInt(localStorage.getItem("streak") || "0");
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  if (last === today) {
    // same day — no change
  } else if (last === yesterday) {
    streak++;
    localStorage.setItem("streak", streak);
  } else if (!last) {
    streak = 1;
    localStorage.setItem("streak", streak);
  } else {
    streak = 1;
    localStorage.setItem("streak", 1);
  }
  localStorage.setItem("lastVisit", today);
  document.getElementById("streakNum").textContent = streak;
}

// =============================================================================
// SWITCH LEVEL
// =============================================================================
function switchLevel(level, btn) {
  currentLevel = level;
  document.querySelectorAll(".level-tab").forEach(t => t.classList.remove("active"));
  if (btn) btn.classList.add("active");
  document.getElementById("searchInput").value = "";
  currentFilter = "all";
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".filter-btn")[0]?.classList.add("active");
  renderSkills();
  termLog(`Level switched → ${level.toUpperCase()}`);
}

// =============================================================================
// RENDER SKILLS
// =============================================================================
function renderSkills() {
  const grid = document.getElementById("skillGrid");
  const domain = roadmaps[currentDomain];
  if (!domain) { grid.innerHTML = "<p style='color:#888'>No roadmap data found.</p>"; return; }

  const skills = domain[currentLevel] || [];
  const search = (document.getElementById("searchInput")?.value || "").toLowerCase();

  let filtered = skills.filter((s, i) => {
    const id = skillId(currentLevel, i);
    const done = localStorage.getItem(id) === "true";
    const bm = bookmarks.includes(id);
    if (search && !s.skill.toLowerCase().includes(search)) return false;
    if (currentFilter === "resume" && !s.resume) return false;
    if (currentFilter === "bookmark" && !bm) return false;
    if (currentFilter === "incomplete" && done) return false;
    if (currentFilter === "done" && !done) return false;
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state">// NO SKILLS MATCH FILTER<br><small>Try changing your search or filter</small></div>`;
    return;
  }

  grid.innerHTML = "";
  filtered.forEach((s, idx) => {
    const origIdx = skills.indexOf(s);
    const id = skillId(currentLevel, origIdx);
    const done = localStorage.getItem(id) === "true";
    const bm = bookmarks.includes(id);
    const card = document.createElement("div");
    card.className = "skill-card" + (done ? " skill-done" : "");
    card.dataset.id = id;

    card.innerHTML = `
      <div class="sk-header">
        <div class="sk-num">${String(origIdx + 1).padStart(2,"0")}</div>
        <div class="sk-name">${s.skill}</div>
        <div class="sk-badges">
          ${s.resume ? '<span class="badge badge-resume">RESUME</span>' : ''}
          <span class="badge badge-time">~${s.time}d</span>
        </div>
      </div>
      <div class="sk-importance">${s.importance}</div>
      <div class="sk-meta">
        <div class="sk-meta-row"><span class="sk-meta-label">⚡ REAL WORLD</span><span class="sk-meta-val">${s.realWorldUse}</span></div>
        <div class="sk-meta-row"><span class="sk-meta-label">🛠 PROJECT</span><span class="sk-meta-val">${s.project}</span></div>
        ${s.prereqs.length ? `<div class="sk-meta-row"><span class="sk-meta-label">📋 PREREQS</span><span class="sk-meta-val">${s.prereqs.join(", ")}</span></div>` : ''}
        ${s.next.length ? `<div class="sk-meta-row"><span class="sk-meta-label">→ NEXT</span><span class="sk-meta-val">${s.next.join(", ")}</span></div>` : ''}
      </div>
      <div class="sk-footer">
        <button class="sk-bookmark ${bm?'bm-active':''}" onclick="toggleBookmark('${id}',this)" title="Bookmark">🔖</button>
        <button class="sk-complete ${done?'done-active':''}" onclick="toggleComplete('${id}',this,${origIdx})">
          ${done ? '✅ COMPLETED' : '○ MARK DONE'}
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// =============================================================================
// COMPLETE SKILL
// =============================================================================
function toggleComplete(id, btn, idx) {
  const done = localStorage.getItem(id) === "true";
  const newDone = !done;
  localStorage.setItem(id, newDone);

  const card = document.querySelector(`[data-id="${id}"]`);
  if (card) {
    card.classList.toggle("skill-done", newDone);
    const completeBtn = card.querySelector(".sk-complete");
    if (completeBtn) completeBtn.textContent = newDone ? "✅ COMPLETED" : "○ MARK DONE";
    completeBtn?.classList.toggle("done-active", newDone);
  }

  const skillName = roadmaps[currentDomain]?.[currentLevel]?.[idx]?.skill || "Skill";
  termLog(newDone ? `✔ Completed: ${skillName}` : `✗ Unmarked: ${skillName}`);

  if (newDone) {
    bumpDailyGoal();
    showCompletionBurst(card);
  }

  renderAllRings();
}

// =============================================================================
// BOOKMARK
// =============================================================================
function toggleBookmark(id, btn) {
  const i = bookmarks.indexOf(id);
  if (i === -1) { bookmarks.push(id); btn.classList.add("bm-active"); }
  else { bookmarks.splice(i, 1); btn.classList.remove("bm-active"); }
  localStorage.setItem("bookmarks_" + currentDomain, JSON.stringify(bookmarks));
}

// =============================================================================
// FILTER & SEARCH
// =============================================================================
function setFilter(f, btn) {
  currentFilter = f;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderSkills();
}

function filterSkills() { renderSkills(); }

// =============================================================================
// PROGRESS RINGS
// =============================================================================
function getLevelProgress(level) {
  const domain = roadmaps[currentDomain];
  if (!domain || !domain[level]) return { done: 0, total: 0, pct: 0 };
  const total = domain[level].length;
  let done = 0;
  domain[level].forEach((_, i) => { if (localStorage.getItem(skillId(level, i)) === "true") done++; });
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
}

function renderAllRings() {
  const levels = ["beginner","intermediate","advanced"];
  const ids = ["ringBeg","ringInt","ringAdv"];
  const pctIds = ["pctBeg","pctInt","pctAdv"];
  let totalDone = 0, totalSkills = 0;

  levels.forEach((lv, i) => {
    const { done, total, pct } = getLevelProgress(lv);
    totalDone += done; totalSkills += total;
    const dash = (pct / 100) * CIRC;
    const ring = document.getElementById(ids[i]);
    if (ring) ring.setAttribute("stroke-dasharray", `${dash} ${CIRC}`);
    const pctEl = document.getElementById(pctIds[i]);
    if (pctEl) pctEl.textContent = pct + "%";
  });

  const overall = totalSkills ? Math.round((totalDone / totalSkills) * 100) : 0;
  const mf = document.getElementById("masteryFill");
  if (mf) mf.style.width = overall + "%";
  const mp = document.getElementById("masteryPct");
  if (mp) mp.textContent = overall + "%";
}

// =============================================================================
// DAILY GOAL
// =============================================================================
function updateDailyGoal() {
  const today = new Date().toDateString();
  const todayDone = parseInt(localStorage.getItem("dailyDone_" + today) || "0");
  const goal = 3;
  const pct = Math.min(100, (todayDone / goal) * 100);
  const gf = document.getElementById("goalFill");
  if (gf) gf.style.width = pct + "%";
  const gt = document.getElementById("goalText");
  if (gt) gt.textContent = `${todayDone}/${goal} skills today`;
}

function bumpDailyGoal() {
  const today = new Date().toDateString();
  const key = "dailyDone_" + today;
  const cur = parseInt(localStorage.getItem(key) || "0");
  localStorage.setItem(key, cur + 1);
  updateDailyGoal();
}

// =============================================================================
// PERSONALIZATION
// =============================================================================
function applyPersonalization() {
  const hrs = parseInt(document.getElementById("timeSelect")?.value || "2");
  const goal = document.getElementById("goalSelect")?.value || "job";

  const domain = roadmaps[currentDomain];
  if (!domain) return;

  let totalDays = 0;
  ["beginner","intermediate","advanced"].forEach(lv => {
    (domain[lv] || []).forEach(s => { totalDays += s.time; });
  });

  const multipliers = { job: 1, internship: 0.7, skills: 1.2, project: 1.4 };
  const adjustedDays = Math.round((totalDays / hrs) * multipliers[goal]);
  const weeks = Math.ceil(adjustedDays / 7);

  const est = document.getElementById("pbEstimate");
  if (est) est.textContent = `⏱ Estimated: ${weeks} weeks to completion`;

  termLog(`Path personalized → ${hrs}h/day, goal: ${goal} → ~${weeks} weeks`);
}

function estimatePath() {
  applyPersonalization();
}

// =============================================================================
// YOUTUBE CHANNELS
// =============================================================================
function renderYT() {
  const grid = document.getElementById("ytGrid");
  if (!grid) return;
  const channels = ytChannels[currentDomain] || [];
  grid.innerHTML = "";
  channels.forEach(ch => {
    const card = document.createElement("div");
    card.className = "yt-card";
    card.innerHTML = `
      <div class="yt-icon">${ch.icon}</div>
      <h3>${ch.name}</h3>
      <p>${ch.desc}</p>
      <a href="${ch.url}" target="_blank" class="yt-btn">WATCH →</a>
    `;
    grid.appendChild(card);
  });
}

// =============================================================================
// RESUME SKILLS
// =============================================================================
function renderResumeSkills() {
  const grid = document.getElementById("resumeGrid");
  if (!grid) return;
  const domain = roadmaps[currentDomain];
  if (!domain) return;

  const resumeSkills = [];
  ["beginner","intermediate","advanced"].forEach(lv => {
    (domain[lv] || []).forEach((s, i) => {
      if (s.resume) resumeSkills.push({ ...s, level: lv, idx: i });
    });
  });

  grid.innerHTML = "";
  resumeSkills.forEach(s => {
    const id = skillId(s.level, s.idx);
    const done = localStorage.getItem(id) === "true";
    const tag = document.createElement("div");
    tag.className = "resume-tag" + (done ? " resume-done" : "");
    tag.innerHTML = `<span>${done ? "✅" : "○"}</span> ${s.skill} <span class="resume-level">${s.level.toUpperCase().substring(0,3)}</span>`;
    grid.appendChild(tag);
  });
}

// =============================================================================
// HELPERS
// =============================================================================
function skillId(level, index) {
  return `${currentDomain}-${level}-${index}`;
}

function termLog(msg) {
  const el = document.getElementById("tlMsg");
  if (el) el.textContent = msg;
}

function showCompletionBurst(card) {
  if (!card) return;
  card.style.transition = "box-shadow 0.3s ease";
  card.style.boxShadow = "0 0 30px #00ff88, 0 0 60px rgba(0,255,136,0.3)";
  setTimeout(() => { card.style.boxShadow = ""; }, 800);
}

// Expose for HTML buttons
window.switchLevel = switchLevel;
window.setFilter = setFilter;
window.filterSkills = filterSkills;
window.toggleComplete = toggleComplete;
window.toggleBookmark = toggleBookmark;
window.applyPersonalization = applyPersonalization;

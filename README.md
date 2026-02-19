# 🛡️ Cyber Carnival: Password Security Analyzer
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![Color Feedback](https://img.shields.io/badge/Dynamic-Color%20Feedback-orange)
![Entropy](https://img.shields.io/badge/Entropy-Based-Strength-blue)
![Crack Time](https://img.shields.io/badge/Crack%20Time-Estimation-red)
![Character Analysis](https://img.shields.io/badge/Character%20Class-Analysis-purple)
![Security Suggestions](https://img.shields.io/badge/Actionable-Security%20Tips-green)
![Privacy First](https://img.shields.io/badge/Privacy-Local%20Processing-lightgrey)


*Presented to the judges and various students present at VIT BHOPAL UNIVERSITY FOR CYBER CARNIVAL HACKATHON*  
*TEAM MEMBER NAMES*
*(TEAM LEADER) YUGAL SINGH RAO*
*(TEAM MEMBER) PUSHKAR BANJARA*
*(TEAM MEMBER) ARYAN KUMAR*
*(TEAM MEMBER) ABHINAV MAHESH PATIL*

**An interactive web application that analyzes password strength in real-time using entropy calculations, character set analysis, and estimated crack times. Applying the cybersecurity concepts and learn how  to create strong passwords!**

✨ Key Features

Real-Time Analysis: Instant feedback as you type—no "Submit" button required.

Entropy Calculation: Measures the information density of the password in bits using Shannon's Entropy principles.

Brute-Force Estimator: Predicts the time required to crack the password based on a high-end attack cluster performing 100 billion guesses per second.

Complexity Checklist: Visual indicators for length, uppercase, lowercase, numerical, and symbol requirements.

High-Tech UI: A modern "Cyber" aesthetic featuring glassmorphism, dynamic gradients, and fluid CSS transitions.

Privacy First: Entirely client-side execution; your password never leaves your browser.

🚀 Quick Start

Since this is a self-contained application, no complex installation is required.

Clone or Download:

git clone [https://github.com/abhiop144/password_analyser_project.git](https://github.com/abhiop144/password_analyser_project.git)


Open:
Simply double-click index.html to open it in any modern web browser.

🧠 Technical Deep Dive

1. Entropy Formula

The strength of the password is calculated using the formula:


$$E = L \cdot \log_2(R)$$


Where:

$E$: Entropy in bits.

$L$: Length of the password.

$R$: The size of the character pool (range) used (e.g., 26 for lowercase, 62 for alphanumeric, etc.).

2. Brute-Force Model

The crack time estimation assumes an attacker is using a distributed GPU cluster or custom ASIC hardware capable of approximately $10^{11}$ (100 Billion) guesses per second. This represents a sophisticated modern threat level.

<img width="1037" height="391" alt="image" src="https://github.com/user-attachments/assets/002baa79-b8f7-44f3-bbe8-ade82477683c" />

🌐 Deployment (GitHub Pages)
This project is optimized for GitHub Pages:
Upload index.html to a public GitHub repository.
Go to Settings > Pages.

Select the main branch and click Save.

This tool will be live at https://abhiop144.github.io/password_analyser_project/.

🛠️ Built With

HTML5/CSS3

Tailwind CSS (Utility-first styling)

Vanilla JavaScript (ES6+ Logic)

Google Fonts (Inter)

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

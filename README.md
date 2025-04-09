# SafeTalk.ai  
*Empowering Crisis Responders with AI-Driven Training*

## Table of Contents
- [About the Project](#about-the-project)
  - [How We Built It](#how-we-built-it)
  - [What We Learned](#what-we-learned)
  - [Challenges We Faced](#challenges-we-faced)
  - [Impact & Future Goals](#impact--future-goals)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## About the Project

SafeTalk.ai is an accessible, AI-driven training platform designed for crisis responders. Born from a deeply personal experience and the critical need for better crisis intervention tools, SafeTalk.ai equips responders with the skills to recognize warning signs, offer meaningful support, and connect individuals in crisis with life-saving resources.

### How We Built It
SafeTalk.ai leverages cutting-edge technology to simulate real-world crisis scenarios in a safe training environment:

- **Frontend:** Built with **React**, styled using **Tailwind CSS**, and enhanced by **Framer Motion** for engaging animations.
- **Backend:** Powered by **Django** with a modern API layer and integrated with **MongoDB** for storing user interactions.
- **AI Integration:** Uses **OpenAI’s API** (including GPT-4) to generate realistic, dynamic crisis conversations.
- **Data Visualization:** Implements **D3.js** for real-time analytics on training progress.

The repository (named **BL-sptrainer**) contains distinct folders for each component—`frontend`, `backend`, and `api`—which collectively power the SafeTalk.ai platform.

### What We Learned
Throughout development, we gained deep insights into:

- **Intuitive UX:** Creating a user-friendly and secure environment essential for crisis response training.
- **Real-Time Analytics:** Using data visualization to provide actionable insights and performance tracking in high-pressure scenarios.
- **AI-Driven Simulations:** Crafting engaging crisis scenarios that enhance decision-making and crisis intervention skills.
- **Data Security:** Ensuring robust data protection and privacy compliance while delivering accessible tools.

### Challenges We Faced
The journey to build SafeTalk.ai was not without its hurdles:

- **AI Accuracy & Bias:** Calibrating the AI to provide reliable, best-practice mental health responses.
- **Realistic Crisis Scenarios:** Balancing authenticity with emotional intelligence in simulated conversations.
- **System Integration:** Seamlessly linking frontend components with backend services and the AI engine.
- **Performance Optimization:** Managing fluid animations and responsive interactions without compromising speed.
- **Resource Management:** Navigating the demands of developing this platform alongside other commitments.

### Impact & Future Goals
SafeTalk.ai is more than just a tool—it’s part of a mission to empower crisis responders and save lives. Our future plans include:

- Expanding the AI’s capability with real-world training data.
- Partnering with mental health organizations to refine and validate our training modules.
- Introducing multilingual support for broader global accessibility.
- Continuously enhancing data security and user experience to stay ahead of evolving challenges.

---

## Project Structure

The repository is organized into several key directories, each playing a vital role in the application:

- **`/frontend`** – Contains the React-based user interface, complete with Tailwind CSS styling and Framer Motion animations.
- **`/backend`** – Holds the Django server logic, API endpoints, and integration scripts for processing user interactions.
- **`/api`** – Includes modules and endpoints that manage the integration with OpenAI’s GPT-4 API for real-time crisis conversation simulations.
- **Root Files:** Files such as `manage.py`, `auth.py`, and `tests.py` are used for application management, authentication, and testing, ensuring reliability and smooth operation.

---

## Getting Started

Follow these instructions to set up a local development environment:

### Prerequisites
- **Node.js & npm:** For running and managing the frontend application.
- **Python 3.x & pip:** For the Django backend.
- **MongoDB:** Either locally installed or using a cloud-based service.
- **Git:** To clone the repository.
- **API Keys:** OpenAI API key (and any other necessary credentials) should be obtained and securely stored.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dondr1/BL-sptrainer.git
   cd BL-sptrainer

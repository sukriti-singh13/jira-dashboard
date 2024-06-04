# **Jira Issues Dashboard**

## **Overview**
This project is a dashboard that uses Jira's REST API and lists all issues for a specific project. 

## **Deployment**
The application is deployed at: [**https://vercel.com/sukritisingh13s-projects/jira-dashboard**](#)

## **Setup and Installation**
1. **Clone the repository:**
2. **Navigate to the project directory:**
3. **To set up env, rename `.env.example` file to `.env`** 
4. **Install dependencies:** `npm install`
5. **Run the application:** `npm start`


Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## **Technologies Used**
- **ReactJS**
- **TypeScript**
- **Tailwind CSS**
- **Axios**
  

## **Decisions during development process**
1. Used proxy for making request to Jira's API for issues list
    - The request was resulting in a cors error as it requires the request to originate from the same domain , a proxy was utilized to route the requests
2. Implemented responsiveness on the site to enhance user experience.
3. Used Scalable File structure


## **Project includes**
- Responsive UI
- Simple and clean UI as List
- Error Handling
- Loader while the list is loading
- List contains following Details
     1. Issue key 
     2. Summary 
     3.Issue type 
     4.Status
    5. Assigne
- Filter by Status

## **Contact**
-  [Email](sukriti.singh899@gmail.com)
-  [LinkedIn Profile](https://www.linkedin.com/in/sukritee-singh/)

import websiteImg1 from "../assets/homerental.png";
import websiteImg2 from "../assets/ecommerce.png";
import websiteImg3 from "../assets/bookstore.png";
import websiteImg4 from "../assets/loanapp.png";
import websiteImg5 from "../assets/fooddelievery.png";
import websiteImg6 from "../assets/quizapp.png";




function Projects() {
  const config = {
    projects: [
      {
        title: "Home Rental Application",
        image: websiteImg1,
        description: "I developed a Full Stack Home Rentals application that enables users to create, manage, and search for property listings. Leveraging technologies like React, Redux and CSS, I implemented features such as user authentication, property creation, booking functionality, and wishlist management. My proficiency in Redux and MongoDB allowed me to build a seamless user experience. The project demonstrates my skills in full-stack development, UI design, and database management.KEYSKILLS: react,node,JWT,mongoose,express,materialUI",
        link: "https://dream-nest-dun.vercel.app",
        githublink:"https://github.com/balasoundariya-fullstackdeveloper/DREAM-NEST"
      },
      {
        title: "Ecommerce App",
        image: websiteImg2,
        description: "This e-commerce website allows users to sign up, log in, view products via pagination or search, order products, submit reviews, and manage their cart. Users can adjust product quantities in the cart, proceed to checkout, enter shipping information, confirm orders, and complete payments. The navigation bar includes profile, order, and logout options. Admins, who are assigned roles in the database, have access to a dashboard where they can add, edit, delete products, and update product statuses (processing, shipped, delivered).",
        link: "https://ecommerce-glj2.onrender.com",
        githublink:"https://github.com/balasoundariya-fullstackdeveloper/ECOMMERCE"
      },
      {
        title: "Book Store",
        image: websiteImg3,
        description: "This project demonstrates a Book Store application built using the MERN stack.Users can perform the following actions:Create Books: Add new books to the store. Edit Books: Modify existing book details. Delete Books: Remove books from the database. Features: Table View: By default, the home page displays books in a table format. Card View: Users can switch to a card view by clicking the “Card” button. Real-time Updates: Newly created, edited, and deleted books are automatically reflected in the database.KEYSKILLS:React,MongoDB,Express.js,Node.js",
        link: "https://mini-project-1-book-store.vercel.app",
        githublink:"https://github.com/balasoundariya-fullstackdeveloper/MINI-PROJECT-1-BOOK-STORE"
      },
      {
        title: "Loan App",
        image: websiteImg4,
        description: "In this loan app, the admin can register and log in. When the “Add New” button is pressed, a form opens to enter the date, name, amount, image, reference, and description. If the delete icon is pressed, a confirmation box opens to ask for permission to delete the transaction. The admin can add new transactions, update, and delete transactions. There is also a filter to view transactions from the past week, month, or year. Additionally, a custom option allows manually setting the start and end dates to see specific transactions.",
        link: "https://loan-app-ruby.vercel.app",
        githublink:"https://github.com/balasoundariya-fullstackdeveloper/Loan-App"
      },
      {
        title: "Food Delievery",
        image: websiteImg5,
        description: "This project involves creating a fully responsive frontend food delievery website, including sign in/sign up components, a cart page, a place order page, and integration with MongoDB Atlas for the database. Additionally, it features an admin panel created using React JS, with functionalities for displaying a food list, user authentication, fetching food data from the database, shopping cart functionality, order placement with Stripe payment integration, user order page, displaying orders in the admin panel, and order update features.",
        link: "https://food-delievery-frontend-o18s.onrender.com ",
        link1:"https://food-delievery-admin-ad1h.onrender.com",
        githublink:"https://github.com/balasoundariya-fullstackdeveloper/Food-Delievery"
      },
      {
        title: "Quiz App",
        image: websiteImg6,
        description: "I am creating a quiz website or app using React.js. In this quiz app, can update their own questions and provide multiple options. If a user selects the wrong answer, the app will display the correct answer. After submitting answers for all questions, the React.js quiz app will show the final score.Press Reset button for restart a quiz. KEYSKILLS:Javascript,CSS,Html,React.",
        link: "https://project-7-quiz-app-using-react.vercel.app",
        githublink:"https://github.com/balasoundariya-fullstackdeveloper/project-7-quiz-app-using-react"
      }
      
      
      
    ],
  };

  return (
    <section id="projects" className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
          <p>These are some of my best projects. I have built these with React, MERN, and CSS. Check them out.</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-wrap px-10 gap-5">
          {config.projects.map((project) => (
            <div className="relative w-full md:w-[30%]" key={project.title}>
              <img className="h-[400px] w-full" src={project.image} alt={project.title} />
              <div className="project-desc">
                <p className="text-center py-1">{project.title}</p>
                <p className="text-center px-3 py-3">{project.description}</p>
                <div className="flex justify-center px-5">
                  <a className="btn mr-2" href={project.githublink} rel="noreferrer" target="_blank">Github</a>
                  <a className="btn ml-2" href={project.link} rel="noreferrer" target="_blank">View Project</a>
                  {project.title === "Food Delievery" && (
                    <a className="btn mt-2" href={project.link1} rel="noreferrer" target="_blank">View Project</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

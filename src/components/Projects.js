import websiteImg1 from "../assets/homerental.png";
import websiteImg2 from "../assets/quizapp.png";
import websiteImg3 from "../assets/bookstore.png";
import websiteImg4 from "../assets/ecommerce.png";
import websiteImg5 from "../assets/loanapp.png";

function Projects() {
  const config = {
    projects: [
      {
        title: "Home Rental Application",
        image: websiteImg1,
        description:
          "I developed a Full Stack Home Rentals application that enables users to create, manage, and search for property listings. Leveraging technologies like React, Redux and CSS, I implemented features such as user authentication, property creation, booking functionality, and wishlist management. My proficiency in Redux and MongoDB allowed me to build a seamless user experience. The project demonstrates my skills in full-stack development, UI design, and database management.KEYSKILLS: react,node,JWT,mongoose,express,materialUI",
        link: "https://sweet-sunshine-d07e1b.netlify.app",
      },
      {
        title: "Quiz App",
        image: websiteImg2,
        description:
          "I am creating a quiz website or app using React.js. In this quiz app, can update their own questions and provide multiple options. If a user selects the wrong answer, the app will display the correct answer. After submitting answers for all questions, the React.js quiz app will show the final score.Press Reset button for restart a quiz. KEYSKILLS:Javascript,CSS,Html,React.",
        link: "https://jazzy-bubblegum-cf102b.netlify.app/",
      },
      {
        title: "Book Store",
        image: websiteImg3,
        description:
          "This project demonstrates a Book Store application built using the MERN stack.Users can perform the following actions:Create Books: Add new books to the store. Edit Books: Modify existing book details. Delete Books: Remove books from the database. Features: Table View: By default, the home page displays books in a table format. Card View: Users can switch to a card view by clicking the “Card” button. Real-time Updates: Newly created, edited, and deleted books are automatically reflected in the database.KEYSKILLS:React,MongoDB,Express.js,Node.js",
        link: "https://famous-gingersnap-7d98db.netlify.app",
      },
      {
        title: "Ecommerce App",
        image: websiteImg4,
        description:
          "This e-commerce website allows users to sign up, log in, view products via pagination or search, order products, submit reviews, and manage their cart. Users can adjust product quantities in the cart, proceed to checkout, enter shipping information, confirm orders, and complete payments. The navigation bar includes profile, order, and logout options. Admins, who are assigned roles in the database, have access to a dashboard where they can add, edit, delete products, and update product statuses (processing, shipped, delivered).",
        link: "https://ecommerce-glj2.onrender.com",
      },
      {
        title: "Loan App",
        image: websiteImg5,
        description:
          "In this loan app, the admin can register and log in. When the “Add New” button is pressed, a form opens to enter the date, name, amount, image, reference, and description. If the delete icon is pressed, a confirmation box opens to ask for permission to delete the transaction. The admin can add new transactions, update, and delete transactions. There is also a filter to view transactions from the past week, month, or year. Additionally, a custom option allows manually setting the start and end dates to see specific transactions.",
        link: "https://keen-cascaron-2bf4cd.netlify.app",
      },
    ],
  };

  return (
    <section id="projects" className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
          <p>These are some of my best projects. I have built these with React, MERN and CSS. Check them out.</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-wrap px-10 gap-5">
          {config.projects.map((project) => (
            <div className="relative w-full md:w-[30%]" key={project.title}>
              <img className="h-[400px] w-full" src={project.image} alt={project.title} />
              <div className="project-desc">
                <p className="text-center py-3">{project.title}</p>
                <p className="text-center px-5 py-4">{project.description}</p>
                <div className="flex justify-center">
                  <a className="btn" href={project.link} rel="noreferrer" target="_blank">
                    View Project
                  </a>
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

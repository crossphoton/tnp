import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import Brochure from "../Brochure.pdf";

const BarItems = [
    {
        id: 1,
        heading: "Home",
        description: " ",
        icon: <WorkIcon className='tabIcon' />,
        route: "/",
    },
    {
        id: 2,
        heading: "About Us",
        description: "Vote too already existing poll.",
        icon: <WorkIcon className='tabIcon' />,
        route: "/",
    },
    {
        id: 3,
        heading: "Why Recruit Us",
        description: "Vote too already existing poll.",
        icon: <WorkIcon className='tabIcon' />,
        route: "/",
    },
    {
        id: 4,
        heading: "For Companies",
        description: "View Responses to the polls created by you.",
        icon: <SchoolIcon className='tabIcon' />,
        route: "/",
        drop: [
            {
                id: 4.1,
                heading: "Brochure",
                onClick: () => {
                    window.open(Brochure);
                },
            },
            {
                id: 4.2,
                heading: `Internship Announcement Form`,
                onClick: function () {
                    window.open("https://forms.gle/c8aXW35ay6L34Dro9");
                },
            },
        ],
    },
    {
        id: 5,
        heading: "For Students",
        description: "View Responses to the polls created by you.",
        icon: <SchoolIcon className='tabIcon' />,
        route: "/",
        drop: [
            {
                id: 5.1,
                heading: "Internship Rules",
                onClick: () => {
                  window.open(
                    "https://drive.google.com/file/d/1kwH31HlIJG5FhZM9m3kxvH-W7IJiNqEM/view?usp=sharing"
                  );
                },
            }
        ],
    },
    {
        id: 6,
        heading: "Contact Us",
        description: "Login to create new polls or to submit a response.",
        route: "https://iiitr.ac.in/contact",
    },
];

export default BarItems;

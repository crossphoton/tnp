import Brochure from "../Brochure.pdf";

const BarItems = [
    {
        id: 1,
        heading: "Home",
        route: "/",
    },
    {
        id: 2,
        heading: "About Us",
        route: "/",
    },
    {
        id: 3,
        heading: "Recruitment Process",
        route: "/",
    },
    {
        id: 4,
        heading: "Why Recruit Us",
        route: "/",
    },
    {
        id: 5,
        heading: "For Companies",
        route: "/",
        drop: [
            {
                id: 5.1,
                heading: "Brochure",
                onClick: () => {
                    window.open(Brochure);
                },
            },
            {
                id: 5.2,
                heading: `Internship Announcement Form`,
                onClick: function () {
                    window.open("https://forms.gle/c8aXW35ay6L34Dro9");
                },
            },
        ],
    },
    {
        id: 6,
        heading: "For Students",
        route: "/",
        drop: [
            {
                id: 6.1,
                heading: "Internship Rules",
                onClick: () => {
                    window.open(
                        "https://drive.google.com/file/d/1kwH31HlIJG5FhZM9m3kxvH-W7IJiNqEM/view?usp=sharing"
                    );
                },
            },
        ],
    },
    {
        id: 7,
        heading: "Contact Us",
        route: "https://iiitr.ac.in/contact",
    },
];

export default BarItems;

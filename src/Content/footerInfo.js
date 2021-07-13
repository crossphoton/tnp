import Brochure from "../Brochure.pdf"

const address = `Government Engineering College, Raichur, located at Yeramarus.`;


const Contacts = [
    {
        id: 1,
        name: "Dr. Sadhana Jha (Faculty Incharge)",
        email: "fic.placement@iiitr.ac.in",
        phoneNum: "+91 8768779475",
    },
    {
        id: 2,
        name: "Aditya Agrawal (Student Coordinator)",
        email: "tnp@iiiitr.ac.in",
        phoneNum: "+91 9785559273",
    },
    {
        id: 3,
        name: "Reethu Sanagala (Student Coordinator)",
        email: "tnp@iiitr.ac.in",
        phoneNum: "+91 8919239558",
    },
    {
        id: 4,
        name: "IIIT, Raichur",
        email: "info@iiitr.ac.in",
        phoneNum: "040 - 2301 6002",
    }

];

const FooterLinks = [
    {
        id: 1,
        name: "Internship Announcement",
        link: "https://forms.gle/c8aXW35ay6L34Dro9/"
    },
    {
        id: 2,
        name: "Internship Brochure",
        link: Brochure
    },
    {
        id: 3,
        name: "IIITR Website",
        link: "https://www.iiitr.ac.in/",
    },
    {
        id: 4,
        name: "Curriculum",
        link: "https://iiitr.ac.in/curriculum.html",
    },
    {
        id: 5,
        name: "Faculty Profiles",
        link: "https://www.iiitr.ac.in/faculty.html"
    },
    {
        id: 6,
        name: "Student Activities",
        link: "https://students.iiitr.ac.in/",
    },
    {
        id: 7,
        name: "Reach Us",
        link: "https://iiitr.ac.in/reach_us.html",
    },
]

export {address, Contacts, FooterLinks};

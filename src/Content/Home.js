import directordeskImage from "../images/directorsdesk.jpg";
import tpoImage from "../images/tpoImage.webp";

const AboutIIITR = `The Training and Placement cell of IIIT Raichur started functioning in April 2021. The cell is responsible for facilitating and monitoring the recruitment activities related to internships and placements. It also conducts various training sessions for developing soft skills, problem-solving skills, coding quizzes, etc., to prepare the students for the interviews and coding exams.`;

const Mission = `Budding under one of the most sought after institutes in the country, IIITR has had the philosophy of bringing positive changes in the lives of its students, and thereby, the society at large, from its very inception. The mission has always been to cultivate ingenuity, originality and innovation in the students, who are the future of this country.`;

const Thoughts = [
    {
        id: 1,
        isLeftAlign: true,
        haveLogo: true,
        writer: "Dr. BS Murty",
        heading: "From Director's Desk",
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        imgSrc: directordeskImage,
        altText: "Director",
    },
    {
        id: 2,
        isLeftAlign: false,
        haveLogo: true,
        writer: "Dr. Sadhna Jha",
        heading: "Message From TPO",
        content: `With a vision to become a globally recognized institute for its academic excellence and groundbreaking research and innovation IIIT Raichur started its journey in 2019, under the mentorship of IIT Hyderabad. The curriculum of IIITR Raichur, not only focuses on teaching technical courses, but also on making the students industry ready. The rigour in teaching, endeavor to excel in all facets, learning from top notch researchers and academicians and participating in extra co-curricular activities inculcate definite excellence in the students of IIIT Raichur. It is my pleasure to invite all the prospective employers and trainers from India and abroad to visit the campus for the internship process. I am sure you will witness the outcome of excellence in the teaching and learning environment created at IIIT raichur. I look forward to your wholehearted support and engagement with us.`,
        imgSrc: tpoImage,
        altText: "TPO",
    },
];
const WhyUs = [
    {
        id: 1,
        isLeftAlign: true,
        haveLogo: false,
        heading: "Academic System",
        content: `Being mentored by IITH, IIITR has adopted the innovative
                    fractal academics system, which warrants continuous
                    evaluation. This ensures the students have a deeper
                    understanding of the core subjects.`,
    },
    {
        id: 2,
        isLeftAlign: false,
        haveLogo: false,
        heading: "The Prodigious Curriculum",
        content: `  The highly
                    flexible curriculum forged by the esteemed faculty of IITH and
                    IIITR exuberates innovation and inventiveness. With core
                    subjects being incorporated from the first semester itself, the
                    students are able to finish their courses quite early and focus
                    on developing projects & industry relevant skills.`,
    },
    {
        id: 3,
        isLeftAlign: true,
        haveLogo: false,
        heading: "Industry-Relevant Work Experience",
        content: `The students are working in different startups and tech giants from the first
    lf which prepares them for the industry, working in different fields like Data Science
    Machine Learning, Web Development, Software Development, etc. They have been exploring 
    industry-relevant skills & technologies like Python, C++, Java, Javascript, flutter, Go,
     flask, NoSQL, SQL, Django, Node, Vue, React, Docker, among others.`,
    },
];

export { AboutIIITR, Mission, Thoughts, WhyUs };

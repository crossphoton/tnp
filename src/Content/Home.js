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
    content: `Dear friends,
Indian Institute of Information Technology Raichur (IIIT Raichur) welcomes you to the Institute where excellence is nurtured. We are proud of preparing dynamic leaders, who make a difference to the world, with the skills that are nurtured here for a better tomorrow. It is gratifying for IIT Hyderabad (IITH), which has completed 12 years, to nurture another Institute of National Importance. IIIT Raichur is one of the new IIITs established by the Ministry of Education (MoE), Government of India, located at Raichur, Karnataka state. IIIT Raichur has started its academic activity in August 2019 with its first batch of BTech in Computer Science and Engineering. The Government of Karnataka has handed over a land of 60 acres for the construction of the Permanent Campus at Raichur. IIIT Raichur offers a BTech program in Computer Science and Engineering with an intake of 30 students. It uses a Fractal Academic System, involving continuous evaluation of students, and more choices on subjects they want to pursue outside their core area. It has a welldefined curriculum with emphasis on the advanced courses starting from the first year itself, which lets the students stand on par with the emerging technologies in the field of Computer Science & Engineering. IIIT Raichur has 4 faculty and 55 students.
We are looking forward to long-term collaborations, to help us grow stronger. Industry-Research-Academia ties upon cutting-edge technologies are the key for the growth of the country. I am confident, IIIT Raichur will play its part proactively in this direction. Some of the students of IIITR have done internships with the organization of repute and brought accolades to the Institute. To enable the students to take up longer internships, we have revised the curriculum to allow the students with greater than 8 CGPA to do 6-7 months long internship during their 6th semester (Jan-July).
As a mentor institute, IITH is excited to render its expertise to the IIIT Raichur in all possible measures to make it a World-class Educational Institute. Going to be based on the land of historic importance, Raichur, I am sure, IIIT Raichur will emerge as the state-of-the-art institute and its students will the deliver their best in industry, R&D and academics.
I wish all the best for IIITR’s students in this year’s placement.
Stay Safe & Stay Strong…
Warm Regards
`,
    imgSrc: directordeskImage,
    altText: "Director",
  },
  {
    id: 2,
    isLeftAlign: false,
    haveLogo: true,
    writer: "Dr. Debasish Mukherjee",
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
                    understanding of the core subjects. 
`,
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
    content: `The students are working in different startups and tech giants from the first year
    which prepares them for the industry, working in different fields like Data Science
    Machine Learning, Web Development, Software Development, etc. The institute also offers students the opportunity for summer
     internships as well as semester long internships to get Industry-Relevant experience.`,
  },
];

export { AboutIIITR, Mission, Thoughts, WhyUs };


import React from 'react'
import {AboutIIITR} from '../Content/Home'
import {ReactComponent as Logo} from "../images/ocs_logo.svg"
import ReusableCard from '../components/ReusableBlock';
import ReusableBlock2 from '../components/ReusableBlock2';
import BackImg from '../images/cover.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

AOS.init({
    easing: 'ease-in-out', // default easing for AOS animations
    duration: 1000,
    delay: 20,
});


export default function HomePage() {

  return (
    <div className="homepage">
      <div className="top">

            <img src={BackImg} alt="website logo" className="backImage" />

            <div className="topComponents" >

                <div className="HomepageCenter" data-aos="zoom-in" >
                    <Logo className="logo" />

                    <div className="HomepageLogoText" data-aos="fade-right"  >
                        <h1>OCS</h1>
                    </div>

                </div>

                <div className = "scrollNoti" onClick={()=>{document.getElementById('scrollTO').scrollIntoView({ behavior: 'smooth' })}} >
                    <i className="fas fa-2x fa-angle-double-down" style={{cursor:"pointer"}} ></i> 
                </div>

                </div>
            
            {/* <div className="aboutIIITR">
                <h1 className="aboutHead">About Us</h1>

                <p>{AboutIIITR}</p>
            </div>

            <div className="updates">
                <hr className="line" />
                <h1>Updates</h1>
            </div> */}
                
        </div>
        <div className="recruitUs" id="scrollTO" >
            
            <div className="aboutUs" data-aos="fade-up" >
                <h1>About Us</h1>
                <p>{AboutIIITR}</p>
            </div>
            <ReusableCard 
                isLeftAlign={true}
                haveLogo={true}
                writer="BS Murty"
                heading="From Director's Desk"
                content=" Being mentored by IITH, IIITR has adopted the innovative
                    fractal academics system, which warrants continuous
                    evaluation. This ensures the students have a deeper
                    understanding of the core subjects. Moreover, the highly
                    flexible curriculum forged by the esteemed faculty of IITH and
                    IIITR exuberates innovation and inventiveness. With core
                    subjects being incorporated from the first semester itself, the
                    students are able to finish their courses quite early and focus
                    on developing projects & industry relevant skills."
                imgSrc="https://images-ext-1.discordapp.net/external/1CnMkqZMSH_K0lNVZPLhboBu-8x6JSb5Hixk0HRsnvw/https/ocs.iith.ac.in/static/media/directorsdesk.bb13dd37.jpg?width=501&height=450"
                altText="Director"
            />
                <ReusableCard 
                isLeftAlign={false}
                haveLogo={true}
                heading="Message From TPO"
                writer="Sadhna Jha"
                content=" Being mentored by IITH, IIITR has adopted the innovative
                    fractal academics system, which warrants continuous
                    evaluation. This ensures the students have a deeper
                    understanding of the core subjects. Moreover, the highly
                    flexible curriculum forged by the esteemed faculty of IITH and
                    IIITR exuberates innovation and inventiveness. With core
                    subjects being incorporated from the first semester itself, the
                    students are able to finish their courses quite early and focus
                    on developing projects & industry relevant skills."
                imgSrc="https://images-ext-1.discordapp.net/external/Eld7F0Wj94n5lzFm6tRzx6gd96ikkZX1a75dfitylIU/https/iiitr.ac.in/assets/images/faculty/cse/sadhana.webp"
                altText="tpo"
            />

 
        </div>
        <div className="whyUsHeading">
            <h3 > Why us ??</h3>
        </div>

        <div className="whyUsContent">
            <ReusableBlock2 
                heading="The Prodigious Curriculum and Academic System"
                content=" Being mentored by IITH, IIITR has adopted the innovative
                    fractal academics system, which warrants continuous
                    evaluation. This ensures the students have a deeper
                    understanding of the core subjects. Moreover, the highly
                    flexible curriculum forged by the esteemed faculty of IITH and
                    IIITR exuberates innovation and inventiveness. With core
                    subjects being incorporated from the first semester itself, the
                    students are able to finish their courses quite early and focus
                    on developing projects & industry relevant skills."
            />

            <ReusableBlock2 
                heading="The coders, thinkers and tinkerers"
                content="The student family of IIITR consists of competitive coders, 
                        web development enthusiasts, eager learners and diligent scholars.
                        The students represent the creamy layer of talent in the country.
                        They have been actively involved in various technical and cultural
                        club activities of IIT Hyderabad. At the same time, the students
                        have founded and set up numerous clubs of their own to further
                        facilitate collaborative learning and introspective growth. (The
                        students have been exploring various industry relevant skills &
                        technologies like Python, C++, Java, Javascript, flutter, Go, flask,
                        NoSQL, SQL, Django, Node, Vue, React, Docker etc.)"
            />
        </div>
            {/* <div className="content">
	            <div>
                    <div className="missionHead" id="mission" >
                        <h1 className="heading">
                            Mission and Philosophy
                        </h1>
                    </div>
                    <hr className="line" />

                    <p className="missionContent" >
                        {Mission}
                    </p>
                </div>
            </div> */}
    </div>
  );
}

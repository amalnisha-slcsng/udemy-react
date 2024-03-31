import six from "../assets/images/c5.webp"
import seven from "../assets/images/c6.jpg"
import eight from "../assets/images/c7.jpg"
import nine from "../assets/images/c8.webp"
import ten from "../assets/images/c9.jpg"
import eleven from "../assets/images/c10.jpg"
import twelve from "../assets/images/c11.jpg"
import thirteen from "../assets/images/c12.jpg"



function Popular(){
    return (
      <div className="popular">
        <h1 className="popular__title">Most Popular</h1>
        <p className="popular__subtitle">Pick the best fit</p>
        <div className="popular__container">
            <div className="course-card">
                <img src={six} alt="Course 1"/>
                <h3>Beginner Full Stack Web Development: HTML, CSS, React & Node</h3>
                <p>Jose Portilla</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>$36.02 <del>45.07</del></p>
            </div>
            <div className="course-card">
                <img src={seven} alt="Course 2"/>
                <h3>Web Development Masterclass - Online Certification Course</h3>
                <p>Dr. Angela Yu</p>
                <p>3.5 ⭐⭐⭐</p>
                <p>$25.06 <del>45.07</del></p>
            </div>
            <div className="course-card">
                <img src={eight} alt="Course 3"/>
                <h3>Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2024]</h3>
                <p>Yassin Marco</p>
                <p>4.4⭐⭐⭐⭐</p>
                <p>$30.08 <del>45.07</del></p>
            </div>
            <div className="course-card">
                <img src={nine} alt="Course 4"/>
                <h3>Master <strong>UI/UX</strong> Designing with Figma 2024</h3>
                <p>Al Sweigart</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>$40.09 <del>45.07</del></p>
            </div>
            <div className="course-card">
                <img src={ten} alt="Course 1"/>
                <h3>All of AI: ChatGPT, Midjourney, Stable Diffusion & App Dev</h3>
                <p>Jose Portilla</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>$36.02 <del>45.07</del></p>
            </div>
            <div className="course-card">
                <img src={eleven} alt="Course 2"/>
                <h3>The Complete 2024 Web Development Bootcamp</h3>
                <p>Dr. Angela Yu</p>
                <p>3.5 ⭐⭐⭐</p>
                <p>$25.06 <del>45.07</del></p>
            </div>
            <div className="course-card">
                <img src={twelve} alt="Course 3"/>
                <h3>The Full Stack Web Development Bootcamp 2024</h3>
                <p>Yassin Marco</p>
                <p>4.4⭐⭐⭐⭐</p>
                <p>$30.08 <del>45.07</del></p>
            </div>
            <div className="course-card">
                <img src={thirteen} alt="Course 4"/>
                <h3>The Complete Modern PHP Developer Course</h3>
                <p>Al Sweigart</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>$40.09 <del>45.07</del></p>
            </div>
        </div>
      </div>
    );
  }
  export default Popular
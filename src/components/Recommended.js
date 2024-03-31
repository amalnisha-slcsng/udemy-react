import two from "../assets/images/c1.jpg"
import three from "../assets/images/c2.jpg"
import four from "../assets/images/c3.jpg"
import five from "../assets/images/c4.jpg"


function Recommended(){
    return (
      <div className="recommended">
        <h1 className="recommended__title">Recommended For You</h1>
        <p>Pick the best fit</p>
        <div className="recommended__container">
            <div className="course-card">
                <img src={two} alt="Course 1"/>
                <h3>2024 Python Data Visualization Masterclass</h3>
                <p>Jose Portilla</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>$36.02 <del>45.07</del></p>
            </div>
            <div className="course-card">
                <img src={three} alt="Course 2"/>
                <h3>The Complete 2024 Web Development Bootcamp</h3>
                <p>Dr. Angela Yu</p>
                <p>3.5 ⭐⭐⭐</p>
                <p>$25.06 <del>45.07</del></p>
            </div>
            <div className="course-card">
                <img src={four} alt="Course 3"/>
                <h3>The Full Stack Web Development Bootcamp 2024</h3>
                <p>Yassin Marco</p>
                <p>4.4⭐⭐⭐⭐</p>
                <p>$30.08 <del>45.07</del></p>
            </div>
            <div className="course-card">
                <img src={five} alt="Course 4"/>
                <h3>Master <strong>UI/UX</strong> Designing with Figma 2024</h3>
                <p>Al Sweigart</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>$40.09 <del>45.07</del></p>
            </div>
        </div>
      </div>
    );
  }
  export default Recommended
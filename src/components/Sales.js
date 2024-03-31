
import one from "../assets/images/sale.jpg"

function Sales() {
    return (
      <div className="sale-image">
        <img src={one} alt="Sale image" />
        <div className="sale-image__offer">
          <h2 style={{ color: "#2D2F31" }}>Udemy flash Sale ! 24 hrs to save.</h2>
          <p>Get the top courses for just 999. Just one day to save but a lifetime to learn...</p>
        </div>
      </div>
    );
  }
  export default Sales
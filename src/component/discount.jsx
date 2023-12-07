import '../css/discountbox.css'
function Discount({ discount }) {
    return (
      <div className="discountBox">
        <span className="discountLetter"><strong>{discount}% OFF</strong></span>
      </div>
    );
  }
export default Discount;
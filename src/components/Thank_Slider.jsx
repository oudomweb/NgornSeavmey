import AboutImg from "../assets/img/about.jpg";
const ThankYou = () => {
  return (
    <section id="thank-you" className="py-5 text-center">
      <div className="container">
        <h2 className="display-4">Thank You</h2>
        <img
          src={AboutImg}
          alt="Thank You"
          className="img-fluid rounded"
          style={{ maxWidth: "400px" }}
        />
      </div>
    </section>
  );
};

export default ThankYou;    
// images
import signUpDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import signUpMobile from "../assets/images/illustration-sign-up-mobile.svg";

export function Card() {
  return (
    <section className="card">
      <div className="card__img img--mobile">
      <img
        src={signUpMobile}
        alt="illustration of a browser"
      />
      </div>

      <div className="card__content">
        Sign-up form start Stay updated! Join 60,000+ product managers receiving
        monthly updates on: Product discovery and building what matters
        Measuring to ensure updates are a success And much more! Email address
        email@company.com Subscribe to monthly newsletter
      </div>

      <div className="card__img img--desktop">
      <img
        src={signUpDesktop}
        alt="illustration of a browser"
      />
      </div>
    </section>
  );
}

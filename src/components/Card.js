// images
import signUpDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import signUpMobile from "../assets/images/illustration-sign-up-mobile.svg";
import iconList from "../assets/images/icon-list.svg";

export function Card() {
  return (
    <section className="card">
      <div className="card__img img--mobile">
        <img src={signUpMobile} alt="illustration of a browser" />
      </div>

      <div className="card__content">
        <h1 className="content__h1">Stay updated!</h1>

        <p className="content__p">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <ul className="content__list">
          <li className="content__list_item">
            <img src={iconList} alt="check icon" /> Product discovery and
            building what matters
          </li>

          <li className="content__list_item">
            <img src={iconList} alt="check icon" />
            Measuring to ensure updates are a success{" "}
          </li>

          <li className="content__list_item">
            <img src={iconList} alt="check icon" />
            And much more!{" "}
          </li>
        </ul>
        
        <form className="card__content_form">
            <label htmlFor="email">
                <p>
                Email address
                </p>

                <p>
                </p>
            </label>
            <input type="email" id="email" placeholder="email@company.com"/>
            <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      </div>

      <div className="card__img img--desktop">
        <img src={signUpDesktop} alt="illustration of a browser" />
      </div>
    </section>
  );
}

// images
import signUpDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import signUpMobile from "../assets/images/illustration-sign-up-mobile.svg";
import iconList from "../assets/images/icon-list.svg";

//hooks
import { useState } from "react";
import { useEffect } from "react";

export function Card({action}) {
  const [emailInput, setEmailInput] = useState("");
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  useEffect(() => {
    if(showValidationMessage){
      setTimeout(() => {
        setShowValidationMessage(false);
      }, 5000);
    }

    return () => {}
  }, [showValidationMessage])

  function handleEmailChange(e){
    setEmailInput(e.target.value);
  } 

  function handleSubmit(e){
    e.preventDefault();

    if(typeof action === "function"){

      const validationTest = emailInput.includes('@') && emailInput.includes('@') !== "" ? true : false;

      if(validationTest){
        action();
      }else{
        setShowValidationMessage(true);
      }
    }
  }

  return (
    <section className="card">
      <div className="card__img img--mobile">
        <img src={signUpMobile} alt="illustration of a browser" />
      </div>

      <div className="content">
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
        
        <form className="content__form" noValidate onSubmit={handleSubmit}>
            <label htmlFor="email">
                <p>
                Email address
                </p>

                {showValidationMessage && <p className="content__form_validation-message">
                  Valid email required
                </p>}
            </label>
            <input type="email" id="email" className={ showValidationMessage ? 'custom-input input--red':"custom-input"} placeholder="email@company.com" autoComplete="off" value={emailInput} onChange={handleEmailChange}/>
            <button type="submit" className="custom-button">Subscribe to monthly newsletter</button>
        </form>
      </div>

      <div className="card__img img--desktop">
        <img src={signUpDesktop} alt="illustration of a browser" />
      </div>
    </section>
  );
}

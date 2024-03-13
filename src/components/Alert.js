import iconSuccess from "./../assets/images/icon-success.svg";

export function Alert({ action }) {
  function closeAlert() {
    if (typeof action === "function") {
      action();
    }
  }

  return (
    <section className="alert">
      <div className="content">
        <img src={iconSuccess} alt="checkmark" />
        <h1 className="content__h1">Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to{" "}
          <span>ash@loremcompany.com</span>. Please open it and click the button
          inside to confirm your subscription.{" "}
        </p>
      </div>
      <button className="alert__dismiss-button custom-button" onClick={closeAlert}>
        Dismiss message
      </button>
    </section>
  );
}

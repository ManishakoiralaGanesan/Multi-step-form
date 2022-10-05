export default function NavProgressBar(props) {
  const { progressClassName, step, activeClass } = props;
  function setActiveWidth() {
    if (step === 1) {
      return "0%";
    } else if (step === 2) {
      return "33.3%";
    } else if (step === 3) {
      return "66.6%";
    } else if (step === 4) {
      return "100%";
    }
  }
  return (
    <div className="progressBar">
      <div className="progress progressActive"></div>
    </div>
  );
}

import Style from "./Links.module.sass";
import PropTypes from "prop-types"

const Links = (props) => {
  const { state, link, title, image, text } = props;

  let clr;
  state === "active" ? (clr = "#F2F2F3") : (clr = "#8585AD");

  return (
    <a href={link} className={Style.link} title={title}>
      {image}
      <p className={Style.text} style={{ color: clr }}>
        {text}
      </p>
    </a>
  );
};

Links.propTypes = {
  state: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired
}

export default Links;

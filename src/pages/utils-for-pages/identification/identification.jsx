import Style from "./identification.module.sass";
import Form from "../form/form";
import constants from "../../../utils-for-application/constants";

import { useNavigate } from "react-router-dom";

const Identification = (props) => {
  const { buttons, inputs, questions, title } = props;

  const navigate = useNavigate();

  const link = (e, url) => {
    e.preventDefault();
    navigate(url, { replace: true });
  };

  return (
    <section className={Style.container}>
      <div className={Style.content}>
        <h2 className={Style.title}>{title}</h2>
        <Form {...inputs} buttons={buttons} />
        <ul className={Style.list}>
          {questions?.map((item, index) => {
            return (
              <li key={`identification_${index}`}>
                <span className={Style.span}>
                  <p className={Style.question}>{item.question}</p>
                  <a
                    className={Style.action}
                    href={item.link}
                    onClick={(e) => link(e, item.link)}
                  >
                    {item.action}
                  </a>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

Identification.propTypes = constants.types.identification;

export default Identification;

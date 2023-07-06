import Style from "./not-found.module.sass";

import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const link = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };

  return (
    <section className={Style.container}>
      <div className={Style.content}>
        <p className={Style.number} children={"404"} />
        <p className={Style.string} children={"Не найдено🤷‍♂️"} />
        <button
          className={Style.link}
          onClick={(e) => link(e)}
          children={"перейти на главную страницу"}
        />
      </div>
    </section>
  );
};

export default NotFound;

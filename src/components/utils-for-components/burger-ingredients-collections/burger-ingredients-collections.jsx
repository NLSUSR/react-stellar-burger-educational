import Style from "./burger-ingredients-collections.module.sass";
import BurgerIngredientsItem from "../burger-ingredients-item/burger-ingredients-item";
import constants from "../../../utils-for-application/constants";

import { v4 } from "uuid";

const BurgerIngredientsCollections = ({ title, array }) => {
  return (
    <section className={Style.container}>
      <h2 className={Style.title}>{title}</h2>
      <ul className={Style.list}>
        {array?.map((item) => {
          return (
            <li key={v4()}>
              <BurgerIngredientsItem item={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

BurgerIngredientsCollections.propTypes = constants.types.burgerIngredientsCollections

export default BurgerIngredientsCollections;

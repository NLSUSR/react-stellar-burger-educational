import Style from "./ingredient-details.module.sass";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types.js";

const IngredientDetails = ({ data }) => {
  const values = [
    {
      nutrition: "Калории,ккал",
      value: data.calories,
    },
    {
      nutrition: "Белки, г",
      value: data.proteins,
    },
    {
      nutrition: "Жиры, г",
      value: data.fat,
    },
    {
      nutrition: "Углеводы, г",
      value: data.carbohydrates,
    },
  ];

  return (
    <div className={Style.container}>
      <h2 className={Style.title}>Детали ингредиента</h2>
      <img className={Style.image} src={data.image_large} alt={data.name} />
      <p className={Style.name}>{data.name}</p>
      <ul className={Style.list}>
        {values.map((item, index) => (
          <li key={index} className={Style.item}>
            <p className={Style.nutrition}>{item.nutrition}</p>
            <p className={Style.value}>{item.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

IngredientDetails.propTypes = {
  data: PropTypes.shape(ingredientPropType.isRequired).isRequired,
};

export default IngredientDetails;

import Style from "./ingredient-details.module.sass";
import constants from "../../utils-for-application/constants";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const IngredientDetails = (props) => {
  const { container, title } = props.styles ?? {};
  console.log("styles", props.styles);

  const params = useParams();
  const ingredients = useSelector((s) => s.data.response?.data);

  const data = React.useMemo(
    () => ingredients?.find((item) => item._id === params.id),
    [ingredients, params.id]
  );

  const values = [
    {
      nutrition: "Калории,ккал",
      value: data?.calories,
    },
    {
      nutrition: "Белки, г",
      value: data?.proteins,
    },
    {
      nutrition: "Жиры, г",
      value: data?.fat,
    },
    {
      nutrition: "Углеводы, г",
      value: data?.carbohydrates,
    },
  ];

  return (
    <section className={Style.container} style={!!container ? container : {}}>
      <h2 className={Style.title} style={!!title ? title : {}}>
        Детали ингредиента
      </h2>
      <img className={Style.image} src={data?.image_large} alt={data?.name} />
      <p className={Style.name}>{data?.name}</p>
      <ul className={Style.list}>
        {values?.map((item, index) => (
          <li key={`ingredient_details_${index}`} className={Style.item}>
            <p className={Style.nutrition}>{item.nutrition}</p>
            <p className={Style.value}>{item.value}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

IngredientDetails.propTypes = constants.types.ingredientDetails;

export default IngredientDetails;

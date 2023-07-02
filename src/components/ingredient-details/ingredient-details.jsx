import Style from "./ingredient-details.module.sass";

import { v4 } from "uuid";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const IngredientDetails = () => {
  const params = useParams()
  const ingredients = useSelector((s) => s.data.getData.response?.data);
  
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
    <section className={Style.container}>
      <h2 className={Style.title}>Детали ингредиента</h2>
      <img className={Style.image} src={data?.image_large} alt={data?.name} />
      <p className={Style.name}>{data?.name}</p>
      <ul className={Style.list}>
        {values?.map((item) => (
          <li key={v4()} className={Style.item}>
            <p className={Style.nutrition}>{item.nutrition}</p>
            <p className={Style.value}>{item.value}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientDetails;

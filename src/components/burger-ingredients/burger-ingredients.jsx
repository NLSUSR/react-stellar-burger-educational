import Style from "./burger-ingredients.module.sass";
import rootActions from "../../services/store/actions/root-action";
import constants from "../../utils-for-application/constants";
import BurgerIngredientsMenu from "../utils-for-components/burger-ingredients-menu/burger-ingredients-menu";
import BurgerIngredientsCollections from "../utils-for-components/burger-ingredients-collections/burger-ingredients-collections";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const data = useSelector((s) => s.data.response?.data);
  const ingredients = useSelector((s) => s.ingredients);

  React.useEffect(() => {
    dispatch(rootActions.ingredients.distribute(data));
  }, [dispatch, data]);

  const refs = {
    parent: React.useRef(null),
    bun: React.useRef(null),
    sauce: React.useRef(null),
    main: React.useRef(null),
  };

  const tabs = React.useMemo(() => {
    return [
      {
        name: "Булки",
        type: "bun",
        ref: refs.bun,
      },
      {
        name: "Соусы",
        type: "sauce",
        ref: refs.sauce,
      },
      {
        name: "Начинки",
        type: "main",
        ref: refs.main,
      },
    ];
  }, [refs.bun, refs.sauce, refs.main]);

  const [current, setCurrent] = React.useState(tabs[0].type);

  const setCurrentOnScroll = () => {
    const closestTab = tabs.reduce((previous, current) => {
      const previousDistance = Math.abs(
        previous.ref.current.getBoundingClientRect().y -
          refs.parent.current.offsetTop
      );

      const currentDistance = Math.abs(
        current.ref.current.getBoundingClientRect().y -
          refs.parent.current.offsetTop
      );

      return previousDistance < currentDistance ? previous : current;
    });
    setCurrent(closestTab.type);
  };

  const array = [
    {
      ref: refs.bun,
      title: constants.keys.names.buns,
      array: ingredients?.buns ?? [],
    },
    {
      ref: refs.sauce,
      title: constants.keys.names.sauces,
      array: ingredients?.sauces ?? [],
    },
    {
      ref: refs.main,
      title: constants.keys.names.mains,
      array: ingredients?.mains ?? [],
    },
  ];

  return (
    <section className={Style.container}>
      <h1 className={Style.title}>{"Соберите бургер"}</h1>
      <BurgerIngredientsMenu tabs={tabs} current={current} />
      <ul
        className={`${Style.list} custom-scroll`}
        ref={refs.parent}
        onScroll={setCurrentOnScroll}
      >
        {array?.map((item, index) => {
          return (
            <li key={`burger-ingredients_${index}`} ref={item.ref}>
              <BurgerIngredientsCollections
                title={item.title}
                array={item.array}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BurgerIngredients;

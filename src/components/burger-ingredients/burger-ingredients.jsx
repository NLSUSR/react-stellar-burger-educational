import Style from "./burger-ingredients.module.sass";
import AnchorMenu from "../util-components/anchor-menu/anchor-menu.jsx";
import Collections from "../util-components/collections/collections.jsx";
import { useDispatch, useSelector } from "react-redux";
import rootActions from "../../services/actions/root-action";
import React from "react";
import constants from "../../utils/constants.js";
import { v4 as uuidv4 } from "uuid";

const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const data = useSelector((s) => s.data);
  const ingredients = useSelector((s) => s.ingredients);

  React.useEffect(() => {
    dispatch(rootActions.ingredients.distribute(data.ingredients));
  }, [data, dispatch]);

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
    const closestTab = tabs.reduce((prev, curr) => {
      const prevDistance = Math.abs(
        prev.ref.current.getBoundingClientRect().y -
          refs.parent.current.offsetTop
      );

      const currDistance = Math.abs(
        curr.ref.current.getBoundingClientRect().y -
          refs.parent.current.offsetTop
      );

      return prevDistance < currDistance ? prev : curr;
    });
    setCurrent(closestTab.type);
  };

  return (
    <section className={Style.container}>
      <h1 className={Style.title}>{"Соберите бургер"}</h1>
      <AnchorMenu tabs={tabs} current={current} />
      <div
        className={`${Style.ingredients} custom-scroll`}
        ref={refs.parent}
        onScroll={setCurrentOnScroll}
      >
        <div ref={refs.bun}>
          <Collections
            key={uuidv4()}
            title={constants.keys.names.buns}
            array={ingredients.buns}
          />
        </div>

        <div ref={refs.sauce}>
          <Collections
            key={uuidv4()}
            title={constants.keys.names.sauces}
            array={ingredients.sauces}
          />
        </div>

        <div ref={refs.main}>
          <Collections
            key={uuidv4()}
            title={constants.keys.names.mains}
            array={ingredients.mains}
          />
        </div>
      </div>
    </section>
  );
};

export default BurgerIngredients;

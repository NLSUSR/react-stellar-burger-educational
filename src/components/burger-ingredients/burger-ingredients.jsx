import Style from "./burger-ingredients.module.sass";
import AnchorMenu from "../util-components/anchor-menu/anchor-menu.jsx";
import Collections from "../util-components/collections/collections.jsx";
import { useDispatch, useSelector } from "react-redux";
import rootActions from "../../services/actions/root-action";
import React from "react";

const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const data = useSelector((s) => s.data);
  const ingredients = useSelector((s) => s.ingredients);

  React.useEffect(() => {
    dispatch(rootActions.ingredients.distribute(data.ingredients));
  }, [data]);

  const keys = {
    names: { buns: "Булки", sauces: "Соусы", mains: "Начинки" },
    id: { buns: "buns", sauces: "sauces", mains: "mains" },
  };

  const bunRef = React.useRef(null);
  const sauceRef = React.useRef(null);
  const mainRef = React.useRef(null);
  const parentRef = React.useRef(null);

  const tabs = [
    {
      name: "Булки",
      type: "bun",
      ref: bunRef,
    },
    {
      name: "Соусы",
      type: "sauce",
      ref: sauceRef,
    },
    {
      name: "Начинки",
      type: "main",
      ref: mainRef,
    },
  ];

  const [current, setCurrent] = React.useState(tabs[0].type);

  const setCurrentOnScroll = () => {
    const closestTab = tabs.reduce((prev, curr) => {
      const prevDistance = Math.abs(
        prev.ref.current.getBoundingClientRect().y - parentRef.current.offsetTop
      );

      const currDistance = Math.abs(
        curr.ref.current.getBoundingClientRect().y - parentRef.current.offsetTop
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
        ref={parentRef}
        onScroll={setCurrentOnScroll}
      >
        <div ref={bunRef}>
          <Collections
            key={keys.id.buns}
            title={keys.names.buns}
            array={ingredients.buns}
          />
        </div>

        <div ref={sauceRef}>
          <Collections
            key={keys.id.sauces}
            title={keys.names.sauces}
            array={ingredients.sauces}
          />
        </div>

        <div ref={mainRef}>
          <Collections
            key={keys.id.mains}
            title={keys.names.mains}
            array={ingredients.mains}
          />
        </div>
      </div>
    </section>
  );
};

export default BurgerIngredients;

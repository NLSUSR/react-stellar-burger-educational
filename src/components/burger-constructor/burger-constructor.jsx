import Style from "./burger-constructor.module.sass";
import * as library from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types.js"

const BurgerConstructor = ({ ingredients }) => {
  const { ConstructorElement, DragIcon, CurrencyIcon, Button } = library;

  let bun = {};
  ingredients.map(item => { if (item.type === "bun") { Object.assign(bun, item) } })

  return (
    <section className={Style.container}>
      {/* булка верхняя */}
      <ul className={Style.list}>
        <li className={Style.top}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </li>
        {/* ингриденты */}
        <li className={`${Style.ingredients} custom-scroll`}>
          <ul className={Style["ingredients-list"]}>
            {
              // eslint-disable-next-line array-callback-return
              ingredients.map((item, index) => {
                if (item.type !== "bun") {
                  return (
                    <li key={index} className={Style["ingredients-item"]}>
                      <div className={Style.drag}>
                        <DragIcon type="primary" />
                      </div>
                      <div className={Style.element}>
                        <ConstructorElement
                          isLocked={false}
                          text={item.name}
                          price={item.price}
                          thumbnail={item.image}
                        />
                      </div>
                    </li>
                  );
                }
              })
            }
          </ul>
        </li>
        {/* булка нижняя */}
        <li className={Style.bottom}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </li>
      </ul>
      {/* чек */}
      <div className={Style.wrapper}>
        <div className={Style.receipt}>
          <p className={`${Style.total} text text_type_digits-medium`}>{610}</p>
          <div className={Style.currency}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button
          type="primary"
          size="large"
          onClick={() => { }}
          htmlType="submit"
          children={"Оформить заказ"}
        />
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType.isRequired)
}

export default BurgerConstructor;

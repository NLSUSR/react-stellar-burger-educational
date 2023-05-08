import Style from "./BurgerConstructor.module.sass";
import * as library from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientPropType, iconPropTypes } from "../../utils/prop-types.js"

const { ConstructorElement, DragIcon, CurrencyIcon, Button } = library;

const BurgerConstructor = (props) => {
  const { ingredients } = props;

  return (
    <section className={Style.container}>
      {/* булка верхняя */}
      <ul className={Style.list}>
        <li className={Style.top}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${ingredients[0].name} (верх)`}
            price={ingredients[0].price}
            thumbnail={ingredients[0].image}
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
            text={`${ingredients[0].name} (низ)`}
            price={ingredients[0].price}
            thumbnail={ingredients[0].image}
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

ConstructorElement.propTypes = {
  text: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["top", "bottom"]),
  isLocked: PropTypes.bool,
  extraClass: PropTypes.string,
  handleClose: PropTypes.func,
};

[DragIcon, CurrencyIcon].forEach(item => { item.propTypes = { iconPropTypes } })


Button.propTypes = {
  type: PropTypes.oneOf(["secondary", "primary"]).isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
  onClick: PropTypes.func.isRequired,
  extraClass: PropTypes.string,
  htmlType: PropTypes.oneOf(["button", "submit", "reset"]).isRequired,
  children: PropTypes.string,
};

export default BurgerConstructor;

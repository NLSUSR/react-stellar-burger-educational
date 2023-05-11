import Style from "./recipe.module.sass"
import * as library from "@ya.praktikum/react-developer-burger-ui-components";

const Recipe = ({ array }) => {
  const { DragIcon, ConstructorElement } = library;
  return (
    <ul className={Style.list}>
      {
        array.map((item, index) => {
          if (item.type !== "bun") {
            return (
              <li key={index} className={Style.item}>
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
  )
};

export default Recipe;
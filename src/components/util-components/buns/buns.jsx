
import Style from "./buns.module.sass";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

const Buns = ({ array, type, lock, text }) => {
  return (
    <>
      {
        array.map((item, index) => {
          if (item._id === '643d69a5c3f7b9001cfa093c') {
            return (
              <li key={index} className={Style[`${type}`]}>
                <ConstructorElement
                  type={type}
                  isLocked={lock}
                  text={`${item.name} (${text})`}
                  price={item.price}
                  thumbnail={item.image}
                />
              </li>
            )
          }
        })
      }
    </>
  )
}

export default Buns;
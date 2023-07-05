import Style from "./ingredient-page.module.sass";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";

const IngredientPage = () => {
  const style = {
    container: { background: "transparent", border: 0, boxShadow: "none" },
    title: { margin: 0, textAlign: "center" },
  };

  return (
    <section className={Style.container}>
      <div className={Style.content}>
        <IngredientDetails styles={style} />
      </div>
    </section>
  );
};

export default IngredientPage;

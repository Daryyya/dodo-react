import style from "./style.module.css";

const Section = ({ children, id }) => {
  return (
    <section id={id} className={style.wrapper}>
      {children}
    </section>
  );
};

export default Section;

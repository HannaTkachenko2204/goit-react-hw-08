import { Hearts } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader_container}>
    <Hearts
      height="80"
      width="80"
      color="#490537"
      ariaLabel="hearts-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      />
      </div>
  );
};

export default Loader;

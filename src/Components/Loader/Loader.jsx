import css from "./Loader.module.css";
import { FallingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div className={css.block}>
      <FallingLines
        visible={true}
        height="40"
        width="40"
        color="DimGrey"
        ariaLabel="falling-circles-loading"
      />
      <p className={css.info}>
        <strong>Loading ...</strong>
      </p>
    </div>
  );
}
export default Loader;

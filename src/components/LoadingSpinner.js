import { useState, CSSProperties, useContext } from "react";
import SkewLoader from "react-spinners/SyncLoader";
import { Context } from "../context";

const override: CSSProperties = {
  display: "block",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderColor: "grey",
};

function LoadingSpinner() {
  let [loading, setLoading] = useContext(Context);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      {loading ? (
        <SkewLoader
          color={"#30e3df"}
          loading={true}
          cssOverride={override}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : null}
    </div>
  );
}

export default LoadingSpinner;

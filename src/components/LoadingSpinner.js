import { useState, CSSProperties, useContext } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { Context } from "../context";

const override: CSSProperties = {
  display: "block",
  position: "absolute",
  top: "48%",
  left: "48%",
  borderColor: "grey",
};

function LoadingSpinner() {
  let [loading, setLoading] = useContext(Context);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      {loading ? (
        <ScaleLoader
          color={"#30e3df"}
          loading={true}
          cssOverride={override}
          size={350}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : null}
    </div>
  );
}

export default LoadingSpinner;

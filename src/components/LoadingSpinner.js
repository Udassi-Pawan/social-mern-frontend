import { useState, CSSProperties, useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Context } from "../context";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function LoadingSpinner() {
  let [loading, setLoading] = useContext(Context);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      {loading ? (
        <ClipLoader
          color={color}
          //   loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : null}
    </div>
  );
}

export default LoadingSpinner;

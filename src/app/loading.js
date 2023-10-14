import React from "react";
import Style from "@/styles/loading.module.css";
const loading = () => {
  return (
    <div className={Style.loading}>
      <div className={Style.lds_dual_ring}></div>
    </div>
  );
};

export default loading;

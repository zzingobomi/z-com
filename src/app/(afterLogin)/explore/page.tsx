import SearchForm from "../_component/SearchForm";
import TrendSection from "./_component/TrendSection";

import style from "./explore.module.scss";

export default function Page() {
  return (
    <main className={style.main}>
      <div className={style.formZone}>
        <SearchForm />
      </div>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <TrendSection />
      </div>
    </main>
  );
}

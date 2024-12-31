"use client";

import { useState } from "react";
import style from "../search.module.scss";
import { useRouter, useSearchParams } from "next/navigation";

export default function Tab() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [current, setCurrent] = useState("hot");

  const onClickNew = () => {
    setCurrent("new");
    router.replace(`/search?q=${searchParams.get("q")}&f=live`);
  };

  const onClickHot = () => {
    setCurrent("hot");
    router.replace(`/search?q=${searchParams.get("q")}`);
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickHot}>
          인기
          <div className={style.tabIndicator} hidden={current === "new"}></div>
        </div>
        <div onClick={onClickNew}>
          최신
          <div className={style.tabIndicator} hidden={current === "hot"}></div>
        </div>
      </div>
    </div>
  );
}

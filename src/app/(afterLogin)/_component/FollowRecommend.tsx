"use client";

import { User } from "@/model/User";
import style from "./followRecommend.module.scss";
import { MouseEventHandler } from "react";
import Link from "next/link";

type Props = { user: User };
export default function FollowRecommend({ user }: Props) {
  const onFollow: MouseEventHandler<HTMLButtonElement> = (e) => {};

  return (
    <Link href={`/${user.id}`} className={style.container}>
      <div className={style.userLogoSection}>
        <div className={style.userLogo}>
          <img src={user.image as string} alt={user.id} />
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{user.nickname}</div>
        <div className={style.count}>@{user.id}</div>
      </div>
      <div className={style.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </Link>
  );
}

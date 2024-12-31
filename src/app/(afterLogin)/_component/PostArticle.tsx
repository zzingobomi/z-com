"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import style from "./post.module.scss";

type Props = {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
};

// client 컴포넌트 안에서 서버컴포넌트를 사용하려면 children 사용해야 한다.
// server 컴포넌트를 import 하면 client 컴포넌트처럼 동작한다.
// 자식 요소의 click 이 작동하게 하기 위해 onClickCapture 를 사용한다.

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    <article className={style.post} onClickCapture={onClick}>
      {children}
    </article>
  );
}

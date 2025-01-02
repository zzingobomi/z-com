"use client";

import style from "./signup.module.scss";
import BackButton from "./BackButton";
import { useFormStatus } from "react-dom";
import onSubmit from "../_lib/signup";
import { useActionState } from "react";

function showMessage(message: string | null | undefined) {
  switch (message) {
    case "no_id":
      return "아이디를 입력해주세요.";
    case "no_name":
      return "닉네임을 입력해주세요.";
    case "no_password":
      return "비밀번호를 입력해주세요.";
    case "no_image":
      return "프로필 사진을 등록해주세요.";
    case "user_exists":
      return "이미 존재하는 계정입니다.";
    default:
      return "";
  }
}

export default function SignupModal() {
  const [state, formAction] = useActionState(onSubmit, { message: null });
  const { pending } = useFormStatus();

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <BackButton />
          <div>계정을 생성하세요.</div>
        </div>
        <form action={formAction}>
          <div className={style.modalBody}>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="id">
                아이디
              </label>
              <input
                id="id"
                name="id"
                className={style.input}
                type="text"
                placeholder=""
                required
              />
            </div>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="name">
                닉네임
              </label>
              <input
                id="name"
                name="name"
                className={style.input}
                type="text"
                placeholder=""
                required
              />
            </div>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="password">
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                className={style.input}
                type="password"
                placeholder=""
                required
              />
            </div>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="image">
                프로필
              </label>
              <input
                id="image"
                name="image"
                className={style.input}
                type="file"
                accept="image/*"
                required
              />
            </div>
          </div>
          <div className={style.modalFooter}>
            <button
              type="submit"
              className={style.actionButton}
              disabled={pending}
            >
              가입하기
            </button>
            <div className={style.error}>{showMessage(state?.message)}</div>
          </div>
        </form>
      </div>
    </div>
  );
}

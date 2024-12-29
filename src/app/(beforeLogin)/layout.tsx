import { ReactNode } from "react";
import styles from "@/app/page.module.scss";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default async function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}

import Input from "@/views/components/ui/input/Input";
import Image from "next/image";
import styles from "./headerStyles.module.scss";
import userImage from "./images/user-icon.svg";

export default function Header() {
  return (
    <header className={styles.container}>
      <div>Logo</div>
      <div className={styles.actions_wrapper}>
        <Input placeholder="pesquisar avaliacoes" />
        <div className={styles.user_icon_wrapper}>
          <Image fill src={userImage} alt="ícone de usuário" />
        </div>
      </div>
    </header>
  );
}

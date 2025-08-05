import styles from "../assets/navStyles.module.scss";

export default function HambugerMenu({
  isActive,
  toggleMenu,
}: {
  isActive: boolean;
  toggleMenu: () => void;
}) {
  return (
    <div
      onClick={() => {
        toggleMenu();
      }}
      className={styles.button}
    >
      <div
        className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
      ></div>
    </div>
  );
}

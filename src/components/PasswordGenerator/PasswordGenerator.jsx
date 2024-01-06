import { useState } from "react";
import styles from "./PasswordGenerator.module.css";

export const PasswordGenerator = () => {
  const [createPassword, setCreatePassword] = useState("");
  const [copy, setCopy] = useState("copy");

  const randomPassword = () => Math.random().toString(36).slice(-10);

  const handleCreateClick = () => {
    setCreatePassword(randomPassword());
    setCopy("copy");
  };

  const handleCopyClick = () => {
    if (copy === "copy") {
      navigator.clipboard.writeText(createPassword);
      setCopy("copied");
    } else {
      setCopy("copy");
      navigator.clipboard.writeText("");
    }
  };

  return (
    <div className={styles.PasswordGenerator}>
      <h2>Click to generate a password!</h2>
      <div className={styles.buttons}>
        <button onClick={handleCreateClick}>Create</button>
        <button onClick={handleCopyClick}>{copy}</button>
      </div>
      <span className={styles.password}>{createPassword}</span>
    </div>
  );
};

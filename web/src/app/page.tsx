"use client";

import styles from "./styles.module.css";
import UserCard from "@/components/user-card";
import AITest from "@/components/ai-test";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <UserCard />
      <AITest />
    </div>
  );
}

import React from "react";
import { useQuery } from "@apollo/client";
import { TestOpenAI } from "./queries.graphql";
import styles from "./styles.module.css";

interface TestOpenAIResponse {
  testOpenAI: string;
}

const AITest: React.FC = () => {
  const { data, loading, error } = useQuery<TestOpenAIResponse>(TestOpenAI);

  if (loading)
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading AI test...</div>
      </div>
    );
  if (error)
    return (
      <div className={styles.container}>
        <div className={styles.error}>Error: {error.message}</div>
      </div>
    );
  if (!data?.testOpenAI)
    return (
      <div className={styles.container}>
        <div className={styles.noData}>No data received</div>
      </div>
    );

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Is my OpenAI API key working?</h3>
      <p className={styles.result}>{data.testOpenAI}</p>
    </div>
  );
};

export default AITest;

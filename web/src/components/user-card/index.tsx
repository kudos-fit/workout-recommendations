import React from "react";
import { useQuery } from "@apollo/client";
import { GetMe } from "./queries.graphql";
import { User } from "../../types";
import styles from "./styles.module.css";

interface GetMeResponse {
  me: User;
}

const UserCard: React.FC = () => {
  const { data, loading, error } = useQuery<GetMeResponse>(GetMe);

  if (loading)
    return <div className={styles.loading}>Loading user data...</div>;
  if (error) return <div className={styles.error}>Error: {error.message}</div>;
  if (!data?.me) return <div className={styles.error}>No user data found</div>;

  const { me: user } = data;

  return (
    <div className={styles.userCard}>
      <h2 className={styles.title}>{user.name}</h2>
      <div className={styles.content}>
        <div className={styles.email}>{user.email}</div>
        <div className={styles.fitnessLevel}>
          <span className={styles.fitnessLabel}>Fitness Level:</span>
          <span className={styles.fitnessValue}>{user.fitnessLevel}</span>
        </div>

        {user.preferences && (
          <div className={styles.preferences}>
            <h3 className={styles.preferencesTitle}>Preferences</h3>
            <div className={styles.preferencesGrid}>
              {user.preferences.difficulty && (
                <div className={styles.preferenceItem}>
                  <span className={styles.preferenceLabel}>Difficulty</span>
                  <span className={styles.preferenceValue}>
                    {user.preferences.difficulty}
                  </span>
                </div>
              )}
              {user.preferences.duration && (
                <div className={styles.preferenceItem}>
                  <span className={styles.preferenceLabel}>Duration</span>
                  <span className={styles.preferenceValue}>
                    {user.preferences.duration} min
                  </span>
                </div>
              )}
              {user.preferences.muscleGroups &&
                user.preferences.muscleGroups.length > 0 && (
                  <div className={styles.preferenceItem}>
                    <span className={styles.preferenceLabel}>
                      Muscle Groups
                    </span>
                    <span className={styles.preferenceValue}>
                      {user.preferences.muscleGroups.join(", ")}
                    </span>
                  </div>
                )}
              {user.preferences.equipment &&
                user.preferences.equipment.length > 0 && (
                  <div className={styles.preferenceItem}>
                    <span className={styles.preferenceLabel}>Equipment</span>
                    <span className={styles.preferenceValue}>
                      {user.preferences.equipment.join(", ")}
                    </span>
                  </div>
                )}
              {user.preferences.goals && user.preferences.goals.length > 0 && (
                <div className={styles.preferenceItem}>
                  <span className={styles.preferenceLabel}>Goals</span>
                  <span className={styles.preferenceValue}>
                    {user.preferences.goals.join(", ")}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;

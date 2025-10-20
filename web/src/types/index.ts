// Core Types
export interface User {
  id: string;
  email: string;
  name: string;
  fitnessLevel: "beginner" | "intermediate" | "advanced";
  preferences: WorkoutPreferences;
  createdAt: string;
  updatedAt: string;
}

export interface Workout {
  id: string;
  name: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: number;
  muscleGroups: string[];
  equipment: string[];
  instructions: string[];
  createdAt: string;
  updatedAt: string;
}

// Input Types
export interface WorkoutPreferences {
  difficulty?: "beginner" | "intermediate" | "advanced";
  duration?: number;
  muscleGroups?: string[];
  equipment?: string[];
  goals?: string[];
}

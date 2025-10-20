-- Seed data for the workout recommendation system
-- Insert sample users
INSERT INTO
    users (id, email, name, fitness_level, preferences)
VALUES
    (
        'user-1',
        'john.doe@example.com',
        'John Doe',
        'beginner',
        '{"difficulty": "beginner", "duration": 30, "muscleGroups": ["chest", "arms"], "goals": ["strength"]}'
    ),
    (
        'user-2',
        'jane.smith@example.com',
        'Jane Smith',
        'intermediate',
        '{"difficulty": "intermediate", "duration": 45, "muscleGroups": ["legs", "glutes"], "goals": ["endurance", "strength"]}'
    ),
    (
        'user-3',
        'mike.johnson@example.com',
        'Mike Johnson',
        'advanced',
        '{"difficulty": "advanced", "duration": 60, "muscleGroups": ["back", "shoulders"], "goals": ["strength", "muscle-building"]}'
    );

-- Insert sample workouts
INSERT INTO
    workouts (
        id,
        name,
        description,
        difficulty,
        duration_minutes,
        muscle_groups,
        equipment,
        instructions
    )
VALUES
    (
        'workout-1',
        'Push-up Variations',
        'Upper body strength workout focusing on chest, triceps, and shoulders',
        'beginner',
        15,
        '["chest", "triceps", "shoulders"]',
        '[]',
        '["Start in plank position", "Lower body until chest nearly touches floor", "Push back up to starting position", "Repeat for 10-15 reps"]'
    ),
    (
        'workout-2',
        'Squat Circuit',
        'Lower body strength and endurance workout',
        'intermediate',
        20,
        '["quadriceps", "glutes", "hamstrings"]',
        '[]',
        '["Stand with feet shoulder-width apart", "Lower into squat position", "Return to standing position", "Complete 3 sets of 15 reps"]'
    ),
    (
        'workout-3',
        'Deadlift Progression',
        'Full body strength exercise focusing on posterior chain',
        'advanced',
        30,
        '["hamstrings", "glutes", "back", "traps"]',
        '["barbell", "weights"]',
        '["Stand with feet hip-width apart", "Grip bar with hands just outside legs", "Keep back straight and chest up", "Lift bar by extending hips and knees", "Lower with control"]'
    ),
    (
        'workout-4',
        'Bodyweight HIIT',
        'High-intensity interval training with bodyweight exercises',
        'intermediate',
        25,
        '["full-body"]',
        '[]',
        '["Perform each exercise for 45 seconds", "Rest for 15 seconds between exercises", "Complete 3 rounds", "Exercises: burpees, mountain climbers, jumping jacks, high knees"]'
    ),
    (
        'workout-5',
        'Yoga Flow',
        'Gentle yoga sequence for flexibility and relaxation',
        'beginner',
        30,
        '["full-body"]',
        '["yoga mat"]',
        '["Start in child pose", "Move to downward dog", "Flow through sun salutations", "End in savasana"]'
    ),
    (
        'workout-6',
        'Bench Press',
        'Classic chest and tricep strength exercise',
        'intermediate',
        20,
        '["chest", "triceps", "shoulders"]',
        '["bench", "barbell", "weights"]',
        '["Lie on bench with feet flat on floor", "Grip bar with hands slightly wider than shoulders", "Lower bar to chest with control", "Press up to starting position"]'
    ),
    (
        'workout-7',
        'Pull-up Progression',
        'Upper body pulling strength exercise',
        'advanced',
        15,
        '["back", "biceps", "shoulders"]',
        '["pull-up bar"]',
        '["Hang from bar with overhand grip", "Pull body up until chin clears bar", "Lower with control", "Start with assisted variations if needed"]'
    ),
    (
        'workout-8',
        'Cardio Blast',
        'High-energy cardio workout',
        'beginner',
        20,
        '["cardiovascular"]',
        '[]',
        '["Warm up with light jogging", "Perform jumping jacks for 1 minute", "High knees for 1 minute", "Butt kicks for 1 minute", "Cool down with walking"]'
    ),
    (
        'workout-9',
        'Core Strength',
        'Targeted abdominal and core workout',
        'intermediate',
        15,
        '["abs", "core"]',
        '[]',
        '["Plank hold for 30 seconds", "Russian twists for 20 reps", "Bicycle crunches for 20 reps", "Mountain climbers for 30 seconds"]'
    ),
    (
        'workout-10',
        'Leg Day Special',
        'Comprehensive lower body workout',
        'advanced',
        45,
        '["quadriceps", "hamstrings", "glutes", "calves"]',
        '["barbell", "dumbbells", "squat rack"]',
        '["Back squats: 4 sets of 8-10 reps", "Romanian deadlifts: 3 sets of 10-12 reps", "Walking lunges: 3 sets of 12 each leg", "Calf raises: 3 sets of 15-20 reps"]'
    );
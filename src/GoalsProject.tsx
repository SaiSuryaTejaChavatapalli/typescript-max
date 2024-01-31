import { useState } from "react";
import "./App.css";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};
function GoalsProject() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    const newGoal = {
      title: goal,
      id: Math.random(),
      description: summary,
    };
    setGoals((prev) => [...prev, newGoal]);
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoal) => prevGoal.filter((goal) => goal.id !== id));
  };
  return (
    <>
      <Header image={{ src: "", alt: "Header Image" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </>
  );
}

export default GoalsProject;

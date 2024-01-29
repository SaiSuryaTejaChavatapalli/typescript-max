import CourseGoal from "./CourseGoal";
import { type ReactNode } from "react";
import { type CourseGoal as CGoal } from "../App";
import InfoBox from "./Infobox";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};
export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">You have no courses yet, start adding some.</InfoBox>
    );
  }
  let warningBox: ReactNode;
  if (goals.length > 3) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You have added too many goals!, Don't put too many on your plate.
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}

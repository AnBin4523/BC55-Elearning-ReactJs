import Number from "./Countup";
import CourseList from "./CourseList";
import FeedBack from "./Feedback";
import InfoCourse from "./InfoCourse";
import Introduce from "./Introduce";
import Welcome from "./Welcome";

export default function HomePage() {
  return (
    <div>
      <Welcome />
      <InfoCourse />
      <CourseList />
      <Number />
      <Introduce />
      <FeedBack />
    </div>
  );
}

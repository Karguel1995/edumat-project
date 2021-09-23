import "./Courses.css";

import courseImage from "../../assets/course-image.png";
import courseLevel from "../../assets/course-level.png";
import courseHeart from "../../assets/course-heart.png";

const courseList = [
  {
    id: 1,
    name: "Ten kurs jest ciekawy, odpal i zrozumiesz",
    description:
      "Stretch your analytic muscles with knight, knaves, Kukpon login gates, and more!",
    imageUrl: courseImage,
    level: courseLevel,
    additionalClass: "",
    alt: "course image",
  },
  {
    id: 2,
    name: "Działania na liczbach i ich kolejność wykonywania",
    description:
      "Stretch your analytic muscles with knight, knaves, Kukpon login gates, and more!",
    imageUrl: courseImage,
    level: courseLevel,
    additionalClass: "vertically-inverted",
    alt: "course image",
  },
  {
    id: 3,
    name: "Ten kurs jest ciekawy, odpal i zrozumiesz",
    description:
      "Stretch your analytic muscles with knight, knaves, Kukpon login gates, and more!",
    imageUrl: courseImage,
    level: courseLevel,
    additionalClass: "horizontally-inverted",
    alt: "course image",
  },
  {
    id: 4,
    name: "Działania na liczbach i ich kolejność wykonywania",
    description:
      "Stretch your analytic muscles with knight, knaves, Kukpon login gates, and more!",
    imageUrl: courseImage,
    level: courseLevel,
    additionalClass: "",
    alt: "course image",
  },
];

const displayCourses = courseList.map((course) => (
  <div key={course.id} className="course">
    <div className="course__images">
      <img
        src={course.imageUrl}
        className={`course__image${
          course.additionalClass ? `--${course.additionalClass}` : ""
        }`}
        alt={course.alt}
      />
      <div className="course__level">
        <img src={course.level} alt="" />
        <div className="course__line"></div>
        <img src={courseHeart} alt="" />
      </div>
    </div>
    <h2 className="course__name">{course.name}</h2>
    <p className="course__description">{course.description}</p>
  </div>
));

const Courses = () => {
  return (
    <div className="courses">
      <div className="courses__select">
        <p className="courses__option courses__option--selected">
          Do zrobienia
        </p>
        <p className="courses__option">W trakcie</p>
        <p className="courses__option">Wykonane</p>
      </div>
      <div className="courses-list">{displayCourses}</div>
    </div>
  );
};

export default Courses;

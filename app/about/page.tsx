import { Metadata } from "next";
import { CourseContext, CourseTopics } from "../page";

export const metadata: Metadata = {
  title: "About us",
};

export default function About() {
  return (
    <section className="max-w-5xl">
      <h2 className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl text-center py-5 underline">
        About this course
      </h2>
      <CourseTopics />
      <br />
      <br />
      <CourseContext />
    </section>
  );
}

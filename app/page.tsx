import Link from "next/link";
import { Acme } from "next/font/google";

const acme = Acme({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section className="py-6 pt-6 md:pt-10 lg:pt-32 max-w-5xl min-h-screen">
        <div className="flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1
            className={`${acme.className} text-3xl sm:text-5xl md:text-6xl lg:text-7xl`}
          >
            An Open Source Event RSVP app built using Next.js 13
          </h1>
          <p className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8 py-5">
            We are going to build a web application with the new Next.js 13.
            Let's start by following our tutorial.
          </p>
          <div className="px-4 flex gap-3">
            <Link
              href="https://nextjs.choubari.com"
              target="_blank"
              rel="noreferrer"
              className="flex max-w-fit items-center justify-center rounded-full border-2 border-blue-600 text-white px-5 py-3 shadow-lg hover:bg-transparent hover:text-blue-600 bg-blue-600"
            >
              Get Started
            </Link>
            <Link
              href="https://github.com/choubari/RSVP-Event-App"
              target="_blank"
              rel="noreferrer"
              className="flex max-w-fit items-center justify-center rounded-full border-2 border-blue-600 text-white px-5 py-3 shadow-lg hover:bg-transparent hover:text-blue-600 bg-blue-600"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <section className="max-w-5xl">
        <h2 className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl text-center py-5 underline">
          What you will learn?
        </h2>
        <CourseTopics />
      </section>
      <section className="max-w-5xl py-10">
        <h2 className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl text-center py-5 underline">
          How to start?
        </h2>
        <CourseContext />
      </section>
    </>
  );
}

export function CourseTopics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="border rounded-md p-4 shadow-md">
        <div className="mb-2 flex items-center">
          <svg
            className="w-6 h-6 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z"
              fill="currentColor"
            />
          </svg>
          <h3 className="text-3xl font-bold">Next.js 13</h3>
        </div>
        <p className="text-gray-600">
          {
            "Learn top features of Nextjs 13 in this course, app directory, routing, layouts, and more..."
          }
        </p>
      </div>
      <div className="border rounded-md p-4 shadow-md">
        <div className="mb-2 flex items-center">
          <svg
            className="w-6 h-6 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z"
              fill="currentColor"
            />
          </svg>
          <h3 className="text-3xl font-bold">React 18</h3>
        </div>
        <p className="text-gray-600">
          {
            "You will learn the latest React 18 features while building an application, server components, data fetching with suspense"
          }
        </p>
      </div>
      <div className="border rounded-md p-4 shadow-md">
        <div className="mb-2 flex items-center">
          <svg
            className="w-6 h-6 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z"
              fill="currentColor"
            />
          </svg>
          <h3 className="text-3xl font-bold">Data Fetching</h3>
        </div>
        <p className="text-gray-600">
          {
            "Learn how to fetch data in both client and server components, with best practices and no confusions."
          }
        </p>
      </div>
      <div className="border rounded-md p-4 shadow-md">
        <div className="mb-2 flex items-center">
          <svg
            className="w-6 h-6 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z"
              fill="currentColor"
            />
          </svg>
          <h3 className="text-3xl font-bold">Performance</h3>
        </div>
        <p className="text-gray-600">
          {
            "Apply Next.js best practices to optimize your website speed and ship less JavaScript."
          }
        </p>
      </div>
      <div className="border rounded-md p-4 shadow-md">
        <div className="mb-2 flex items-center">
          <svg
            className="w-6 h-6 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z"
              fill="currentColor"
            />
          </svg>
          <h3 className="text-3xl font-bold">SEO</h3>
        </div>
        <p className="text-gray-600">
          {
            "A close look on how to handle and optimize your SEO for search engines and web crawlers."
          }
        </p>
      </div>
      <div className="border rounded-md p-4 shadow-md">
        <div className="mb-2 flex items-center">
          <svg
            className="w-6 h-6 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z"
              fill="currentColor"
            />
          </svg>
          <h3 className="text-3xl font-bold">Deployment</h3>
        </div>
        <p className="text-gray-600">
          {
            "How to deploy easily your Next.js Applications using Vercel and Github, and what can you do after..."
          }
        </p>
      </div>
    </div>
  );
}

export function CourseContext() {
  return (
    <p className="text-xl text-center">
      This course was presented as a hands-on-lab at{" "}
      <Link className="underline" href={"https://devoxx.ma/"} target="_blank">
        Devoxx Morocco
      </Link>{" "}
      Conference 2023 by{" "}
      <Link
        className="underline"
        href={"https://choubari.com/"}
        target="_blank"
      >
        Kawtar CHOUBARI
      </Link>
      . The goal is to build a quick RSVP Event application, while learning web
      development with Next.js 13 core features. To make it easy for ourselves,
      We are going to use an API based on my Guichet.com events data, hosted on
      a json-server, and handle the RSVP part on local storage. You will find
      more on how our API work in the tutorial.
      <br />
      <br />
      To better follow with the instructor, checkout the written documentation
      tutorial to build a similar app to this one.
      <br />
      <br />
      <span className="font-bold">Try it by yourself!</span>
      <br />
      <br />
      In case of difficulties, reach out the instructor live at the conference
      and feel free to ask here, or drop a DM on her{" "}
      <Link
        className="underline"
        href={"https://twitter.com/choubari_"}
        target="_blank"
      >
        Twitter (X)
      </Link>{" "}
      if you're doing this exercise at home!
      <br />
      <br />
      At the end, you can checkout the whole source code of this application in
      this{" "}
      <Link
        className="underline"
        href={"https://github.com/choubari/RSVP-Event-App"}
        target="_blank"
      >
        Github Repository
      </Link>
      , and customize your app with{" "}
      <Link
        className="underline"
        href={"https://nextjs.choubari.com/features-to-add"}
        target="_blank"
      >
        more features
      </Link>
      ! Stay Creative!
    </p>
  );
}

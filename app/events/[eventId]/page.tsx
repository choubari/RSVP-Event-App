"use client";
import { Event } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "../loading";
import Ribbon from "@/components/ribbon";

interface PageProps {
  params: {
    eventId: number;
  };
}
// works on server components only (at the moment)
/*
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const res = await fetch(`/api/events/${params.eventId}`); // route handler
  const event = await res.json();

  if (!event) {
    return {};
  }
  return {
    title: event.title,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      images: [
        {
          url: event.cover_url,
          alt: event.cover_alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description: event.description,
      images: [event.cover_url],
    },
  };
}
*/

// Runs on Server Component, no public env variable
/* 
async function getEvent(id: number) {
  const events = await fetch(
    `${process.env.API_ENDPOINT}/events/${id}`
  );
  return events;
}
*/
function hasRSVPed(eventId: number): boolean {
  const rsvpEvents = JSON.parse(localStorage.getItem("rsvpEvents") || "[]");
  return rsvpEvents.includes(eventId);
}

export default function EventPage(props: PageProps) {
  const id = props.params.eventId;

  const [event, setEvent] = useState<Event>();
  const [rsvpEvents, setRSVPEvents] = useState<string[]>([]);
  const [rsvpCount, setRSVPCount] = useState(0);

  useEffect(() => {
    async function fetchEvent() {
      const res = await fetch(`/api/events/${id}`); // route handler
      const event = await res.json();
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 seconds delay

      setEvent(event);
      setRSVPCount(event.rsvp);
    }
    fetchEvent();

    const storedRSVPEvents = JSON.parse(
      localStorage.getItem("rsvpEvents") || "[]"
    );
    setRSVPEvents(storedRSVPEvents);
  }, []);

  if (!event) {
    return <Loading />; // or some kind of spinner or placeholder
  }

  if (Object.keys(event).length === 0) {
    throw new Error("Event does not exist");
  }

  async function handleRSVP(eventId: number) {
    rsvpEvents.push(eventId.toString());
    localStorage.setItem("rsvpEvents", JSON.stringify(rsvpEvents));

    const updatedEvent = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/events/${eventId}`, // calling with public env variable
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rsvp: rsvpCount + 1 }),
      }
    );
    if (updatedEvent.ok) {
      setRSVPCount(rsvpCount + 1);
    }
    return updatedEvent.json();
  }

  const alreadyRSVPed = hasRSVPed(id);

  const rsvpButtonClick = async () => {
    if (!alreadyRSVPed) {
      await handleRSVP(id);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5 max-w-6xl">
      <h1 className="text-4xl font-bold mb-10">{event.title}</h1>

      <div className="relative bg-white shadow-2xl rounded-lg overflow-hidden flex mb-6 w-full">
        <div className="relative w-1/2">
          <Image
            src={event.cover_url}
            alt={event.cover_alt}
            layout="responsive"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            width={500}
            height={500}
          />

          {event.status !== "published" ? (
            <Ribbon label={event.status} position={"left"} />
          ) : (
            <></>
          )}
        </div>

        <div className="w-1/2 px-8 py-5 flex flex-col justify-between">
          <div>
            <h2 className="text-5xl font-bold mb-2">{event.price} MAD</h2>
            <p className="mb-2">{event.date}</p>
            <div className="flex items-center">
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
              <p className="py-3">
                {event.address_name}, {event.address_city}
              </p>
            </div>
          </div>
          <button
            className={`bg-blue-500 text-white text-xl py-2 px-6 rounded-full mt-4 flex justify-between ${
              alreadyRSVPed || event.status === "sold_out"
                ? "cursor-not-allowed bg-gray-400"
                : ""
            } `}
            onClick={rsvpButtonClick}
            disabled={alreadyRSVPed}
          >
            <span>RSVP</span>
            <span className="ml-4">{rsvpCount}</span>
          </button>
          <div>
            <h2 className="text-2xl font-medium mb-2">Description</h2>
            <p className="mb-3 w-full">{event.description}</p>

            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 pt-1 underline"
            >
              See more details
            </a>
          </div>
        </div>
        <Ribbon label={event.price_type} position={"right"} />
      </div>
      <Link href="/events" className="items-center hover:underline my-20">
        <p>{"<"} See all events</p>
      </Link>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import EventCard from "@/components/event-card";
import { Category, Event } from "@/types";

import { useSearchParams } from "next/navigation";
import LoadingSkeleton from "@/components/loading-grid-skeleton";

export default function Events() {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [allCategoriesSelected, setAllCategoriesSelected] = useState(true);
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");

  useEffect(() => {
    // Fetch all events and categories on component mount
    async function fetchData() {
      const eventResponse = await fetch("/api/events");
      const catResponse = await fetch("/api/categories");

      const fetchedEvents = await eventResponse.json();
      const fetchedCategories = await catResponse.json();
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 seconds delay

      setEvents(fetchedEvents);
      setCategories(fetchedCategories.map((cat: Category) => cat.name));
      setLoading(false);
    }

    fetchData();

    if (selectedCategory) {
      setSelectedCategories([selectedCategory]);
      console.log(selectedCategories);
      setAllCategoriesSelected(false);
    }
  }, [selectedCategory]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "all") {
      setAllCategoriesSelected(e.target.checked);
      setSelectedCategories([]);
    } else {
      setAllCategoriesSelected(false);
      if (e.target.checked) {
        setSelectedCategories((prev) => [...prev, e.target.value]);
      } else {
        setSelectedCategories((prev) =>
          prev.filter((cat) => cat !== e.target.value)
        );
      }
    }
  };

  const filteredEvents = events.filter(
    (event) =>
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) => event.categories.includes(cat))
  );

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium my-3">
        Events Page
      </h1>
      <div className="mb-5">
        <label className="mr-3">
          <input
            type="checkbox"
            value="all"
            checked={allCategoriesSelected}
            onChange={handleCheckboxChange}
          />
          All Categories
        </label>
        {loading ? (
          <label key={"loading"} className="mr-3">
            <input type="checkbox" checked={false} />
            Loading ...
          </label>
        ) : (
          categories.map((category) => (
            <label key={category} className="mr-3">
              <input
                type="checkbox"
                value={category}
                checked={
                  !allCategoriesSelected &&
                  selectedCategories.includes(category)
                }
                onChange={handleCheckboxChange}
              />
              {category}
            </label>
          ))
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {loading ? (
          <LoadingSkeleton />
        ) : (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        )}
      </div>
    </div>
  );
}

// Server Component
/*
import EventCard from "@/components/event-card";
import { Event } from "@/types";

async function getEvents() {
  const events = (await fetch(`${process.env.API_ENDPOINT}/events`)).json();
  return events;
}

export default async function Events() {
  const allEvents = getEvents();
  const [events] = await Promise.all([allEvents]);

  if (!events) {
    return <div>Failed to load data</div>;
  }

  return (
    <div>
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium my-3">
        Events Page
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {events.map((event: Event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

*/

import { Event } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Ribbon from "./ribbon";

interface EventCardProps {
  event: Event;
}

function EventCard({ event }: EventCardProps) {
  return (
    <div className="flex flex-col shadow-2xl rounded-lg overflow-hidden relative w-72">
      <Link href={`/events/${event.id}`}>
        <div className="relative w-72 h-72">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            src={event.cover_url}
            alt={event.cover_alt}
          />
          {event.status === "sold_out" ? (
            <Ribbon label={event.status} position={"left"} />
          ) : (
            <></>
          )}
        </div>
        <div className="p-4 bg-white">
          <p className="text-black font-bold">{event.title}</p>
        </div>
      </Link>
    </div>
  );
}

export default EventCard;

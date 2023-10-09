export default function Ribbon({
  label,
  position,
}: {
  label: string;
  position: "left" | "right";
}) {
  if (position === "right") {
    return (
      <div className="absolute top-4 right-8 transform rotate-45 -translate-y-3 translate-x-16 bg-red-500 text-white py-2 px-10 uppercase">
        {label}
      </div>
    );
  }
  return (
    <div className="absolute -top-5 -left-11 transform -rotate-45 translate-y-8 bg-red-500 text-white py-3 px-10 uppercase">
      {label}
    </div>
  );
}

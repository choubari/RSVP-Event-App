export async function GET(
  request: Request,
  { params }: { params: { eventId: string } }
) {
  const response = await fetch(
    `${process.env.API_ENDPOINT}/events/${params.eventId}`,
    {
      cache: "no-store",
    }
  );
  const event = await response.json();
  return new Response(JSON.stringify(event));
}

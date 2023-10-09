export async function GET(request: Request) {
  const response = await fetch(`${process.env.API_ENDPOINT}/events`);
  const events = await response.json();
  return new Response(JSON.stringify(events));
}

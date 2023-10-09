export async function GET(request: Request) {
  const response = await fetch(`${process.env.API_ENDPOINT}/categories`);
  const categories = await response.json();
  return new Response(JSON.stringify(categories));
}

export async function getCategories() {
  const categories = await fetch(`${process.env.API_ENDPOINT}/categories`);
  return categories;
}

export async function getEvents() {
  const events = await fetch(`${process.env.API_ENDPOINT}/events`);
  return events;
}

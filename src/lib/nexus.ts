export async function loadPortfolio(url = '/portfolio.config.json') {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to load portfolio JSON');
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

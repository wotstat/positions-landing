
export async function parseGameVersion(url: string) {
  const response = await fetch(url)
  const text = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "text/xml");
  return doc.documentElement.querySelector("Path[mask='*.wotmod']")?.textContent ?? './mods/GAME_VERSION';
}

export async function getLatestGameVersion() {
  const lastCheck = Number.parseInt(localStorage.getItem('lastCheck') ?? '0');

  if (Date.now() - lastCheck < 1000 * 60) {
    const wg = localStorage.getItem('latestWgVersion') ?? '';
    const lesta = localStorage.getItem('latestLestaVersion') ?? '';

    if (wg && lesta) {
      return { wg, lesta }
    }
  }

  console.log('Checking for latest game versions');

  const wg = await parseGameVersion('https://raw.githubusercontent.com/IzeBerg/wot-src/EU/sources/paths.xml')
  localStorage.setItem('latestWgVersion', wg)

  const lesta = await parseGameVersion('https://raw.githubusercontent.com/IzeBerg/wot-src/RU/sources/paths.xml')
  localStorage.setItem('latestLestaVersion', lesta)

  localStorage.setItem('lastCheck', Date.now().toString());

  return { wg, lesta }
}
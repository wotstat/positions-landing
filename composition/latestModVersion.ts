

export async function getLatestModVersion() {

  const lastCheck = Number.parseInt(localStorage.getItem('lastCheckModVersion') ?? '0');

  if (Date.now() - lastCheck < 1000 * 60) {
    const lastMod = localStorage.getItem('latestModVersion') ?? '';
    if (lastMod) {
      return JSON.parse(lastMod)
    }
  }

  const response = await fetch("https://api.github.com/repos/WOT-STAT/minimap-positions/releases/latest")
  const text = await response.text();
  const json = JSON.parse(text);

  const asset = (json.assets as Record<string, string>[]).find(t => t.name.endsWith('.wotmod')) as {
    browser_download_url: string,
    name: string,
  };

  const result = {
    browser_download_url: asset.browser_download_url,
    name: asset.name,
    actual: true,
  }

  localStorage.setItem('latestModVersion', JSON.stringify(result))
  localStorage.setItem('lastCheckModVersion', Date.now().toString());

  return result

}
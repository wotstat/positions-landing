
export async function getLatestModVersion() {

  const response = await fetch("https://api.github.com/repos/WOT-STAT/minimap-positions/releases/latest")
  const text = await response.text();
  const json = JSON.parse(text);

  const asset = (json.assets as Record<string, string>[]).find(t => t.name.endsWith('.wotmod')) as {
    browser_download_url: string,
    name: string,
  };

  return {
    browser_download_url: asset.browser_download_url,
    name: asset.name,
    actual: true,
  }
}
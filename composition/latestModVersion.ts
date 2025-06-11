

export async function getLatestModVersion(): Promise<{
  lesta: {
    browser_download_url: string,
    name: string,
  },
  wg: {
    browser_download_url: string,
    name: string,
  },
  actual: boolean,
}> {

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

  const assetWg = (json.assets as Record<string, string>[]).find(t => t.name.endsWith('.wotmod')) as {
    browser_download_url: string,
    name: string,
  };

  const assetLesta = (json.assets as Record<string, string>[]).find(t => t.name.endsWith('.mtmod')) as {
    browser_download_url: string,
    name: string,
  };

  const result = {
    lesta: {
      browser_download_url: assetLesta.browser_download_url,
      name: assetLesta.name,
    }, wg: {
      browser_download_url: assetWg.browser_download_url,
      name: assetWg.name,
    },
    actual: true,
  }

  localStorage.setItem('latestModVersion', JSON.stringify(result))
  localStorage.setItem('lastCheckModVersion', Date.now().toString());

  return result

}
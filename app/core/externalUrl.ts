
export const baseUrl = (() => {
  if (typeof location === 'undefined') return { prefix: '', domain: 'wotstat.info' }
  if (import.meta.env.MODE === 'development') return { prefix: '', domain: 'mtstat.info' }

  const matchWot = location.host.match(/^(.*)\.positions\.wotstat\.info$/i)
  if (matchWot) return { prefix: `${matchWot[1]}.`, domain: 'wotstat.info' }

  const matchMt = location.host.match(/^(.*)\.positions\.mtstat\.info$/i)
  if (matchMt) return { prefix: `${matchMt[1]}.`, domain: 'mtstat.info' }

  if (location.host == 'positions.mtstat.info') return { prefix: '', domain: 'mtstat.info' }

  return { prefix: '', domain: 'wotstat.info' }
})()

export function getAnalyticsUrl() {
  return `${import.meta.env.VITE_ANALYTICS_URL || `https://${baseUrl.prefix}${baseUrl.domain}`}`;
}

export function getPositionsWebSocketOrigin(pageOrigin: string, mode: string, configuredOrigin?: string) {
  if (mode === 'development' && configuredOrigin) return configuredOrigin
  return pageOrigin.replace(/^http/, 'ws')
}

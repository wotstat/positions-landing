
const base = (() => {
  if (typeof location === 'undefined') return { prefix: '', domain: 'wotstat.info' }
  if (import.meta.env.MODE === 'development') return { prefix: '', domain: 'mtstat.info' }

  const matchWot = location.host.match(/^(.*)\.wotstat\.info$/i)
  if (matchWot) return { prefix: `${matchWot[1]}.`, domain: 'wotstat.info' }

  const matchMt = location.host.match(/^(.*)\.mtstat\.info$/i)
  if (matchMt) return { prefix: `${matchMt[1]}.`, domain: 'mtstat.info' }

  if (location.host == 'mtstat.info') return { prefix: '', domain: 'mtstat.info' }

  return { prefix: '', domain: 'wotstat.info' }
})()

export function getAnalyticsUrl() {
  return `${import.meta.env.VITE_ANALYTICS_URL || `https://${base.prefix}${base.domain}`}`;
}
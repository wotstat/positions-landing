

export function getPrefix() {
  const route = useRequestURL();
  const match = route.href.match(/^(.*)\.wotstat\.info$/i);
  const subdomain = match ? `${match[1]}.` : '';
  return subdomain;
}

export function getAnalyticsUrl() {
  const prefix = getPrefix();
  return `${import.meta.env.VITE_ANALYTICS_URL || `https://${prefix}wotstat.info`}`;
}
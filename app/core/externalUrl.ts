

export function getPrefix() {
  const route = useRequestURL();
  const match = route.href.match(/^(?:.*):\/\/(.*)\.positions\.wotstat\.info.*$/i);
  const prefix = match ? `${match[1]}.` : '';
  return prefix;
}

export function getAnalyticsUrl() {
  const prefix = getPrefix();
  return `${import.meta.env.VITE_ANALYTICS_URL || `https://${prefix}wotstat.info`}`;
}
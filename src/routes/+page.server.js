export function load({ request }) {
  const countryCode = request.headers.get("x-vercel-ip-country")?.toString();
	
  return {
    country: countryCode,
		isUs: countryCode?.toUpperCase() === "US",
	};
}

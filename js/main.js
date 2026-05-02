// Current Date and Time (UTC)
const currentDateTime = new Date().toUTCString();

// Formatted date
const formattedDateTime = new Date(currentDateTime).toISOString().replace('T', ' ').substring(0, 19);

console.log('Current Date and Time in UTC:', formattedDateTime);
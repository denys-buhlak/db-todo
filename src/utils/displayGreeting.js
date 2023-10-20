/**
 * Returns a greeting based on the current time.
 * @returns {string} The appropriate greeting.
 */
export const displayGreeting = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting = '';

  if (currentHour < 12 && currentHour >= 5) {
    greeting = 'Good morning';
  } else if (currentHour < 18 && currentHour > 12) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  return greeting;
};

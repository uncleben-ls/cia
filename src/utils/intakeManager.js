// src/utils/intakeManager.js

export const getNextIntake = () => {
  const now = new Date();
  const month = now.getMonth(); // 0 = Jan, 1 = Feb, ... 11 = Dec

  // Define Intake Windows
  // Jan (Months 10, 11, 0) -> Next: January (All)
  // Apr (Months 1, 2, 3) -> Next: April (Short Courses Only)
  // Jul (Months 4, 5, 6) -> Next: July (All)
  // Sep (Months 7, 8, 9) -> Next: September (Short Courses Only)

  if (month >= 10 || month <= 0) {
    return { name: "January 2026", type: "Full & Short Courses", isShortOnly: false };
  } else if (month >= 1 && month <= 3) {
    return { name: "April 2026", type: "Short Courses Only", isShortOnly: true };
  } else if (month >= 4 && month <= 6) {
    return { name: "July 2026", type: "Full & Short Courses", isShortOnly: false };
  } else {
    return { name: "September 2026", type: "Short Courses Only", isShortOnly: true };
  }
};
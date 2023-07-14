const currentDate = new Date();
const currentDay = currentDate.getDay();
const currentTime = currentDate.getHours() * 100 + currentDate.getMinutes();

const schedule = {
  monday: {
    subject: "Maths",
    startTime: 1000,
    endTime: 1100,
  },
};

const currentDayCell = document.getElementById(
  getDayName(currentDay) + "-subject"
);
if (currentDayCell) {
  const subjectStartTime = schedule[getDayName(currentDay)].startTime;
  const subjectEndTime = schedule[getDayName(currentDay)].endTime;

  if (currentTime < subjectStartTime) {
    currentDayCell.classList.add("past");
  } else if (currentTime >= subjectStartTime && currentTime <= subjectEndTime) {
    currentDayCell.classList.add("current");
    currentDayCell.textContent += " - Next class";
  } else {
    currentDayCell.classList.add("past");
  }
}
function getDayName(dayIndex) {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  return days[dayIndex];
}

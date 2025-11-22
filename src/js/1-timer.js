import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let chosenDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chosenDate = selectedDates[0];
    const startBtn = document.querySelector("[data-start]");
    if (chosenDate < new Date()) {
      window.alert("Please choose a date in the future");
      startBtn.disabled = true;
      return;
    } else if (chosenDate >= selectedDates[0]) {
      startBtn.disabled = false;
    }
  },
};



flatpickr('#datetime-picker', options);
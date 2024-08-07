import { MODE } from "@/context";

export const MODES = [
  {
    label: "Pomodoro",
    time: 1500,
    color: "bg-pomocolor1",
    mode: "pomodoro" as MODE,
  },
  {
    label: "Short Break",
    time: 300,
    color: "bg-pomocolor2",
    mode: "shortBreak" as MODE,
  },
  {
    label: "Long Break",
    time: 900,
    color: "bg-pomocolor3",
    mode: "longBreak" as MODE,
  },
];

export const colorByMode = (mode: MODE) => {
  let color = "pomocolor1";
  switch (mode) {
    case "pomodoro":
      color = "pomocolor1";
      break;

    case "shortBreak":
      color = "pomocolor2";
      break;

    case "longBreak":
      color = "pomocolor3";
      break;
    default:
      break;
  }
  return color;
};

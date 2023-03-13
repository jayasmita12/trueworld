import { writable } from "svelte/store";

export const user = writable({
  name: "Micheal Scott",
  password: "",
  email: "m.scott@trueworld.com",
  areaCode: "",
  phoneNumber: "",
  country: "",
  city: "",
  company: "",
  vatNumber: "",
  profilePicture: null,
  progress: 15,
  progressColor: "orange",
});

export const colors = writable({
  orange: "text-orange-500",
  blue: "text-blue-500",
  green: "text-green-600",
});

const allowedVariables = [
  "primary-color",
  "primary-darker-color",
  "secondary-color",
  "secondary-darker-color",
  "danger-color",
  "green-color",
  "border-radius",
  "box-shadow",
  "box-shadow-transition",
];
export function setCustomVariables(variables) {
  const root = document.documentElement;
  Object.keys(variables).forEach((key) => {
    if (allowedVariables.includes(key)) {
      root.style.setProperty(`--${key}`, variables[key]);
    } else {
      console.warn(`Variable --${key} is not allowed and will not be set.`);
    }
  });
}

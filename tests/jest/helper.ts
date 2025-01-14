export function find(selector: string | HTMLElement): HTMLElement {
  if (typeof selector === "string") {
    return document.querySelector(selector);
  }

  if (selector instanceof Element) {
    return selector;
  }

  throw Error("invalid selector");
}

export function content(selector: string | HTMLElement): string | undefined {
  const el = find(selector);

  if (el) {
    return el.innerHTML;
  }

  return null;
}

export function className(selector: string | HTMLElement): string {
  const el = find(selector);

  if (el) {
    return el.className;
  }

  return null;
}

export function skipButton() {
  return find(".introjs-skipbutton");
}

export function nextButton() {
  return find(".introjs-nextbutton");
}

export function prevButton() {
  return find(".introjs-prevbutton");
}

export function doneButton() {
  return find(".introjs-donebutton");
}

export function tooltipText() {
  return find(".introjs-tooltiptext");
}

export function appendDummyElement(
  name?: string,
  text?: string,
  style?: string
): HTMLElement {
  const el = document.createElement(name || "p");
  el.innerHTML = text || "hello world";
  el.setAttribute("style", style);

  document.body.appendChild(el);

  return el;
}

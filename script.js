const pressDuration = 700;
const pressTimers = new WeakMap();

document.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse") {
        return;
    }

    const button = event.target.closest(".btn");

    if (!button) {
        return;
    }

    window.clearTimeout(pressTimers.get(button));
    button.classList.add("is-pressed");

    const timer = window.setTimeout(() => {
        button.classList.remove("is-pressed");
        pressTimers.delete(button);
    }, pressDuration);

    pressTimers.set(button, timer);
});

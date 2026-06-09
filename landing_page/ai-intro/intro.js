const slides = Array.from(document.querySelectorAll("[data-slide]"));
const tocLinks = Array.from(document.querySelectorAll(".toc-link"));
const progressBar = document.querySelector("#progressBar");
const slideCounter = document.querySelector("#slideCounter");
const prevButton = document.querySelector("#prevSlide");
const nextButton = document.querySelector("#nextSlide");
const fontToggle = document.querySelector("#fontToggle");
const presentToggle = document.querySelector("#presentToggle");

let activeIndex = 0;

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function setActive(index) {
    activeIndex = clamp(index, 0, slides.length - 1);
    const activeSlide = slides[activeIndex];
    const percent = ((activeIndex + 1) / slides.length) * 100;

    if (progressBar) progressBar.style.width = `${percent}%`;
    if (slideCounter) slideCounter.textContent = `${activeIndex + 1} / ${slides.length}`;

    tocLinks.forEach((button) => {
        button.classList.toggle("active", button.dataset.jump === activeSlide.id);
    });
}

function goToSlide(index) {
    const nextIndex = clamp(index, 0, slides.length - 1);
    slides[nextIndex].scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(nextIndex);
}

tocLinks.forEach((button) => {
    button.addEventListener("click", () => {
        const targetIndex = slides.findIndex((slide) => slide.id === button.dataset.jump);
        if (targetIndex >= 0) goToSlide(targetIndex);
    });
});

document.querySelectorAll("[data-next]").forEach((button) => {
    button.addEventListener("click", () => goToSlide(activeIndex + 1));
});

document.querySelectorAll("[data-jump]").forEach((button) => {
    if (button.classList.contains("toc-link")) return;
    button.addEventListener("click", () => {
        const targetIndex = slides.findIndex((slide) => slide.id === button.dataset.jump);
        if (targetIndex >= 0) goToSlide(targetIndex);
    });
});

prevButton?.addEventListener("click", () => goToSlide(activeIndex - 1));
nextButton?.addEventListener("click", () => goToSlide(activeIndex + 1));

fontToggle?.addEventListener("click", () => {
    document.body.classList.toggle("large-text");
    fontToggle.textContent = document.body.classList.contains("large-text") ? "Chữ thường" : "Chữ lớn";
});

presentToggle?.addEventListener("click", () => {
    document.body.classList.toggle("present-mode");
    presentToggle.textContent = document.body.classList.contains("present-mode") ? "Thoát trình chiếu" : "Chế độ trình chiếu";
});

document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
        const target = document.getElementById(button.dataset.copy);
        if (!target) return;
        try {
            await navigator.clipboard.writeText(target.textContent.trim());
            const original = button.textContent;
            button.textContent = "Đã copy";
            window.setTimeout(() => {
                button.textContent = original;
            }, 1400);
        } catch {
            button.textContent = "Không copy được";
        }
    });
});

document.addEventListener("keydown", (event) => {
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
    if (event.key === "ArrowRight" || event.key === "PageDown") {
        event.preventDefault();
        goToSlide(activeIndex + 1);
    }
    if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        goToSlide(activeIndex - 1);
    }
    if (event.key === "Home") {
        event.preventDefault();
        goToSlide(0);
    }
    if (event.key === "End") {
        event.preventDefault();
        goToSlide(slides.length - 1);
    }
});

let scrollTicking = false;

function updateActiveFromScroll() {
    const targetLine = Math.max(92, window.innerHeight * 0.18);
    const nearest = slides
        .map((slide, index) => {
            const rect = slide.getBoundingClientRect();
            return { index, distance: Math.abs(rect.top - targetLine) };
        })
        .sort((a, b) => a.distance - b.distance)[0];

    if (nearest) setActive(nearest.index);
    scrollTicking = false;
}

window.addEventListener("scroll", () => {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(updateActiveFromScroll);
}, { passive: true });

window.addEventListener("resize", updateActiveFromScroll);
setActive(0);

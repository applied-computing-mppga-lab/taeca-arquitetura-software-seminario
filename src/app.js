// ==========================================================================
// PRESENTATION NAVIGATION CONTROLLER
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 1;
    let currentStep = 0;
    const totalSlides = 13;

    const prevBtn = document.getElementById("prev-slide");
    const nextBtn = document.getElementById("next-slide");
    const currentNumSpan = document.getElementById("current-slide-num");
    const totalNumSpan = document.getElementById("total-slides-num");

    totalNumSpan.textContent = totalSlides;

    function getActiveSlideInfo() {
        const slideEl = document.querySelector(`.slide[data-slide="${currentSlide}"]`);
        const fragments = slideEl.querySelectorAll(".fragment");
        let maxStep = 0;
        fragments.forEach(f => {
            const s = parseInt(f.getAttribute("data-step") || "0");
            if (s > maxStep) maxStep = s;
        });
        return { slideEl, fragments, maxStep };
    }

    function updatePresentationState() {
        document.querySelectorAll(".slide").forEach(slide => {
            const num = parseInt(slide.getAttribute("data-slide"));
            slide.classList.remove("active", "prev", "next");
            if (num === currentSlide) slide.classList.add("active");
            else if (num < currentSlide) slide.classList.add("prev");
            else slide.classList.add("next");
        });

        currentNumSpan.textContent = currentSlide;

        const { fragments } = getActiveSlideInfo();
        fragments.forEach(f => {
            const s = parseInt(f.getAttribute("data-step") || "0");
            f.classList.toggle("visible", s <= currentStep);
        });

        handleSlideTriggers(currentSlide, currentStep);
    }

    function navigateNextStep() {
        const { maxStep } = getActiveSlideInfo();
        if (currentStep < maxStep) {
            currentStep++;
            updatePresentationState();
        } else if (currentSlide < totalSlides) {
            currentSlide++;
            currentStep = 0;
            updatePresentationState();
        }
    }

    function navigatePrevStep() {
        if (currentStep > 0) {
            currentStep--;
            updatePresentationState();
        } else if (currentSlide > 1) {
            currentSlide--;
            const info = getActiveSlideInfo();
            currentStep = info.maxStep;
            updatePresentationState();
        }
    }

    nextBtn.addEventListener("click", e => { e.stopPropagation(); navigateNextStep(); });
    prevBtn.addEventListener("click", e => { e.stopPropagation(); navigatePrevStep(); });

    document.addEventListener("click", e => {
        if (e.target.closest(".footer")) return;
        navigateNextStep();
    });

    document.addEventListener("keydown", e => {
        if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
            e.preventDefault(); navigateNextStep();
        } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
            e.preventDefault(); navigatePrevStep();
        }
    });

    // Touch swipe
    let touchStartX = 0;
    document.addEventListener("touchstart", e => { touchStartX = e.changedTouches[0].screenX; }, false);
    document.addEventListener("touchend", e => {
        const diff = e.changedTouches[0].screenX - touchStartX;
        if (diff < -50) navigateNextStep();
        else if (diff > 50) navigatePrevStep();
    }, false);

    // Slide-specific triggers
    function handleSlideTriggers(slideNum, stepNum) {
        if (slideNum === 11) {
            document.querySelectorAll("#slide-11 .event-row-academic, [data-slide='11'] .event-row-academic").forEach((ev, idx) => {
                const trigger = idx + 1;
                ev.classList.toggle("active", stepNum === trigger);
                ev.style.transform = stepNum === trigger ? "scale(1.02)" : "scale(1)";
            });
        }
    }

    // Init
    updatePresentationState();
});
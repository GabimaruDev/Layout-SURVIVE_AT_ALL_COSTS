const accordions = document.querySelectorAll(".accordion");
const contents = document.querySelectorAll(".accordion__content");

accordions.forEach((item) =>
    item.addEventListener("click", () => {
        const activeContent = document.querySelector("#" + item.dataset.tab);

        if (activeContent.classList.contains("content__active")) {
            activeContent.classList.remove("content__active");
            item.classList.remove("accordion__active");
            activeContent.style.maxHeight = 0;
        } else {
            contents.forEach((element) => {
                element.classList.remove("content__active");
                element.style.maxHeight = 0;
            });

            accordions.forEach((element) => element.classList.remove("accordion__active"));

            item.classList.add("accordion__active");
            activeContent.classList.add("content__active");
            activeContent.style.maxHeight = activeContent.scrollHeight + "px";
        }
    })
);

document.querySelector('[data-tab="tab-1"]').classList.add("accordion__active");
document.querySelector("#tab-1").classList.add("content__active");
document.querySelector("#tab-1").style.maxHeight =
    document.querySelector("#tab-1")?.scrollHeight + "px";

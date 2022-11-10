const log = (content) => {
    const span = document.createElement("div");
    span.textContent = content;
    document.body.append(span);
};

if ("Notification" in window) {
    Notification.requestPermission().then((permission) => {
        log(permission);
    });
} else {
    log("Browser does not support Notification.");
    console.error("Browser does not support Notification.");
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("./service-worker.js")
        .then((serviceWorkerRegistration) => {
            log("Service worker was registered.");
            console.info("Service worker was registered.");
            console.info({ serviceWorkerRegistration });
        })
        .catch((error) => {
            log("An error occurred while registering the service worker.");
            console.error(
                "An error occurred while registering the service worker."
            );
            console.error(error);
        });
} else {
    log("Browser does not support service workers or push messages.");
    console.error("Browser does not support service workers or push messages.");
}

const button = document.createElement("button");
button.textContent = "notify";
button.addEventListener("click", async () => {
    const registration = await navigator.serviceWorker.getRegistration(
        "./service-worker.js"
    );

    const image =
        "https://cs8.pikabu.ru/images/big_size_comm/2016-03_5/1458912097163946994.jpg";
        
    const options = {
        body: "И в продакшн!",
        icon: image,
    };

    registration.showNotification("Вжух, вжух", options);
});
document.body.append(button);

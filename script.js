document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');


    /**---- Clock ---- */
    function updateTime() {
        const now = new Date();

        const timeString = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        const dateString = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        timeElement.textContent = timeString;
        dateElement.textContent = dateString;
    }

    setInterval(updateTime, 1000);
    updateTime();

    /**  ----Hamburger ----  */
    const navWrapper = document.querySelector(".nav_wrapper");
    const openIcon = document.querySelector(".hamburger .open");
    let closeIcon;

    openIcon.addEventListener("click", () => {
        navWrapper.style.display = "block";
        openIcon.style.display = "none";
        openIcon.insertAdjacentHTML("afterend", `
            <li class="close">
                <img src="./assets/close_icon.svg" alt="Close Icon">
            </li>
        `);

        closeIcon = document.querySelector(".hamburger .close");
        closeIcon.addEventListener("click", () => {
            navWrapper.style.display = "none";
            closeIcon.remove();
            openIcon.style.display = "block";
        });
    });
});

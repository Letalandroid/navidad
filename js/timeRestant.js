export const tiempoRestante = (deadline) => {

    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = (`0${Math.floor(remainTime % 60)}`).slice(-2),
        remainMinutes = (`0${Math.floor(remainTime / 60 % 60)}`).slice(-2),
        remainHours = (`0${Math.floor(remainTime / 3600 % 24)}`).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

        return {
            remainTime,
            remainDays,
            remainHours,
            remainMinutes,
            remainSeconds
        }

};

export const countdown = (deadline, elem, finalMessage) => {

    const el = document.getElementById(elem);

    setInterval(() => {

        let t = tiempoRestante(deadline);

        el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;

        if (t.remainTime <= 1) {

            clearInterval();
            el.innerHTML = finalMessage;

        }

    }, 100);

};
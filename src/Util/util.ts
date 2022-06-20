export const isBackgroundClick = e => {
    try {
        return e.srcElement.classList.contains("bg") || false;
    } catch {
        return false;
    }
}
// @ts-ignore
Date.prototype.customFormat = function (formatString) {
    var YYYY, YY, MMMM, MMM, MM, M, DDDD, DDD, DD, D, hhhh, hhh, hh, h, mm, m, ss, s, ampm, AMPM, dMod, th, ms;
    YY = ((YYYY = this.getFullYear()) + "").slice(-2);
    MM = (M = this.getMonth() + 1) < 10 ? ('0' + M) : M;
    MMM = (MMMM = ["Jan.", "Feb.", "März", "April", "Mai", "Juni", "Juli", "Aug.", "Sept.", "Okt.", "Nov.", "Dez."][M - 1]).substring(0, 3);
    DD = (D = this.getDate()) < 10 ? ('0' + D) : D;
    DDD = (DDDD = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"][this.getDay()]).substring(0, 3);
    th = (D >= 10 && D <= 20) ? 'th' : ((dMod = D % 10) == 1) ? 'st' : (dMod == 2) ? 'nd' : (dMod == 3) ? 'rd' : 'th';
    formatString = formatString.replace("#YYYY#", YYYY).replace("#YY#", YY).replace("#MMMM#", MMMM).replace("#MMM#", MMM).replace("#MM#", MM).replace("#M#", M).replace("#DDDD#", DDDD).replace("#DDD#", DDD).replace("#DD#", DD).replace("#D#", D).replace("#th#", th);
    h = (hhh = this.getHours());
    if (h == 0) h = 24;
    if (h > 12) h -= 12;
    hh = h < 10 ? ('0' + h) : h;
    hhhh = hhh < 10 ? ('0' + hhh) : hhh;
    AMPM = (ampm = hhh < 12 ? 'am' : 'pm').toUpperCase();
    mm = (m = this.getMinutes()) < 10 ? ('0' + m) : m;
    ss = (s = this.getSeconds()) < 10 ? ('0' + s) : s;
    ms = this.getMilliseconds();
    return formatString.replace("#hhhh#", hhhh).replace("#hhh#", hhh).replace("#hh#", hh).replace("#h#", h).replace("#mm#", mm).replace("#m#", m).replace("#ss#", ss).replace("#s#", s).replace("#ampm#", ampm).replace("#AMPM#", AMPM).replace("#ms#", ms);
};

export const rgbToHex = (red: number, green: number , blue: number): string => {
    const rgb = (red << 16) | (green << 8) | (blue << 0);
    return '#' + (0x1000000 + rgb).toString(16).slice(1);
}

export const drawGlowingText = (ctx: CanvasRenderingContext2D, text: string, x: number, y: number, textColor: string, glowColor: string, glowDistance = 10, fontSize = 60) =>
{
    ctx.save();
    ctx.shadowBlur = glowDistance;
    ctx.shadowColor = glowColor;
    ctx.font = `${fontSize}px Karla`;
    ctx.textAlign = "center";
    ctx.textBaseline = 'middle';
    ctx.fillStyle = textColor;

    ctx.strokeText(text, x, y);

    for(let i = 0; i < 3; i++)
        ctx.fillText(text, x, y); //seems to be washed out without 3 fills

    ctx.restore();
}

export const convertRGBtoHex = rgb => {
    const [r, g, b] = Object.values(rgb);
    const RR = (r !== 0)? r.toString(16): '00';
    const GG = (g !== 0)? g.toString(16): '00';
    const BB = (b !== 0)? b.toString(16): '00';
    const hexColor = `#${RR + GG + BB}`;
    return hexColor;
}

export const convertHexToRGB = hex => {
    let r = hex.slice(1, 3);
    let g = hex.slice(3, 5);
    let b = hex.slice(5, 7);
    let rgb = {
        r: parseInt(r, 16),
        g: parseInt(g, 16),
        b: parseInt(b, 16)
    };
    return rgb;
}
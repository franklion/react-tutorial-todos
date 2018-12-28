export function getColors(amount) {
    const colors = [
        "#f9b152",
        "#bf9480",
        "#3e6f8d",
        "#980101",
        "#c0d59f",
        "#99d2e3",
        "#eeccc3",
        "#88b04d",
        "#ff8c69",
        "#00ff7f",
        "#f7931a",
        "#db95f8",
    ];

    return colors.sort(() => .5 - Math.random() )
                .slice(0, amount);
}
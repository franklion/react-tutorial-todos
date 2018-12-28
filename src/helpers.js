export function getColors(amount) {
    const colors = [
        "#ffd700",
        "#b0e0e6",
        "#ffb6c1",
        "#faebd7",
        "#66cdaa",
        "#c39797",
        "#afeeee",
        "#dddddd",
        "#a0db8e",
        "#fef65b",
    ];

    return colors.sort(() => .5 - Math.random() )
                .slice(0, amount);
}
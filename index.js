const distanceFromHqInBlocks = n => {
    return Math.abs(n - 42);
}

const distanceFromHqInFeet = n => {
    return distanceFromHqInBlocks(n) * 264;
}

const distanceTravelledInFeet = (x, y) => {
    return Math.abs(y - x) * 264;
}

const calculatesFarePrice = (s, d) => {
    let total = distanceTravelledInFeet(s, d);
    if (total > 2500) {
        return 'cannot travel that far';
    }
    if (total < 400) return 0;
    if (total > 2000 && total <= 2500) {
        return 25;
    }
    return ((total - 400) * .02);
}
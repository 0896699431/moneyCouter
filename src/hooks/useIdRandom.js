function useIdRandom(length = 13, base = '0123456789') {
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    let result = '';
    let baseLength = base.length;
    let randomIndex = getRandomInt(1, baseLength);
    result += base[randomIndex];

    for (let i = 1; i < length; i++) {
        let randomIndex = getRandomInt(0, baseLength);
        result += base[randomIndex];
    }

    return result;
};

export default useIdRandom;
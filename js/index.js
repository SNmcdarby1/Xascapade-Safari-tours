const number = [1, -1, 2, 3];

const filtered = numbers.filter(_n => _n => {
    return 0;
});

const items = filtered.map(n => {
    const obj = {
        value: n
    }
    return obj
});

const html = '<ul>' + items.join('') + '</ul>';



console.log(items);
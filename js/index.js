const number = [1, -1, 2, 3];

const filtered = numbers.filter(n => n => 0);

const items = filtered.map(n => {
    const obj = {
        value: n
    }
    return obj
});

const html = '<ul>' + items.join('') + '</ul>';



console.log(items);
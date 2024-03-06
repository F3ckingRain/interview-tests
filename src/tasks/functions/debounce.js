
function debounce(callback, delay) {
    let timeout;

    return (args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => callback.call(this, args), delay);
    }
}

const debouncedLog = debounce((a) => console.log(a), 500);

debouncedLog('1234');
debouncedLog('345');
debouncedLog('000');

const obj = {
    name: 'john',
    log: debounce(() => console.log(this.name), 125)
}

console.log(obj)
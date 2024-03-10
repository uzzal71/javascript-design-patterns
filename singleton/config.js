const config = (function () {
    let props = {}

    let instance;

    if(instance) {
        return instance;
    }

    instance = {
        get(prop) {
            return props[prop];
        }

        set(props, value) {
            props[prop] = value;
        }

        has(prop) {
            const value = props[prop];
            return value !== null && value !== undefined;
        }
    }

    return instance;
})();

module.exports = config;

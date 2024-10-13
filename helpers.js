export const createElementWithAttributes = (tag, attributes) => {
    const element = document.createElement(tag);

    Object.entries(attributes).forEach(
        ([key, value]) => (element[key] = value)
    );

    return element;
};

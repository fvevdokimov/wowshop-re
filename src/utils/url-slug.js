const cyrillicToTranslit = require(`cyrillic-to-translit-js`);
const {transform} = cyrillicToTranslit()

const nodeToSlug = (node) => {
    const stripped = node.name.replace(/[^A-zА-я ]/g, "").toLowerCase()
    const idPostfix = `${node.id}`.substring(5).toLowerCase()
    return `/${transform(stripped, '-')}-${idPostfix}`
}

module.exports = nodeToSlug
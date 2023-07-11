export function row(content, styles = '') {
    return `<div style="${styles}">${content}</div>`
}

export function col(content) {
    return `<div class="grid grid-cols-3 gap-2 mt-2">${content}</div>`
}

export function toCss(styles = {}) {
    const toString = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toString).join(';')
}
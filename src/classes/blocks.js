import {col, row, toCss} from "../utils";

class Block{
    constructor( value, options) {
        this.value = value
        this.options = options
    }

    toHTML(){
        throw new Error('You should implement toHTML method')
    }
}

export class TitleBlock extends  Block {
    constructor(value, options) {
        super( value, options);
    }

    toHTML(){
        const {tag = 'h1', styles} = this.options
        return row(row(`<${tag} class="text-2xl">${this.value}</${tag}>`), toCss(styles))
    }
}
export class ImageBlock extends  Block {
    constructor(value, options) {
        super( value, options);
    }

    toHTML() {
        const {imageStyles: is, styles, alt} = this.options
        return  row(` <img src="${this.value}" style="${toCss(is)}" alt="${alt}"/>`, toCss(this.options.styles))
    }
}
export class ColumnsBlock extends  Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const html = this.value.map(row).join('')
        return col(html)
    }
}
export class TextBlock extends  Block {
    constructor(value, options) {
        super( value, options);
    }

    toHTML() {
        return row(`<p>${this.value}</p>`, toCss(this.options?.styles))
    }
}
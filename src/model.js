import image from './assets/me.png'

export const model = [
    {
        type: 'title', value: 'Website constructor using Vanilla Js', options: {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                padding: ' 1.5rem',
                'text-align': 'center'
            }
        }
    },
    {
        type: 'text', value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, unde'
    }, {
        type: 'columns', value: ['564565656', 'dgfgdfgdfgdf', '27787']
    },
    {
        type: 'image', value: image
    }
]

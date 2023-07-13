import image from './assets/me.png'
import {TextBlock,ImageBlock,TitleBlock,ColumnsBlock} from "./classes/blocks";

export const model = [
    new TitleBlock('Website constructor using Vanilla Js', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: ' 1.5rem',
            'text-align': 'center'
        }
    }),
    new TextBlock( 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, unde'),
    new ColumnsBlock( ['564565656', 'dgfgdfgdfgdf', '27787']),
    new ImageBlock( image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '350px',
            height: '300px'
        },
        alt: 'Me'
    })

]

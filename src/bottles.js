// Una botella es una imagen a la que se le puede hacer click. 
// Al hacerle click abre un div de clase message

export class Bottle {
    static images = [
        {
            src: './images/bottle1.png',
            w: 300,
            h: 360
        },
        {
            src: './images/bottle2.png',
            w: 240,
            h: 360
        },
        {
            src: './images/bottle3.png',
            w: 210,
            h: 360
        }
    ]
    constructor(message, author){
        this.message = message;
        this.author = author;
        this.image = Bottle.images[ Math.round( Math.random() * 12) % 3]
    };

    resizeImage(screen){
        const maxW = (screen.w / 5) / this.image.w;
        const maxH =  (screen.h / 6) / this.image.h;
        const ratio = maxW <= maxH ? maxW : maxH;
        this.image.w = ratio * this.image.w;
        this.image.h = ratio * this.image.h;
    };

    render(screen, i = (Math.random() * 10), t = 10){
        const div = document.createElement('div');
        const img = document.createElement('img')
        img.setAttribute('src',this.image.src);
        this.resizeImage(screen);
        div.style.width = `${this.image.w}px`;
        div.style.height = `${this.image.h}px`;
        div.style.left = `${(Math.random() * (screen.w - this.image.w))}px`;
        div.style.top = `${screen.h/3 + (( screen.h/3 - this.image.w ) * i /t) }px`;
        div.className = 'bottle';
        div.appendChild(img);
        return div
    }

    openBottle(){
        document.getElementById('text').innerHTML = this.message;
        document.getElementById('author').innerHTML = '~ ' + this.author;
    }
}

export class Screen {

    constructor () {
        this.size = {
            w: window.innerWidth,
            h: window.innerHeight,
        }
        this.popUp = document.getElementById('messages');
        this.currentPage = 1;
    };

    init = (bottles) => {
        this.scroll();
        this.renderBottles(bottles);
        // Listeners
        document.getElementById('close').addEventListener('click', this.closePopUp);
        document.getElementById('next').addEventListener('click', this.nextPage );
    };
    
    scroll = () => {
        switch (this.currentPage){
            case 1:
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                })
                break;
            case 2:
                window.scroll({
                    top: 0,
                    left: this.size.w,
                    behavior: 'smooth',
                })
                break;
            case 3:
                window.scroll({
                    top: this.size.h,
                    left: this.size.w,
                    behavior: 'smooth',
                })
                break;
            case 4: 
                window.scroll({
                    top: this.size.h,
                    left: 0,
                    behavior: 'smooth',
                })
                break;
            default:
                this.currentPage = 1;
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                })
                break;
        }
    };

    renderBottles(bottles){
        const oldBottles = document.getElementsByClassName('bottle');
        const l = oldBottles.length;
        for( let i=0; i < l; i++){
            oldBottles[0].remove();
        }
        
        bottles.forEach(b => {
            console.log(' se ha renderizado la botella de ', b.author)
            let div = b.render(this.size);
            document.getElementById('bottles').appendChild(div);
            div.addEventListener('click', () => {
                this.openPopUp();
                b.openBottle();
            });
        });
    };

    // - - - Páginas

    nextPage = () => {
        this.currentPage = (this.currentPage % 4) + 1;
        this.scroll();
    };

    resize = (bottles) => {
        this.size = {
            w: window.innerWidth,
            h: window.innerHeight,
        }
        this.scroll();
        this.renderBottles(bottles);
    };

    // - - - Pop Up

    openPopUp = () => { this.popUp.className = 'open' };

    closePopUp = () => { this.popUp.className = 'closed' };
}
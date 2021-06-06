export const controlPages = (page, screen) => {
    switch (page){
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
                left: screen.w,
                behavior: 'smooth',
            })
            break;
        case 3:
            window.scroll({
                top: screen.h,
                left: screen.w,
                behavior: 'smooth',
            })
            break;
        case 4: 
            window.scroll({
                top: screen.h,
                left: 0,
                behavior: 'smooth',
            })
            break;
        default:
            page = 1;
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            })
            break;
    }
    return page;
}


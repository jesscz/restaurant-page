const initLoad = () => {
    const element = document.createElement('div');
    element.id = 'icontent';

    const title = document.createElement('h1');
    title.innerText = 'The Village Bistro';
    title.id = 'header';

    const left = document.createElement('div');
    left.id = 'left';

    const homeLink = document.createElement('a');
    homeLink.innerHTML = 'Home<br>';
    homeLink.id = 'homelink';

    const menuLink = document.createElement('a');
    menuLink.innerHTML = 'Menu<br>';
    menuLink.id = 'menulink';

    const contactLink = document.createElement('a');
    contactLink.innerText = 'Contact';
    contactLink.id = 'contactlink';

    // const backImg = document.createElement('img'); --> this does the same as the line below
    // const backImg = new Image(); //same as above commented out line
    
    

    const description = document.createElement('p');
    description.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod';
    description.id = 'description';

    const link = document.createElement('p');
    link.innerHTML ='Photo by: <a href="https://www.pexels.com/photo/flat-lay-photography-of-variety-of-vegetables-1435904/">Engin Akyurt</a>';
    link.id = 'link';

    left.append(homeLink, menuLink, contactLink, link);
    element.append(title, left, description);
    return element;
}

export { initLoad };
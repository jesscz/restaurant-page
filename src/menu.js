import menupic from './menupic.jpg'

const menuLoad = () => {
    const description = document.getElementById('description');
    description.innerText = 'MENU';

    const picture = new Image();
    picture.src = menupic;
    picture.id = 'menup';

    description.append(picture);
}
export { menuLoad };
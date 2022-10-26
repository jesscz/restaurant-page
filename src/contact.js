const contactLoad = () => {
    const description = document.getElementById('description');
    description.innerText = 'CONTACT';
    
    const number = document.createElement('p');
    number.innerHTML = 'Phone Number:<br><br>+1-123-456-7890'

    const address = document.createElement('p');
    address.innerHTML = 'Address:<br><br>123 Fake St.'

    description.append(number, address);


}
export { contactLoad };
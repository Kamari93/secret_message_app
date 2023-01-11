const { hash } = window.location;

const message = atob(hash.replace('#', ''));

if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message
}

// second arg is callback funct each time a user submits a form
document.querySelector('form').addEventListener('submit', event => {
    // stops the browser from trying to submit and refresh form to backend (we don't have BE)
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    // auto select link text
    linkInput.select();

});
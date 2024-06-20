function openOutlook(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Nome: " + name + "\n\nMensagem:\n" + message)}`;

    window.location.href = mailtoLink;
}

// Verifica se a URL contém um parâmetro de refresh
if (window.location.search.includes('refresh=true')) {
    // Faz um refresh na página
    window.location.reload();
}
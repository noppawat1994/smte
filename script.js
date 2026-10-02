    function switchTab(event, tabId) {
        event.preventDefault();

        const content = document.querySelectorAll('.tab-content, .tab-content-m');
        content.forEach(content => {
            content.classList.remove('active');
        });

    const link = document.querySelectorAll('.nav-link');
    link.forEach(link => {
        link.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');

    event.currentTarget.classList.add('active');
}

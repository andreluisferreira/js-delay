const delay = async (delay) => new Promise(resolve => setTimeout(resolve, delay));

document.getElementById("execute").addEventListener("click", async () => {

    var timeout = parseInt('0' + document.getElementById('timeout').value);

    const btn = document.getElementById('execute');
    btn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Waiting (${timeout}) ms...`;
    btn.setAttribute('disabled', true);

    await delay(1000);

    
    btn.innerHTML = `<i class="bi bi-play"></i> Execute`;
    btn.removeAttribute('disabled');

});
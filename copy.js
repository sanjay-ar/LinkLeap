
let clipBoard1 = new ClipboardJS("#copy");

clipBoard1.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipBoard1.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
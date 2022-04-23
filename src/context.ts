function setContext(context: Contexts) {
    edom.findById('contextContainer')?.clear();
    edom.fromTemplate(contexts[context], edom.findById('contextContainer'));
}

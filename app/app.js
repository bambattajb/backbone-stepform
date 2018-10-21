/**
 * Create the main scaffold
 */
$(function() {

    let app = new MainView({model:form});
    app.$el.appendTo('#app');

    app.render();
});
const Welcome = Backbone.View.extend({
    el : '#steps',

    initialize : function() {
        console.log('Welcome step initialized');

        form.currentStep = 0;
    },

    render: function() {
        let self = this;

        $.get('/views/welcome.html', function(data, {}) {
            template = _.template(data);
            self.$el.html(template);
        }, 'html');
    }
});
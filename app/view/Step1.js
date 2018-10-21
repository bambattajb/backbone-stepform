/**
 * Step 1
 */
const Step1 = Backbone.View.extend({
    el: '#steps',

    initialize : function() {

        console.log('Step 1 initialized');
    },

    render: function() {
        let self = this;

        $.get('/views/step1.html', function(data, {}) {
            template = _.template(data);
            self.$el.html(template);
        }, 'html');
    }
});
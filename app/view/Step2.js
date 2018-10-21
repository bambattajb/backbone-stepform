/**
 * Step 2
 */
const Step2 = Backbone.View.extend({
    el: '#steps',

    initialize : function() {

        //form.setState('steps', 'step2', 'accessible', true);

        console.log('Step 2 initialized');
    },

    render: function() {
        let self = this;

        $.get('/views/step2.html', function(data, {}) {
            template = _.template(data);
            self.$el.html(template);
        }, 'html');
    }
});
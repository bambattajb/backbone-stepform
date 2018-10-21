/**
 * Step 1
 */
const Step3 = Backbone.View.extend({
    el: '#steps',

    initialize : function() {

        //form.setState('steps', 'step2', 'accessible', true);

        console.log('Step 3 initialized');
    },

    render: function() {
        let self = this;

        $.get('/views/step3.html', function(data, {}) {
            template = _.template(data);
            self.$el.html(template);
        }, 'html');
    }
});
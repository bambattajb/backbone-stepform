/**
 * Main view housing the form
 */
const MainView = Backbone.View.extend({
    el: '#app',
    steps: [1,2,3],

    events : {
        // When click step button, handle
        "click .step" : "stepHandler",
        "click .next" : "nextHandler",
        "click .prev" : "prevHandler"
    },

    initialize : function() {

        // Listen for updates in the model
        _.bindAll(this, "update");
        this.model.bind('change', this.update);

        console.log('Main container initialized')
    },

    update : function() {
        let self = this;

        // Get the current state stored in model
        this.state = this.model.get('state');

        // Set the layout depending on state
        _.each(this.state, function(states, type) {
            if(type==='steps') {
                _.each(states, function(value, state) {
                    let el = self.$el.find('button.step[data-step="'+parseInt(state.replace('step', ''))+'"]').addClass('disabled');
                    if(!value.accessible) {
                        el.addClass('disabled');
                    } else {
                        el.removeClass('disabled');
                    }
                })
            }
            if(type==='navigation') {
                _.each(states, function(value, state) {
                    let el = self.$el.find('button.' + state).addClass('disabled');
                    if(!value.accessible) {
                        el.addClass('disabled');
                    } else {
                        el.removeClass('disabled');
                    }
                })
            }
        });
    },

    goto: function(stepId) {
        // Check if step exists
        if($.inArray(stepId, this.steps)!== -1) {

            let accessible = form.getState('steps', 'step'+stepId, 'accessible');

            if(accessible) {
                // Render specific step
                router.navigate("step/" + stepId, {trigger: true});

                /**
                 * SET STATES
                 */
                // If the latest step is > 1 add previous navigation
                if (form.currentStep > 1) {
                    form.setState('navigation', 'prev', 'accessible', true);
                }
                // If the latest step is < 3 add next navigation
                if (form.currentStep < 3) {
                    form.setState('navigation', 'next', 'accessible', true);
                }
                // If the latest step is max
                if (form.currentStep === 3) {
                    form.setState('navigation', 'next', 'accessible', false);
                }
                // If the latest step is min
                if (form.currentStep === 1) {
                    form.setState('navigation', 'prev', 'accessible', false);
                }
            }

        } else {
            console.log('Step does not exist')
        }
    },

    stepHandler : function(event) {

        // Get current step ID
        let stepId = $(event.currentTarget).data('step');

        this.goto(stepId);
    },

    nextHandler: function(event) {
        // If current step < 3
        let nextStep = form.currentStep + 1;

        // TODO: Forwards is like a submit button that makes the next
        // step accessible
        form.setState('steps', 'step'+nextStep, 'accessible', true);

        // Move to next step
        this.goto(nextStep);
    },

    prevHandler: function(event) {
        // If current step > 1
        let prevStep = form.currentStep - 1;

        // Move to previous step
        this.goto(prevStep);
    },

    render: function() {
        let self = this;

        $.get('/views/form.html', function(data, {}) {
            template = _.template(data);
            self.$el.html(template);

            router.navigate('welcome', { trigger: true });
            self.update();

        }, 'html');
    }
});
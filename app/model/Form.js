/**
 * Model for storing data
 */
let Form = Backbone.Model.extend({
    currentStep: 0,

    initialize: function() {

        // Listen for updates
        _.bindAll(this, "update");
        this.on('change', this.update);

        // Everything OK
        console.log('Model initialized')
    },

    update: function () {
        // Send to database... ?
    },

    setState: function(a,b,c,d) {
       let state = this.get('state');
       state[a][b][c] = d;
       this.set('state', state);
       this.trigger('change');
       return state;
    },

    getState: function(a,b,c) {
        return this.get('state')[a][b][c];
    }
});

let form = new Form();

/**
 * Starting state
 */
form.set('state', {
    'steps': {
        'step1': {
            'accessible': true
        },
        'step2': {
            'accessible': false
        },
        'step3': {
            'accessible': false
        }
    },
    'navigation': {
        'prev' : {
            'accessible': false
        },
        'next' : {
            'accessible': true
        }
    }

});

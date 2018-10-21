/**
 * Router
 */

const Router = Backbone.Router.extend({
    routes: {
        "step/:id": "renderStep",
        "welcome" : "renderWelcome",
        "" : "renderWelcome"
    }
});

let router = new Router;
router.on('route:renderStep', function(id) {

    let step,
        i = parseInt(id);

    if(i===1) {
        step = new Step1();
    }
    if(i===2) {
        step = new Step2();
    }
    if(i===3) {
        step = new Step3();
    }


    step.active = true;
    step.render();

    form.currentStep = i;

});

router.on('route:renderWelcome', function() {

    let step;
    step = new Welcome();
    step.render();
});

Backbone.history.start();
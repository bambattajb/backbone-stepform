# Example backbone step navigator

## Uses a Backbone model to store state based on current step and navigation

### form.setState()
````
// Set previous state inaccessible
form.setState('navigation', 'prev', 'accessible', true);

// Set step2 accessible
form.setState('steps', 'step2', 'accessible', true);

.. and so on
````

### form.getState()
````
// Get current state of step
let accessible = form.getState('steps', 'step2', 'accessible');

if(accessible) {
  // Do stuff if accessible
}
````

### form.goto()
````
// Goto a step (via router)
form.goto(2); // go to step 2
```
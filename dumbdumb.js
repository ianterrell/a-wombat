((state, timeLeftFn) => {
    const turn = { action: 'turn', metadata: { direction: 'left' } };
    const shoot = { action: 'shoot', metadata: {} };
    var turned = false;
    if (state['saved-state'] != undefined) {
        if (state['saved-state']['last-action'] != undefined)  {
            if (state['saved-state']['last-action'] == 'turn') {
                turned = true
            }
        }
    }
    const command = turned ? shoot : turn;
    return {
      command,
      state: {
        'last-action': turned ? 'shoot' : 'turn'
      }
    }
});

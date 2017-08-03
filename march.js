((state, timeLeftFn) => {
    var lastAction = 0;
    if (state['saved-state'] != undefined) {
      if (state['saved-state']['last-action'] != undefined)  {
        lastAction = state['saved-state']['last-action']
      }
    }

    const actions = [
      { action: 'move', metadata: {} },
      { action: 'move', metadata: {} },
      { action: 'move', metadata: {} },
      { action: 'turn', metadata { direction: 'right'} },
      { action: 'shoot', metadata: {} },
      { action: 'turn', metadata { direction: 'left'} },
      { action: 'shoot', metadata: {} },
      { action: 'turn', metadata { direction: 'left'} },
      { action: 'shoot', metadata: {} },
      { action: 'turn', metadata { direction: 'left'} },
    ];

    const command = actions[lastAction % actions.length]
    return {
      command,
      state: {
        'last-action': lastAction + 1
      }
    }
});

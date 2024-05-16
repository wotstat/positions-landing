

export default {
  tanks: {
    grille: {
      paris: {
        position: [0.28, 0.25],
        rotation: [150, -25, -5],
        ideal: [[0.15625, 0.44375]],
        mini: [[0.275, -0.16875]]
      },
      murovanka: {
        position: [-0.12, 0.35],
        rotation: [40, -30, 0],
        ideal: [[-0.21, 0.22]],
        mini: [[0.22, 0.12], [0.38, 0.285]]
      },
      steppes: {
        position: [0.25, 0.3],
        rotation: [-40, 30, -4],
        ideal: [[0.455, 0.065], [0.14, 0.21]],
        mini: [[0.385, 0.45]]
      }
    },
    concept: {
      paris: {
        position: [0.32, 0.3],
        rotation: [140, -32, -2],
        ideal: [[0.15625, 0.44375]],
        mini: []
      },
      murovanka: {
        position: [0.22, 0.3],
        rotation: [-10, 20, 0],
        ideal: [[0.22, 0.12]],
        mini: [[-0.205, 0.185], [0.385, 0.285]]
      },
      steppes: {
        position: [0.35, 0.28],
        rotation: [-23, 15, -2],
        ideal: [[0.465, 0.06]],
        mini: [[0.155, 0.195], [0.32, 0.475], [-0.47, 0.25]]
      }
    },
    even: {
      paris: {
        position: [0.32, 0.3],
        rotation: [140, -32, -2],
        ideal: [[0, 0.1375], [-0.03125, -0.03125]],
        mini: [[-0.0375, -0.41875], [0.0875, -0.125], [0.1375, -0.3], [-0.10625, -0.09375]]
      },
      murovanka: {
        position: [0.22, 0.3],
        rotation: [-10, 20, 0],
        ideal: [[0.17, -0.01]],
        mini: [[0.11, -0.01]]
      },
      steppes: {
        position: [0.35, 0.28],
        rotation: [-23, 15, -2],
        ideal: [[-0.485, 0.2], [0.03, 0.045]],
        mini: [[-0.2, 0.125]]
      }
    },
    jagdPz: {
      paris: {
        position: [0.32, 0.3],
        rotation: [140, -32, -2],
        ideal: [[0.11875, 0.3625]],
        mini: [[-0.05, 0.45625]]
      },
      murovanka: {
        position: [0.22, 0.3],
        rotation: [-10, 20, 0],
        ideal: [[-0.21, 0.22]],
        mini: [[-0.37, 0.055], [-0.415, 0.2], [0.39, 0.285]]
      },
      steppes: {
        position: [0.35, 0.28],
        rotation: [-23, 15, -2],
        ideal: [[-0.29, 0.395]],
        mini: [[0.155, 0.2]]
      }
    },
    conqueror: {
      paris: {
        position: [0.32, 0.3],
        rotation: [140, -32, -2],
        ideal: [[-0.0375, 0.44375], [0.09375, 0.3625]],
        mini: []
      },
      murovanka: {
        position: [0.22, 0.3],
        rotation: [-10, 20, 0],
        ideal: [[-0.405, 0.08]],
        mini: [[-0.365, 0.055]]
      },
      steppes: {
        position: [0.35, 0.28],
        rotation: [-23, 15, -2],
        ideal: [[-0.415, 0.075]],
        mini: [[-0.335, 0.265]]
      }
    },
    ob261: {
      paris: {
        position: [0.32, 0.3],
        rotation: [140, -32, -2],
        ideal: [[0.4775, -0.45625]],
        mini: []
      },
      murovanka: {
        position: [0.22, 0.3],
        rotation: [-10, 20, 0],
        ideal: [[-0.155, 0.48]],
        mini: [[-0.33, 0.475], [-0.275, 0.475]]
      },
      steppes: {
        position: [0.35, 0.28],
        rotation: [-23, 15, -2],
        ideal: [[0.22, 0.48]],
        mini: [[0.15, 0.48]]
      }
    }
  },
  maps: {
    paris: {
      green: [0.41, 0.01],
      red: [-0.39, 0.03],
    },
    steppes: {
      green: [0.22822003, 0.34192786],
      red: [-0.088818535, -0.361898],
    },
    murovanka: {
      green: [-0.055, 0.40719997],
      red: [-0.05500019, -0.4173],
    }
  }
} as {
  tanks: {
    [tank: string]: {
      [map: string]: {
        position: [number, number],
        rotation: [number, number, number],
        ideal: [number, number][],
        mini: [number, number][]
      }
    },
  },
  maps: {
    [map: string]: {
      green: [number, number],
      red: [number, number],
    }
  }
}
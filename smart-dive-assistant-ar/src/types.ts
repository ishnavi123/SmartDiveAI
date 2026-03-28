export interface Fish {
  name: string;
  maxDepth: number;
  warning: string;
  safetySteps?: string[];
}

export const fishList: Fish[] = [
  { 
    name: "Lionfish", 
    maxDepth: 30, 
    warning: "⚠️ POISONOUS SPINES! STAY AWAY.",
    safetySteps: [
      "Maintain a distance of at least 2 meters.",
      "Do not attempt to touch or feed.",
      "If stung, soak area in hot water and seek medical attention."
    ]
  },
  { 
    name: "Great White", 
    maxDepth: 40, 
    warning: "🚨 PREDATOR ALERT: MAINTAIN DISTANCE.",
    safetySteps: [
      "Stay calm and do not make sudden movements.",
      "Keep the shark in sight at all times.",
      "Slowly back away while maintaining eye contact.",
      "Ascend to the surface/boat if possible."
    ]
  },
  { 
    name: "Box Jellyfish", 
    maxDepth: 5, 
    warning: "💀 DEADLY VENOM: ASCEND IMMEDIATELY!",
    safetySteps: [
      "Do not touch tentacles.",
      "Exit the water immediately.",
      "Apply vinegar to the sting site.",
      "Seek emergency medical help (CPR may be required)."
    ]
  },
  { name: "Clownfish", maxDepth: 15, warning: "" }
];

export type AlertLevel = 'normal' | 'warning' | 'danger';

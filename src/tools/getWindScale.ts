interface RangeObj {
  type: string;
  min: number;
  max: number;
  class: string;
}

const RANGE: RangeObj[] = [
  {
    type: "Calm",
    min: 0,
    max: 0.2,
    class: "",
  },
  {
    type: "Light Air",
    min: 0.3,
    max: 1.5,
    class: "",
  },
  {
    type: "Light Breeze",
    min: 1.6,
    max: 3.3,
    class: "",
  },
  {
    type: "Gentle Breeze",
    min: 3.4,
    max: 5.4,
    class: "",
  },
  {
    type: "Moderate Breeze",
    min: 5.5,
    max: 7.9,
    class: "",
  },
  {
    type: "Fresh Breeze",
    min: 8,
    max: 10.7,
    class: "",
  },
  {
    type: "Strong Breeze",
    min: 10.8,
    max: 13.8,
    class: "warning",
  },
  {
    type: "High Wind",
    min: 13.9,
    max: 17.1,
    class: "warning",
  },
  {
    type: "Gale",
    min: 17.2,
    max: 20.7,
    class: "warning",
  },
  {
    type: "Strong Gale",
    min: 20.8,
    max: 24.4,
    class: "warning",
  },
  {
    type: "Storm",
    min: 24.5,
    max: 28.4,
    class: "danger",
  },
  {
    type: "Violent Storm",
    min: 28.5,
    max: 32.6,
    class: "danger",
  },
  {
    type: "Hurricane-force",
    min: 32.7,
    max: 200,
    class: "danger",
  },
];

export default function getWindScale(speed: number) {
  const scale = RANGE.filter((item) => {
    return speed >= item.min && speed <= item.max;
  });

  if (scale.length === 1) {
    return {
      type: scale[0].type,
      class: scale[0].class,
    };
  } else {
    return {
      type: "-",
      class: "",
    };
  }
}

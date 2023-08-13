import { measureTimeTaken } from "../utils";

/**
 * Takes an array of boolean values representing different heights, always of the general form [false, false, false, true, true, true]
 */
export default function twoCrystalBalls(
  heights: boolean[],
  rootFactor: number = 2
) {
  const step = Math.floor(heights.length ** (1 / rootFactor));

  let whenBallBroke = null;
  let ballDidBreak = false;

  for (let i = step; i < heights.length; i += step) {
    ballDidBreak = heights[i];
    if (ballDidBreak) {
      whenBallBroke = i;
      break;
    }
  }

  const scanStart = whenBallBroke
    ? whenBallBroke - step
    : heights.length - step;
  const scanEnd = whenBallBroke ?? heights.length;

  for (let i = scanStart; i < scanEnd; i++) {
    if (heights[i] === true) {
      return i;
    }
  }

  return false;
}

/**
 * Generates input arrays for the above function
 */
const generateHeightsInput = (length: number) => {
  let arr = [];
  let ballBreaks = false;
  for (let i = 0; i < length; i++) {
    if (!ballBreaks) {
      const ballBreakFactor = Math.random();
      if (ballBreakFactor < 2 / length) {
        ballBreaks = true;
      }
    }

    arr.push(ballBreaks);
  }

  return arr;
};

const heights = generateHeightsInput(100000000);

measureTimeTaken(twoCrystalBalls, [heights, 1]);
measureTimeTaken(twoCrystalBalls, [heights, 2]);
measureTimeTaken(twoCrystalBalls, [heights, 3]);

export type BasicStats = {
    attack: number,
    defense: number,
    speed: number,
    hp: number
  };
/**
 * General interface to define a pokemon
 */
export interface Fighter {
  name: string;
  weight: number;
  height: number;
  type: ('fire' | 'grass' | 'water' | 'electric');
  basicStats: BasicStats
}

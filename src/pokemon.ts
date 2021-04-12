import {BasicStats, Fighter} from './fighter';

export class Pokemon implements Fighter {
  /**
   * Constructor of the class
   * @param name {@link Pokemon.name} The name of the pokemon
   * @param weight {@link Pokemon.weight} The weight of the pokemon
   * @param height {@link Pokemon.height} The height of the pokemon
   * @param type {@link Pokemon.type} The type of the pokemon
   * @param basicStats {@link Pokemon.basicStats} The stats of the pokemon
   */
  constructor(public readonly name: string, public weight: number,
    public height: number, public readonly type:
    ('fire' | 'grass' | 'water' | 'electric'), public basicStats: BasicStats) {
  }

  getName(): string {
    return this.name;
  }
}

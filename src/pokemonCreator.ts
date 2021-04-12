import Creator from './fighterCreator';
import {BasicStats, Fighter} from './fighter';
import {Pokemon} from './pokemon';

export class PokemonCreator extends Creator {
  /**
   * Constructor of the class
   * @param name {@link PokemonCreator.name} The name of the pokemon
   * @param weight {@link PokemonCreator.weight} The weight of the pokemon
   * @param height {@link PokemonCreator.height} The height of the pokemon
   * @param type {@link PokemonCreator.type} The type of the pokemon
   * @param basicStats {@link PokemonCreator.basicStats} The stats of the
   * pokemon
   */
  constructor(public readonly name: string, public weight: number,
    public height: number, public readonly type:
    ('fire' | 'grass' | 'water' | 'electric'), public basicStats: BasicStats) {
    super();
  }

  public factoryMethod(): Fighter {
    return new Pokemon(this.name, this.weight, this.height, this.type,
        this.basicStats);
  }
}

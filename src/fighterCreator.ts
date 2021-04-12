import {Fighter} from './fighter';

export default abstract class FighterCreator {
  public abstract factoryMethod(): Fighter;

  public logic(): string {
    const fighter = this.factoryMethod();
    return 'I am ${fighter.getName()}, ' +
           'my weight is ${fighter.getWeight()},' +
           'my height is ${fighter.getHeight()},' +
           'and my type is ${fighter.getType()}';
  }
}

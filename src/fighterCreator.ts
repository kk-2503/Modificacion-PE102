import {Fighter} from './fighter';

export default abstract class FighterCreator {
  public abstract factoryMethod(): Fighter;
}

import 'mocha';
import {expect} from 'chai';
import {PokemonCreator} from '../src/pokemonCreator';

describe('testing Pokemon', () => {
  it('A Pokemon should be created succesfully', () => {
    expect(new PokemonCreator('Bulbasaur', 7, 62, 'grass', {attack: 49,
      defense: 49, speed: 45, hp: 45})).not.to.be.null;
    expect(new PokemonCreator('Blastoise', 7, 62, 'grass', {attack: 49,
      defense: 49, speed: 45, hp: 45})).not.to.be.null;
  });
});

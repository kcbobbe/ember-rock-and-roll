import Route from '@ember/routing/route';
import Band from 'rarwe/models/band';
import Song from 'rarwe/models/song';

export default Route.extend({
    model: function() {
        var blackDog = Song.create({
            title: 'Black Dog',
            band: 'Led Zeppelin',
            rating: 3
        });

        var yellowLedbetter = Song.create({
            title: 'Yellow Ledbetter',
            band: 'Led Zeppelin',
            rating: 3
        });

        var pretender = Song.create({
            title: 'The Pretender',
            band: 'Foo Fighters',
            rating: 2
        });

        var daughter = Song.create({
            title: 'Daughter',
            band: 'Pearl Jam',
            rating: 5
        });

        var ledZeppelin = Band.create({ name: 'Led Zeppelin', songs: [blackDog] });
        var pearlJam = Band.create({ name: 'Pearl Jam', songs: [yellowLedbetter, daughter] });
        var fooFighters = Band.create({ name: 'Foo Fighters', songs: [pretender ]});

        return [ledZeppelin, pearlJam, fooFighters];

    },

    actions: {
        createBand: function() {
            var name = this.get('controller').get('name');
            var band = Band.create({ name: name });
            this.modelFor('bands').pushObject(band);
            this.get('controller').set('name', '');
        }
    }
});

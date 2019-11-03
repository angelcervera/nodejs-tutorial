const featureCrud = require('./features-crud.js')

featureCrud.create('Feature One', 'Nueva funcionalidad', 100 );
featureCrud.update(10, 'Feature One', 'Nueva funcionalidad', 100);
featureCrud.remove(10);
featureCrud.get(10);

import { PercentLoader } from '../loaders/percent';
import { bindLinks } from '../link';
document.addEventListener('DOMContentLoaded', function () {
    bindLinks('[data-bjax]', {
        loader: new PercentLoader()
    });
});

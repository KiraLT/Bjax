import { PercentLoader } from '../loaders/percent';
import { bindLinks } from '../link';
import '../loaders/percent/styles.css';
document.addEventListener('DOMContentLoaded', function () {
    bindLinks('[data-bjax]', {
        loader: new PercentLoader()
    });
});

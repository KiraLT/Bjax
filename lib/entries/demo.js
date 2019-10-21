import { liveBind } from '../dom';
import { loadLink } from '../helpers';
import { PercentLoader } from '../loaders/percent';
document.addEventListener('DOMContentLoaded', function () {
    liveBind('[data-bjax]', 'click', function (event, element) {
        if (element instanceof HTMLAnchorElement) {
            loadLink({
                url: element.href,
                source: '#main',
                target: '#main',
                loader: new PercentLoader()
            });
            event.preventDefault();
        }
    });
});

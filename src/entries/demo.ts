import { liveBind } from '../dom'
import { PercentLoader } from '../loaders/percent'
import { loadLink } from '../link'

document.addEventListener('DOMContentLoaded', () => {
    liveBind('[data-bjax]', 'click', (event, element) => {
        if (element instanceof HTMLAnchorElement) {
            loadLink({
                url: element.href,
                source: '#main',
                target: '#main',
                loader: new PercentLoader()
            })
            event.preventDefault()
        }
    })
})

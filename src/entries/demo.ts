import { PercentLoader } from '../loaders/percent'
import { bindLinks } from '../link'

document.addEventListener('DOMContentLoaded', () => {
    bindLinks('[data-bjax]', {
        loader: new PercentLoader()
    })
})

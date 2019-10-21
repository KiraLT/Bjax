import { Loader, LoaderParams } from '../'
import { findOrCreate } from '../../dom'

import './styles.scss'

interface State {
    mainEl: HTMLElement
    barEl: HTMLElement
    errorEl: HTMLElement
    interval: NodeJS.Timeout
}

export class PercentLoader extends Loader<State> {
    constructor() {
        super()
    }

    start({ target }: LoaderParams): State {
        const mainEl = findOrCreate(target.querySelector('.bjax-percentloader-container'), `
            <div class="bjax-percentloader-container"></div>
        `) as HTMLElement
        const barEl = findOrCreate(target.querySelector('.bjax-percentloader-bar'), `
            <div class="bjax-percentloader-bar"></div>
        `) as HTMLElement
        const errorEl = findOrCreate(target.querySelector('.bjax-backdrop-error'), `
            <div class="bjax-backdrop-error"></div>
        `) as HTMLElement
        mainEl.appendChild(barEl)
        mainEl.appendChild(errorEl)

        target.style.position = 'relative'
        target.appendChild(mainEl)

        const start = Date.now()
        const duration = 500
        const interval = setInterval(() => {
            const now = Date.now()
            if (now - start >= duration) {
                barEl.style.width = '100%'
                clearInterval(interval)
            } else {
                barEl.style.width = `${Math.min(Math.round((now - start) / duration * 100), 100)}%`
            }
        }, Math.max(30, Math.round(duration / 100)))

        return {
            mainEl,
            barEl,
            errorEl,
            interval
        }
    }

    finish({ target }: LoaderParams, { interval }: State) {
        clearInterval(interval)
    }

    error({ target }: LoaderParams, { interval, barEl }: State) {
        barEl.className = 'bjax-percentloader-bar bjax-bar-error'
    }
}
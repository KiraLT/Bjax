import { Loader, LoaderParams, LoaderErrorParams } from '../'
import { findOrCreate } from '../../dom'

import './styles.scss'

interface State {
    mainEl: HTMLElement
    barEl: HTMLElement
    errorEl: HTMLElement
    interval: NodeJS.Timeout
}

function createPercentAnimation(callback: (progress: number) => void, finish: () => void, duration: number): NodeJS.Timeout {
    const start = Date.now()
    const interval = setInterval(() => {
        const now = Date.now()
        if (now - start >= duration) {
            callback(100)
            clearInterval(interval)
        } else {
            callback(Math.min(Math.round((now - start) / duration * 100), 100))
        }
    }, Math.max(30, Math.round(duration / 100)))
    return interval
}

export class PercentLoader implements Loader<State> {
    start({ target }: LoaderParams): State {
        const mainEl = findOrCreate(target.querySelector('.bjax-percentloader-container'), `
            <div class="bjax-percentloader-container"></div>
        `) as HTMLElement
        const barEl = findOrCreate(target.querySelector('.bjax-percentloader-bar'), `
            <div class="bjax-percentloader-bar"></div>
        `) as HTMLElement
        const errorEl = findOrCreate(target.querySelector('.bjax-percentloader-error'), `
            <div class="bjax-percentloader-error"></div>
        `) as HTMLElement
        mainEl.appendChild(barEl)
        mainEl.appendChild(errorEl)

        target.style.position = 'relative'
        target.appendChild(mainEl)

        return {
            mainEl,
            barEl,
            errorEl,
            interval: createPercentAnimation(progress => {
                barEl.style.width = `${progress}%`
            }, () => {

            },500)
        }
    }

    finish({ target }: LoaderParams, { interval }: State) {
        clearInterval(interval)
        target.style.position = ''
    }

    error({ target, error }: LoaderErrorParams, { interval, barEl, errorEl }: State) {
        barEl.className = 'bjax-percentloader-bar bjax-percentloader-bar-error'
        errorEl.innerHTML = error.message
    }
}

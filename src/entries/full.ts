import * as Bjax from '../'

declare global {
    interface Window {
        Bjax: typeof Bjax
    }
}

window.Bjax = Bjax
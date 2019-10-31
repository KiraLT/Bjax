import * as Bjax from '../';
import '../loaders/percent/styles.css';
declare global {
    interface Window {
        Bjax: typeof Bjax;
    }
}

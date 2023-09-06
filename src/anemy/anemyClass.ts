import { createApp } from '../utils/Vue';
import { activeLinks, removeFromOptions } from '../utils/quicklinksBuilder';
import updateUi from './updateUi.vue';
import { waitForPageToBeVisible } from '../utils/general';
import { NotAutenticatedError } from '../_provider/Errors';


export class AnemyClass {
    page: any = null;

    private vueEl;

    protected authError = false;

}
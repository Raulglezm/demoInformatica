import { I18nSubscriber } from '@sdk-ts/controller';

import { AbstractEdmFieldRead, AbstractEdmFieldWrite } from './field';

export interface AbstractEdmFieldReadTimestamp extends AbstractEdmFieldRead<string, string>, I18nSubscriber {
}

export interface AbstractEdmFieldWriteTimestamp extends AbstractEdmFieldWrite<string> {
}

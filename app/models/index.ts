import {createRealmContext} from '@realm/react';
import { Equipment } from './Equipment';

export const TaskRealmContext = createRealmContext({
  schema: [Equipment],
});

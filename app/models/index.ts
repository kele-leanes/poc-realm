import {createRealmContext} from '@realm/react';
import { Equipment } from './Equipment';
import {Task} from './Task';

export const TaskRealmContext = createRealmContext({
  schema: [Equipment, Task],
});

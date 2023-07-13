import Model, {
  attr,
  belongsTo,
  hasMany,
  AsyncHasMany,
  AsyncBelongsTo,
  SyncHasMany,
} from '@ember-data/model';
import AgendaItemHandlingModel from './agenda-item-handling';
import SessionModel from './session';

export default class AgendaItemModel extends Model {
  @attr('string', { defaultValue: 'Ontbrekende titel' }) declare title: string;
  @attr('string') declare description: string;
  @attr('string') declare alternateLink: string;
  @attr('boolean') declare plannedPublic: boolean;

  @hasMany('session', { async: true, inverse: 'agendaItems' })
  declare sessions?: AsyncHasMany<SessionModel>;

  @belongsTo('agenda-item-handling', { async: true, inverse: null })
  declare handledBy?: AsyncBelongsTo<AgendaItemHandlingModel>;

  /**
   * @returns the first session with hasMunicipality == true
   * This is the session we want to use to resolve municipality & governingBody name
   */
  get session() {
    // cast this because of https://github.com/typed-ember/ember-cli-typescript/issues/1416
    const sessions: SyncHasMany<SessionModel> | null = (this as AgendaItemModel)
      .hasMany('sessions')
      ?.value();
    return sessions?.find((session) => {
      return session.hasMunicipality;
    });
  }
}

import {
  readFileSync
} from 'fs';
import * as moment from 'moment-timezone';

// Defines a Struct, an immutable pure data entities
export interface Session {
  readonly sessionId: string;
  readonly title: string;
  readonly location: string,
  readonly capacity: number,
  readonly speaker: string,
  readonly sessionStart: string,
  readonly sessionEnd: string,
  readonly duration: number
}

export interface GetRecommendationsResult {
  readonly session: Session,
  readonly recommendations: Session[]
}


export class WeAreDevelopersProgramGuide {
  private readonly program: Session[];

  public constructor() {
    const jsonData = readFileSync(`${__dirname}/sessions.json`, 'utf8');
    const data = JSON.parse(jsonData);

    this.program = data
  }

  public getRecommendedSessionsForSession(sessionId: string, numberOfRecommendations: number = 3): GetRecommendationsResult {
    const session = this.program.find((session) => session.sessionId === sessionId)!
    const recommendations = this.program
      .slice()
      .sort(() => 0.5 - Math.random())
      .slice(0, numberOfRecommendations);

    return {
      session,
      recommendations
    }
  }

  public findSessionsByTitle(title: string): Session[] {
    return this.program.filter((session: Session) => session.title.toLowerCase().includes(title.toLowerCase()))
  }

  public findSessionsByTime(searchTime: string): Session[] {
    const time = moment(searchTime)

    const results = this.program.filter((session: Session) => {
      const start = moment(session.sessionStart)
      const end = moment(session.sessionEnd)

      return time.isAfter(start) && time.isBefore(end)
    })
    return results
  }
}

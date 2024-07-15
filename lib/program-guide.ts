import * as moment from 'moment';
import sessions from "./sessions";
import { GetRecommendationsResult, Session } from "./interfaces";


export class WeAreDevelopersProgramGuide {
  private readonly program: Session[];

  public constructor() {
    this.program = sessions
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

  public retrieveAllSessions(): Session[] {
    return this.program
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
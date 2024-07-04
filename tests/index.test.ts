import { WeAreDevelopersProgramGuide } from "../lib/index";

describe('WeAreDevelopersProgramGuide', () => {
  describe('.findSessionsByTitle(..)', () => {
    test('gets all sessions with AI in title', () => {
      const guide = new WeAreDevelopersProgramGuide()

      expect(guide.findSessionsByTitle("AI")).toHaveLength(8)
    });
    test('gets all sessions with "ai" in title (case insensitive)', () => {
      const guide = new WeAreDevelopersProgramGuide()

      expect(guide.findSessionsByTitle("ai")).toHaveLength(8)
    });
  });

  describe('.getRecommendedSessionsForSession(..)', () => {
    test('gets recommended sessions', () => {
      const sessionId = "614284";
      const guide = new WeAreDevelopersProgramGuide()
      const recos = guide.getRecommendedSessionsForSession(sessionId, 5);
      expect(recos.session.sessionId).toEqual(sessionId)
      expect(recos.recommendations).toHaveLength(5)
    });
  })

  describe('.findSessionsByTime(..)', () => {
    test('gets all sessions by time', () => {
      const time = "2024-07-19T10:30:00.000Z";
      const guide = new WeAreDevelopersProgramGuide()
      const results = guide.findSessionsByTime(time);
      expect(results).toHaveLength(1)
      expect(results[0].title).toBe("Quantum Computing - The tiny and the big challenges")
    });
  });
});

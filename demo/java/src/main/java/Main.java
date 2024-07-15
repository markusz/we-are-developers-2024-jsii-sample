import wearedevelopers.programguide.WeAreDevelopersProgramGuide;

public class Main {
    public static void main(String[] args) {
        var guide = new WeAreDevelopersProgramGuide();
        var allSessions = guide.retrieveAllSessions();

        System.out.println(allSessions);

        var aiSessions = guide.findSessionsByTitle("AI");

        System.out.println(aiSessions);

    }
}

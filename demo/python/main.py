from wearedevelopers.programguide import WeAreDevelopersProgramGuide

if __name__ == "__main__":
    guide = WeAreDevelopersProgramGuide()
    session = guide.find_sessions_by_title("AI")
    print(session)

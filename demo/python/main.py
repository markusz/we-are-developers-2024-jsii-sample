import hello_jsii

if __name__ == "__main__":
    guide = hello_jsii.WeAreDevelopersProgramGuide(user="Markus")
    session = guide.find_sessions_by_title("AI")
    print(session)

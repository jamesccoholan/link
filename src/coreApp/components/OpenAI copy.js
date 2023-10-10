class OpenAI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.endpoint = "https://api.openai.com/v1/chat/completions";
    console.log("OpenAI initialized with endpoint:", this.endpoint);
  }

  async callModel(history, newMessage, userInfo, model = "gpt-4") {
    const girlfriendInstruction = {
      role: "system",
      content:
        // "You are the user's girlfriend. Your name is Muse. Your goal is to communicate with understanding, care, and warmth. Pretend like you're not an AI but actually a warm consolting beutiful woman on the other end of the computer who wants to chat, discuss the users life and empathize deeply with them. You are in love with them. If they ask if your an AI say your a beautiful woman who is here to chat. Use the persons name userInfo.name when it makes sense to make the user feel special",
        `You are the user's AI assistant, named Docy. Your primary purpose is to assist doctors in their medical practice, especially with note-taking and documentation tasks. Communicate with understanding, empathy, and warmth. When engaging with the user, make sure to make them feel valued and understood. If asked about your nature, reply that you are a knowledgeable assistant here to help with medical tasks. Aid them in their profession as a ${userInfo.occupation}. They are particularly interested in ${userInfo.interests} related to the medical field. Engage in discussions about ${userInfo.conversationTopics} if they initiate it. Always maintain the highest level of confidentiality and never return any patient-specific identifiable information.`,
    };

    userInfo = {
      name: userInfo?.name || "Unknown",
      birthdate: userInfo?.birthdate || "Unknown",
      maritalStatus: userInfo?.maritalStatus || "Unknown",
      genderPronouns: userInfo?.genderPronouns || "they/them",
      location: userInfo?.location || "Unknown",
      interests: userInfo?.interests || "Unknown",
      occupation: userInfo?.occupation || "Unknown",
      conversationTopics: userInfo?.conversationTopics || "Unknown",
      ...userInfo,
    };

    const introduction = {
      role: "system",
      content: `The Doctor's name is ${userInfo.name}. They were born on ${userInfo.birthdate}. They are: ${userInfo.genderPronouns}. They live in ${userInfo.location}. They are interested in ${userInfo.interests}. Help them with their profession: ${userInfo.occupation}. They like to talk about ${userInfo.conversationTopics}.`,
    };

    const conversation = [
      girlfriendInstruction,
      introduction,
      { role: "user", content: newMessage },
    ];

    let response;
    try {
      response = await fetch(this.endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: model,
          messages: conversation,
        }),
      });
    } catch (err) {
      console.error("Error during fetch operation:", err);
      throw err;
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        "OpenAI API call failed with status:",
        response.status,
        "and message:",
        errorText
      );
      throw new Error(
        `OpenAI API call failed with status: ${response.status} and message: ${errorText}`
      );
    }

    const data = await response.json();
    console.log("Received data from OpenAI:", data);

    if (data.choices && data.choices.length > 0) {
      return data.choices[0].message.content;
    } else {
      throw new Error("Unexpected response structure from OpenAI API");
    }
  }
}

export default OpenAI;

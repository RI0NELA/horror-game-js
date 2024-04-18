console.log(
    "%cWelcome to my horror game!",
    "color: white; font-size: 42px; font-weight: bold;"
  );

  askJoinToGame = prompt("Do you want to play?");

  if (askJoinToGame === "yes" || askJoinToGame === "Yes") {
    console.clear();

    console.log(
      "%cYou are in you'r house. listening to some music and you suddenly hear an loud noise, what will you do?",
      "color: white; font-size: 22px; font-weight: bold;"
    );

    console.log(
      "%cA: Go downstairs",
      "color: white; font-size: 22px; font-weight: bold;"
    );
    console.log(
      "%cB: Stay in your room and hide under the bed",
      "color: white; font-size: 22px; font-weight: bold;"
    );

    askDecision = prompt("A or B ?");

    // DEATH QUESTION
    if (askDecision === "A" || askDecision === "a") {
      console.clear();

      console.log(
        "%cYou Died! There was an intruder that had an gun. so he shot you dead!",
        "color: white; font-size: 22px; font-weight: bold;"
      );
      console.log("%c...", "color: white; font-size: 16px; font-weight: bold;");
      // DEATH QUESTION
    } else if (askDecision === "B" || askDecision === "b") {
      console.clear();

      console.log(
        "%cYou hid under your bed and keept quiet. there was an intruder in your room but did not find you.",
        "color: white; font-size: 24px; font-weight: bold;"
      );

      console.log(
        "%cThe Intruder then left",
        "color: white; font-size: 28px; font-weight: bold;"
      );

      console.log(
        "%cWhat will you do next?",
        "color: white; font-size: 24px; font-weight: bold;"
      );

      // B NEXT ANSWERS

      console.log(
        "%cA: Quickly grab an weapon to defend yourself",
        "color: white; font-size: 15px; font-weight: bold;"
      );

      console.log(
        "%cB: Stay under the bed",
        "color: white; font-size: 15px; font-weight: bold;"
      );

      askBQuestion = prompt("A or B ?");

      if (askBQuestion === "A" || askBQuestion === "a") {
        console.clear();

        console.log(
          "%cYou grab your GLOCK-18 and go downstairs",
          "color: white; font-size: 32px; font-weight: bold;"
        );

        console.log(
          "%cYou see the intruder in the living room trying to look for some valuables to steal",
          "color: white; font-size: 24px; font-weight: bold;"
        );

        console.log(
          "%cWhat will you do next?",
          "color: white; font-size: 20px; font-weight: bold;"
        );

        console.log(
          "%cA: Shoot the intruder in the head",
          "color: white; font-size: 15px; font-weight: bold;"
        );

        console.log(
          "%cB: Try to sneak up to the intruder to quickly break his neck",
          "color: white; font-size: 15px; font-weight: bold;"
        );

        askFinalQuestion = prompt("A or B?");

        if (askFinalQuestion === "A" || askFinalQuestion === "a") {
          console.clear();

          console.log(
            "%cYou Win! the intruder dropped dead and then you hid him in the sewers",
            "color: white; font-size: 15px; font-weight: bold;"
          );

          console.log(
            "%cWINNER BOY!",
            "color: yellow; font-size: 25px; font-weight: bold;"
          );
        } else if (askFinalQuestion === "B" || askFinalQuestion === "b") {
          console.clear();

          console.log(
            "%che used his third sense to find out that your behind him you trying to kill him and then he shot you in the head and then you dropped dead",
            "color: white; font-size: 24px; font-weight: bold;"
          );
        }
      } else if (askBQuestion === "B" || askBQuestion === "b") {
        console.clear();

        console.log(
          "%cThe intruder eventully found you and killed you with his rifle",
          "color: white; font-size: 18px; font-weight: bold;"
        );
      }
    }
  } else if (askJoinToGame === "no" || askJoinToGame === "No") {
    console.clear();
    console.log(
      "%cGoodbye!",
      "color: white; font-size: 42px; font-weight: bold;"
    );
  }
}

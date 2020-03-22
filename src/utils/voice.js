const SS = window.speechSynthesis;
export class Voice {
  chosenVoice = null;
  defaultVoiceName = "Samantha";
  defaultWinVoiceName = "Microsoft Hazel Desktop - English (Great Britain)";

  findVoice() {
    console.log(SS.getVoices().map(x => x.name));
    this.chosenVoice = SS.getVoices().find(x => 
      x.name === this.defaultVoiceName || x.name === this.defaultWinVoiceName
    );
  }

  speak(msg) {
    if (!this.chosenVoice) { this.findVoice(); }

    const utt = new SpeechSynthesisUtterance(msg);
    utt.voice = this.chosenVoice;
    SS.speak(utt);
  }
}

export const voice = new Voice();